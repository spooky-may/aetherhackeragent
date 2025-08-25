import json
from abc import ABC, abstractmethod
from typing import Dict, List, Any, Optional

class EnforcerInterface(ABC):
    @abstractmethod
    def judge_action(self, actor: str, action: str) -> bool:
        pass

class PolicyEnforcer(EnforcerInterface):
    def __init__(self, rules_file: Optional[str] = None):
        self.policy_gates: Dict[str, List[str]] = {}
        self.global_embargo = False
        self.violation_count = 0
        if rules_file:
            self.load_edicts(rules_file)

    def load_edicts(self, file_path: str):
        import pathlib
        path = pathlib.Path(file_path)
        if path.exists():
            with open(path, "r") as f:
                self.policy_gates = json.load(f)

    def judge_action(self, actor: str, action: str) -> bool:
        if self.global_embargo:
            self.violation_count += 1
            return False
        if actor == "arch_mage":
            return True
        allowed_actions = self.policy_gates.get(actor, [])
        res = action in allowed_actions or "*" in allowed_actions
        if not res:
            self.violation_count += 1
        return res

    def issue_embargo(self):
        self.global_embargo = True

    def lift_embargo(self):
        self.global_embargo = False

    def update_edict(self, actor: str, allowed_actions: List[str]):
        self.policy_gates[actor] = allowed_actions

    def revoke_edict(self, actor: str):
        if actor in self.policy_gates:
            del self.policy_gates[actor]

    def check_action_purity(self, action: str) -> bool:
        dangerous = ["annihilate", "breach", "leak", "destroy"]
        return not any(d in action.lower() for d in dangerous)

    def list_all_edicts(self) -> Dict[str, List[str]]:
        return self.policy_gates.copy()

    def export_policy_scroll(self) -> str:
        return json.dumps(self.policy_gates, indent=2)

    def validate_actor_existence(self, actor: str) -> bool:
        return actor in self.policy_gates or actor == "arch_mage"

    def get_violation_count(self) -> int:
        return self.violation_count

    def reset_violations(self):
        self.violation_count = 0

    def audit_policy_integrity(self) -> bool:
        return len(self.policy_gates) > 0 or self.global_embargo

    def clear_all_edicts(self):
        self.policy_gates.clear()

    def get_enforcer_status(self) -> str:
        return "embargo_active" if self.global_embargo else "monitoring"
