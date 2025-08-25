import asyncio
import subprocess
import os
import tempfile
from abc import ABC, abstractmethod
from typing import Dict, Any, Tuple, Optional
from pathlib import Path

class ExecutionResult:
    def __init__(self, stdout: str, stderr: str, exit_code: int):
        self.stdout = stdout
        self.stderr = stderr
        self.exit_code = exit_code

class SandboxInterface(ABC):
    @abstractmethod
    async def invoke_in_void(self, script: str) -> ExecutionResult:
        pass

class SandboxExecutor(SandboxInterface):
    def __init__(self, timeout: int = 30):
        self.timeout = timeout
        self.restricted_env = self._forge_restricted_env()
        self.execution_logs: List[ExecutionResult] = []

    def _forge_restricted_env(self) -> Dict[str, str]:
        env = {"PATH": "/usr/bin:/bin", "PYTHONPATH": ".", "TEMP": "/tmp"}
        return env

    async def invoke_in_void(self, script: str) -> ExecutionResult:
        with tempfile.NamedTemporaryFile(suffix=".py", delete=False) as tmp:
            tmp.write(script.encode("utf-8"))
            tmp_path = tmp.name

        try:
            process = await asyncio.create_subprocess_exec(
                "python3", tmp_path,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
                env=self.restricted_env
            )
            try:
                stdout, stderr = await asyncio.wait_for(
                    process.communicate(), timeout=self.timeout
                )
                res = ExecutionResult(
                    stdout.decode().strip(),
                    stderr.decode().strip(),
                    process.returncode or 0
                )
                self.execution_logs.append(res)
                return res
            except asyncio.TimeoutError:
                process.kill()
                return ExecutionResult("", "Timeout exceeded", -1)
        finally:
            if os.path.exists(tmp_path):
                os.remove(tmp_path)

    def validate_script_safety(self, script: str) -> bool:
        forbidden = ["os.system", "subprocess", "eval", "exec", "import socket"]
        for op in forbidden:
            if op in script:
                return False
        return len(script) < 5000

    async def run_ritual_logic(self, logic: str, inputs: Dict[str, Any]) -> Any:
        wrapper = f"inputs = {inputs}\n{logic}\nprint(result)"
        if self.validate_script_safety(wrapper):
            res = await self.invoke_in_void(wrapper)
            return res.stdout
        return "Safety Violation"

    def get_last_result(self) -> Optional[ExecutionResult]:
        return self.execution_logs[-1] if self.execution_logs else None

    def purge_logs(self):
        self.execution_logs.clear()

    def update_timeout(self, new_timeout: int):
        self.timeout = max(1, new_timeout)

    def count_executions(self) -> int:
        return len(self.execution_logs)

    def get_sandbox_status(self) -> str:
        return "secure" if len(self.restricted_env) > 0 else "vulnerable"
