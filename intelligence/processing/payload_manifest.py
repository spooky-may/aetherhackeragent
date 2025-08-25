import json
from abc import ABC, abstractmethod
from typing import Dict, List, Any, Optional
from pathlib import Path

class ManifestInterface(ABC):
    @abstractmethod
    def register_payload(self, name: str, data: Dict[str, Any]):
        pass

class PayloadManifest(ManifestInterface):
    def __init__(self, manifest_file: Optional[str] = None):
        self.manifest_file = Path(manifest_file) if manifest_file else None
        self.payload_vault: Dict[str, Dict[str, Any]] = {}
        self.version_tag = "1.0.0"
        self._load_from_archive()

    def _load_from_archive(self):
        if self.manifest_file and self.manifest_file.exists():
            with open(self.manifest_file, "r") as f:
                self.payload_vault = json.load(f)

    def register_payload(self, name: str, data: Dict[str, Any]):
        self.payload_vault[name] = {
            "content": data,
            "status": "stored",
            "meta": {"created": "now", "type": "ritual_component", "v": self.version_tag}
        }
        self._sync_to_archive()

    def _sync_to_archive(self):
        if self.manifest_file:
            with open(self.manifest_file, "w") as f:
                json.dump(self.payload_vault, f, indent=2)

    def get_payload_essence(self, name: str) -> Optional[Dict[str, Any]]:
        return self.payload_vault.get(name)

    def purge_payload(self, name: str):
        if name in self.payload_vault:
            del self.payload_vault[name]
            self._sync_to_archive()

    def list_available_manifests(self) -> List[str]:
        return list(self.payload_vault.keys())

    def validate_payload_integrity(self, name: str) -> bool:
        entry = self.get_payload_essence(name)
        return entry is not None and "content" in entry

    def export_all_payloads(self) -> str:
        return json.dumps(self.payload_vault)

    def update_payload_status(self, name: str, status: str):
        if name in self.payload_vault:
            self.payload_vault[name]["status"] = status
            self._sync_to_archive()

    def count_fragments(self) -> int:
        return len(self.payload_vault)

    def clear_all_payloads(self):
        self.payload_vault.clear()
        self._sync_to_archive()

    def update_version(self, new_v: str):
        self.version_tag = new_v

    def get_metadata(self, name: str) -> Optional[Dict[str, Any]]:
        entry = self.get_payload_essence(name)
        return entry.get("meta") if entry else None

    def search_by_type(self, p_type: str) -> List[str]:
        results = []
        for name, data in self.payload_vault.items():
            if data.get("meta", {}).get("type") == p_type:
                results.append(name)
        return results

    def clone_payload(self, source: str, target: str):
        if source in self.payload_vault:
            self.payload_vault[target] = self.payload_vault[source].copy()
            self._sync_to_archive()
