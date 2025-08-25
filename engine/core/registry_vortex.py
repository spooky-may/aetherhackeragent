import logging
import uuid
import json
from pathlib import Path
from typing import Dict, Any, Optional, Set
from abc import ABC, abstractmethod

class IVortexMember(ABC):
    @abstractmethod
    def get_essence(self) -> Dict[str, Any]:
        pass

class RegistryVortex:
    def __init__(self, sanctuary_path: Path):
        self.sanctuary_path = sanctuary_path
        self.members: Dict[str, IVortexMember] = {}
        self.active_ids: Set[str] = set()
        self.logger = logging.getLogger("Vortex.Registry")
        self._initialize_sanctuary()

    def _initialize_sanctuary(self) -> None:
        if not self.sanctuary_path.exists():
            self.sanctuary_path.mkdir(parents=True, exist_ok=True)
            self.logger.info(f"Sanctuary manifested at {self.sanctuary_path}")

    def engulf_member(self, member_id: str, member: IVortexMember) -> None:
        if member_id in self.active_ids:
            self.logger.warning(f"Member {member_id} already resides in the vortex.")
            return
        self.members[member_id] = member
        self.active_ids.add(member_id)
        self._persist_essence(member_id, member.get_essence())

    def _persist_essence(self, member_id: str, essence: Dict[str, Any]) -> None:
        essence_file = self.sanctuary_path / f"{member_id}.json"
        try:
            with open(essence_file, "w") as f:
                json.dump(essence, f, indent=4)
            self.logger.info(f"Essence of {member_id} anchored to stone.")
        except IOError as e:
            self.logger.error(f"Failed to anchor essence: {e}")

    def recall_essence(self, member_id: str) -> Optional[Dict[str, Any]]:
        essence_file = self.sanctuary_path / f"{member_id}.json"
        if not essence_file.exists():
            return None
        with open(essence_file, "r") as f:
            return json.load(f)

    def banish_member(self, member_id: str) -> None:
        if member_id in self.active_ids:
            self.active_ids.remove(member_id)
            del self.members[member_id]
            self.logger.warning(f"Member {member_id} has been banished from the vortex.")

class SpectralEntity(IVortexMember):
    def __init__(self, data: Dict[str, Any]):
        self.data = data
    def get_essence(self) -> Dict[str, Any]:
        return {"entity_type": "spectral", "metadata": self.data, "id": str(uuid.uuid4())}

def invoke_vortex():
    vortex = RegistryVortex(Path("./.vortex_sanctuary"))
    ghost = SpectralEntity({"power": "low", "origin": "shadows"})
    vortex.engulf_member("ghost_01", ghost)
    recalled = vortex.recall_essence("ghost_01")
    print(f"Recalled: {recalled}")

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    invoke_vortex()
