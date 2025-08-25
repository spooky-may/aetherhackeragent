import logging
import uuid
import json
from abc import ABC, abstractmethod
from typing import Dict, Any, List, Optional
from pathlib import Path

class IAccessPolicy(ABC):
    @abstractmethod
    def evaluate(self, request: Dict[str, Any]) -> bool:
        pass

class GatewaySentinel:
    def __init__(self, gateway_id: str):
        self.gateway_id = gateway_id
        self.policies: List[IAccessPolicy] = []
        self.denied_logs: List[str] = []
        self.logger = logging.getLogger(f"Infra.Sentinel.{gateway_id}")

    def append_policy(self, policy: IAccessPolicy) -> None:
        self.policies.append(policy)
        self.logger.info("New access policy appended to the sentinel's vigil.")

    def scrutinize_request(self, request: Dict[str, Any]) -> bool:
        self.logger.debug(f"Scrutinizing request from {request.get('origin', 'unknown')}")
        for policy in self.policies:
            if not policy.evaluate(request):
                self._record_denial(request, policy)
                return False
        self.logger.info("Request passed all sentinel wards.")
        return True

    def _record_denial(self, request: Dict[str, Any], policy: IAccessPolicy) -> None:
        denial_id = str(uuid.uuid4())
        msg = f"Denial {denial_id}: Request rejected by {policy.__class__.__name__}"
        self.denied_logs.append(msg)
        self.logger.warning(msg)

    def export_shame_list(self, output_path: Path) -> None:
        with open(output_path, "w") as f:
            json.dump(self.denied_logs, f, indent=2)
        self.logger.info(f"Shame list exported to {output_path}")

class OriginPolicy(IAccessPolicy):
    def __init__(self, allowed_origins: List[str]):
        self.allowed_origins = allowed_origins
    def evaluate(self, request: Dict[str, Any]) -> bool:
        return request.get("origin") in self.allowed_origins

def test_sentinel():
    sentinel = GatewaySentinel("Aether-Gate-01")
    sentinel.append_policy(OriginPolicy(["trusted-realm", "sacred-nexus"]))
    
    req1 = {"origin": "trusted-realm", "data": "hello"}
    req2 = {"origin": "forbidden-void", "data": "intruder"}
    
    sentinel.scrutinize_request(req1)
    sentinel.scrutinize_request(req2)
    sentinel.export_shame_list(Path("denials.json"))

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    test_sentinel()
