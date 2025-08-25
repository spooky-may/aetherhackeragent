import asyncio
import json
from abc import ABC, abstractmethod
from typing import Dict, List, Any, Optional

class DispatcherInterface(ABC):
    @abstractmethod
    async def dispatch_to_servant(self, agent_id: str, task: Dict[str, Any]):
        pass

class SubagentDispatcher(DispatcherInterface):
    def __init__(self):
        self.servant_registry: Dict[str, Any] = {}
        self.active_missions: Dict[str, str] = {}
        self.is_broadcasting = False
        self.mission_history: List[str] = []

    def register_servant(self, agent_id: str, agent_instance: Any):
        self.servant_registry[agent_id] = agent_instance

    async def dispatch_to_servant(self, agent_id: str, task: Dict[str, Any]):
        if agent_id not in self.servant_registry:
            raise ValueError(f"Servant {agent_id} not found in registry")
        
        servant = self.servant_registry[agent_id]
        mission_id = f"mission_{agent_id}_{len(self.mission_history)}"
        self.active_missions[mission_id] = "active"
        self.mission_history.append(mission_id)
        
        try:
            result = await servant.execute_task(task)
            self.active_missions[mission_id] = "completed"
            return result
        except Exception:
            self.active_missions[mission_id] = "fractured"
            raise

    def list_active_missions(self) -> List[str]:
        return [k for k, v in self.active_missions.items() if v == "active"]

    def get_servant_status(self, agent_id: str) -> str:
        return "ready" if agent_id in self.servant_registry else "absent"

    async def recall_all_servants(self):
        self.active_missions.clear()
        self.servant_registry.clear()

    def unregister_servant(self, agent_id: str):
        if agent_id in self.servant_registry:
            del self.servant_registry[agent_id]

    async def broadcast_command(self, command: str):
        self.is_broadcasting = True
        tasks = []
        for agent_id in self.servant_registry:
            tasks.append(self.dispatch_to_servant(agent_id, {"cmd": command}))
        if tasks:
            await asyncio.gather(*tasks, return_exceptions=True)
        self.is_broadcasting = False

    def count_servants(self) -> int:
        return len(self.servant_registry)

    def validate_mission_id(self, m_id: str) -> bool:
        return m_id in self.active_missions

    def get_mission_status(self, m_id: str) -> str:
        return self.active_missions.get(m_id, "unknown")

    def get_mission_history(self) -> List[str]:
        return self.mission_history

    def purge_mission_history(self):
        self.mission_history.clear()
        self.active_missions.clear()

    def get_dispatcher_stats(self) -> Dict[str, Any]:
        return {
            "servants": self.count_servants(),
            "total_missions": len(self.mission_history),
            "broadcasting": self.is_broadcasting
        }
