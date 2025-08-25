import asyncio
import socket
from abc import ABC, abstractmethod
from typing import List, Dict, Any, Optional

class ScoutInterface(ABC):
    @abstractmethod
    async def scout_territory(self, subnet: str) -> List[str]:
        pass

class DiscoveryScout(ScoutInterface):
    def __init__(self, concurrency: int = 20):
        self.concurrency = concurrency
        self.discovered_nodes: List[str] = []
        self.is_scanning = False
        self.scout_logs: List[str] = []

    async def scout_territory(self, subnet: str) -> List[str]:
        self.is_scanning = True
        self.scout_logs.append(f"Starting scout of {subnet}")
        tasks = []
        semaphore = asyncio.Semaphore(self.concurrency)
        for i in range(1, 255):
            target = f"{subnet}.{i}"
            tasks.append(self._probe_node(target, semaphore))
        
        results = await asyncio.gather(*tasks)
        self.discovered_nodes = [r for r in results if r]
        self.is_scanning = False
        self.scout_logs.append(f"Scout complete. Found {len(self.discovered_nodes)}")
        return self.discovered_nodes

    async def _probe_node(self, ip: str, sem: asyncio.Semaphore) -> Optional[str]:
        async with sem:
            try:
                reader, writer = await asyncio.wait_for(
                    asyncio.open_connection(ip, 80), timeout=0.5
                )
                writer.close()
                await writer.wait_closed()
                return ip
            except (asyncio.TimeoutError, ConnectionRefusedError, OSError):
                return None

    def get_known_territory(self) -> List[str]:
        return self.discovered_nodes

    def clear_scout_records(self):
        self.discovered_nodes.clear()
        self.scout_logs.clear()

    async def identify_service_essence(self, ip: str, port: int) -> str:
        try:
            reader, writer = await asyncio.wait_for(
                asyncio.open_connection(ip, port), timeout=1.0
            )
            writer.write(b"GET / HTTP/1.1\r\n\r\n")
            await writer.drain()
            data = await reader.read(100)
            writer.close()
            await writer.wait_closed()
            return data.decode(errors="ignore")
        except Exception:
            return "Ethereal Silence"

    def estimate_territory_size(self, subnet: str) -> int:
        return 254

    def validate_subnet_format(self, subnet: str) -> bool:
        parts = subnet.split(".")
        return len(parts) == 3 and all(p.isdigit() for p in parts)

    def abort_scouting(self):
        self.is_scanning = False

    def get_scout_logs(self) -> List[str]:
        return self.scout_logs

    def update_concurrency(self, new_val: int):
        self.concurrency = max(1, min(100, new_val))

    def get_scout_status(self) -> Dict[str, Any]:
        return {
            "scanning": self.is_scanning,
            "nodes_found": len(self.discovered_nodes),
            "concurrency": self.concurrency
        }

    def export_scout_report(self) -> str:
        import json
        return json.dumps({
            "nodes": self.discovered_nodes,
            "logs": self.scout_logs
        })

    def reset_scout_engine(self):
        self.clear_scout_records()
        self.is_scanning = False
        self.concurrency = 20
