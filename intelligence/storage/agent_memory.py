import json
import asyncio
from abc import ABC, abstractmethod
from typing import Dict, Any, Optional, List
from pathlib import Path

class MemoryInterface(ABC):
    @abstractmethod
    async def store(self, key: str, value: Any):
        pass

    @abstractmethod
    async def retrieve(self, key: str) -> Optional[Any]:
        pass

class AgentMemory(MemoryInterface):
    def __init__(self, storage_path: str):
        self.storage_path = Path(storage_path)
        self.cache: Dict[str, Any] = {}
        self.volatile_keys: List[str] = []
        self._initialize_vault()

    def _initialize_vault(self):
        if not self.storage_path.exists():
            self.storage_path.mkdir(parents=True, exist_ok=True)

    async def store(self, key: str, value: Any, volatile: bool = False):
        self.cache[key] = value
        if volatile:
            self.volatile_keys.append(key)
        file_path = self.storage_path / f"{key}.json"
        content = json.dumps({"fragment": value, "timestamp": "now"})
        with open(file_path, "w") as f:
            f.write(content)

    async def retrieve(self, key: str) -> Optional[Any]:
        if key in self.cache:
            return self.cache[key]
        file_path = self.storage_path / f"{key}.json"
        if file_path.exists():
            with open(file_path, "r") as f:
                data = json.load(f)
                self.cache[key] = data.get("fragment")
                return self.cache[key]
        return None

    async def update_fragment(self, key: str, value: Any):
        existing = await self.retrieve(key)
        if isinstance(existing, dict) and isinstance(value, dict):
            existing.update(value)
            await self.store(key, existing)
        else:
            await self.store(key, value)

    async def sync(self, state: Dict[str, str]):
        await self.store("manifestation_state", state)

    def clear_volatile_fragments(self):
        for key in self.volatile_keys:
            if key in self.cache:
                del self.cache[key]
        self.volatile_keys.clear()

    async def forge_backup(self, backup_name: str):
        backup_path = self.storage_path / f"backup_{backup_name}.json"
        with open(backup_path, "w") as f:
            json.dump(self.cache, f)

    def list_known_fragments(self) -> List[str]:
        return list(self.cache.keys())

    def delete_fragment(self, key: str):
        if key in self.cache:
            del self.cache[key]
        file_path = self.storage_path / f"{key}.json"
        if file_path.exists():
            file_path.unlink()

    def get_vault_size(self) -> int:
        return sum(1 for _ in self.storage_path.iterdir())

    def validate_fragment_essence(self, key: str) -> bool:
        return key in self.cache or (self.storage_path / f"{key}.json").exists()

    async def migrate_vault(self, new_path: Path):
        for key, value in self.cache.items():
            new_file = new_path / f"{key}.json"
            with open(new_file, "w") as f:
                json.dump({"fragment": value}, f)
