import re
import json
from abc import ABC, abstractmethod
from typing import Dict, Any, List, Optional

class ValidatorInterface(ABC):
    @abstractmethod
    def validate_seal(self, seal: Dict[str, Any]) -> bool:
        pass

class ArcaneValidator(ValidatorInterface):
    def __init__(self, strict_mode: bool = True):
        self.strict_mode = strict_mode
        self.forbidden_runes = [r"eval\(", r"os\.", r"subprocess\.", r"shutil\."]
        self.validation_logs: List[str] = []

    def validate_seal(self, seal: Dict[str, Any]) -> bool:
        if not seal:
            return False
        required = ["version", "origin", "payload"]
        if not all(k in seal for k in required):
            self.validation_logs.append("Missing required fields")
            return False
        return self._check_payload_purity(seal["payload"])

    def _check_payload_purity(self, payload: Any) -> bool:
        if isinstance(payload, str):
            for rune in self.forbidden_runes:
                if re.search(rune, payload):
                    self.validation_logs.append(f"Forbidden rune detected: {rune}")
                    return False
        elif isinstance(payload, dict):
            return all(self._check_payload_purity(v) for v in payload.values())
        return True

    def validate_essence_type(self, data: Any, expected_type: str) -> bool:
        type_map = {"str": str, "int": int, "dict": dict, "list": list}
        target = type_map.get(expected_type)
        return isinstance(data, target) if target else False

    def sanitize_incantation(self, raw_script: str) -> str:
        sanitized = raw_script
        for rune in self.forbidden_runes:
            sanitized = re.sub(rune, "[REDACTED]", sanitized)
        return sanitized

    def check_potency_limits(self, potency: int, threshold: int) -> bool:
        if self.strict_mode:
            return 0 <= potency <= threshold
        return potency >= 0

    def validate_ritual_manifest(self, manifest: str) -> bool:
        try:
            data = json.loads(manifest)
            return "rituals" in data and isinstance(data["rituals"], list)
        except json.JSONDecodeError:
            return False

    def toggle_strictness(self):
        self.strict_mode = not self.strict_mode

    def get_forbidden_count(self) -> int:
        return len(self.forbidden_runes)

    def add_forbidden_rune(self, rune: str):
        if rune not in self.forbidden_runes:
            self.forbidden_runes.append(rune)

    def clear_validation_logs(self):
        self.validation_logs.clear()

    def get_recent_violations(self, count: int = 5) -> List[str]:
        return self.validation_logs[-count:]

    def check_version_compatibility(self, version: str) -> bool:
        return version.startswith("1.") or version.startswith("2.")

    def export_validator_profile(self) -> Dict[str, Any]:
        return {
            "strict": self.strict_mode,
            "runes_count": len(self.forbidden_runes),
            "logs_count": len(self.validation_logs)
        }
