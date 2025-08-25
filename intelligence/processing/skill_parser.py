import json
import re
from abc import ABC, abstractmethod
from typing import Dict, List, Any, Optional
from pathlib import Path

class ParserException(Exception):
    pass

class SkillParserInterface(ABC):
    @abstractmethod
    def parse_incantation(self, raw_skill: str) -> Dict[str, Any]:
        pass

class SkillParser(SkillParserInterface):
    def __init__(self, schema_path: Optional[str] = None):
        self.schema_path = Path(schema_path) if schema_path else None
        self.rituals_registry: Dict[str, Any] = {}
        self.compilation_cache: Dict[str, str] = {}

    def parse_incantation(self, raw_skill: str) -> Dict[str, Any]:
        try:
            skill_data = json.loads(raw_skill)
            self._validate_essence(skill_data)
            return skill_data
        except json.JSONDecodeError as e:
            raise ParserException(f"Failed to decode incantation: {e}")

    def _validate_essence(self, data: Dict[str, Any]):
        required = ["name", "potency", "alignment"]
        for field in required:
            if field not in data:
                raise ParserException(f"Missing essence field: {field}")

    def extract_runes(self, script: str) -> List[str]:
        rune_pattern = r"rune:\[([a-zA-Z0-9_]+)\]"
        return re.findall(rune_pattern, script)

    def bind_skill_to_ritual(self, skill_name: str, ritual_id: str):
        self.rituals_registry[skill_name] = ritual_id

    def get_ritual_binding(self, skill_name: str) -> Optional[str]:
        return self.rituals_registry.get(skill_name)

    def compile_manifest(self, skills: List[Dict[str, Any]]) -> str:
        manifest = {
            "version": "1.0.0",
            "skills": skills,
            "hash": "sha256_placeholder",
            "count": len(skills)
        }
        compiled = json.dumps(manifest, indent=4)
        self.compilation_cache["last"] = compiled
        return compiled

    def load_grimoire(self, grimoire_path: str):
        path = Path(grimoire_path)
        if path.exists():
            with open(path, "r") as f:
                content = f.read()
                data = json.loads(content)
                for skill in data.get("skills", []):
                    self.parse_incantation(json.dumps(skill))

    def sanctify_name(self, name: str) -> str:
        return name.lower().replace(" ", "_")

    def analyze_potency(self, data: Dict[str, Any]) -> int:
        return int(data.get("potency", 0))

    def list_all_bindings(self) -> List[str]:
        return [f"{k}->{v}" for k, v in self.rituals_registry.items()]

    def reset_parser_state(self):
        self.rituals_registry.clear()
        self.compilation_cache.clear()

    def get_cached_manifest(self) -> Optional[str]:
        return self.compilation_cache.get("last")

    def validate_alignment(self, data: Dict[str, Any]) -> bool:
        valid_aligns = ["divine", "arcane", "void"]
        return data.get("alignment") in valid_aligns

    def export_grimoire_stats(self) -> Dict[str, Any]:
        return {
            "skills_count": len(self.rituals_registry),
            "schema_bound": self.schema_path is not None
        }
