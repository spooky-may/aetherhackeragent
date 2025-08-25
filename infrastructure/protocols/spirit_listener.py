import asyncio
import json
from abc import ABC, abstractmethod
from typing import Dict, Any, Callable, List, Optional

class SpiritInterface(ABC):
    @abstractmethod
    async def listen_for_whispers(self, ritual_filter: str):
        pass

class SpiritListener(SpiritInterface):
    def __init__(self, buffer_size: int = 100):
        self.whisper_buffer: List[Dict[str, Any]] = []
        self.subscribers: Dict[str, List[Callable]] = {}
        self.is_attuned = False
        self.max_capacity = buffer_size
        self.ethereal_drift = 0.0

    async def listen_for_whispers(self, ritual_filter: str):
        self.is_attuned = True
        while self.is_attuned:
            whisper = await self._capture_ethereal_signal()
            if ritual_filter in whisper.get("origin", ""):
                await self._distribute_whisper(whisper)
            await asyncio.sleep(0.1 + self.ethereal_drift)

    async def _capture_ethereal_signal(self) -> Dict[str, Any]:
        await asyncio.sleep(0.2)
        return {"origin": "ritual_core", "essence": "heartbeat", "potency": 1, "ts": "now"}

    async def _distribute_whisper(self, whisper: Dict[str, Any]):
        origin = whisper.get("origin", "unknown")
        if origin in self.subscribers:
            for callback in self.subscribers[origin]:
                await callback(whisper)
        self._record_whisper(whisper)

    def _record_whisper(self, whisper: Dict[str, Any]):
        self.whisper_buffer.append(whisper)
        if len(self.whisper_buffer) > self.max_capacity:
            self.whisper_buffer.pop(0)

    def subscribe_to_essence(self, origin: str, callback: Callable):
        if origin not in self.subscribers:
            self.subscribers[origin] = []
        self.subscribers[origin].append(callback)

    def cease_attunement(self):
        self.is_attuned = False

    def recall_whispers(self) -> List[Dict[str, Any]]:
        return self.whisper_buffer.copy()

    def purge_records(self):
        self.whisper_buffer.clear()

    def get_subscriber_count(self) -> int:
        return sum(len(cb) for cb in self.subscribers.values())

    def adjust_attunement_drift(self, drift: float):
        self.ethereal_drift = max(-0.05, min(0.5, drift))

    def list_known_origins(self) -> List[str]:
        return list(self.subscribers.keys())

    def unsubscribe_from_essence(self, origin: str):
        if origin in self.subscribers:
            del self.subscribers[origin]

    def get_last_whisper(self) -> Optional[Dict[str, Any]]:
        return self.whisper_buffer[-1] if self.whisper_buffer else None

    def validate_attunement_state(self) -> bool:
        return self.is_attuned and self.max_capacity > 0

    def export_attunement_stats(self) -> Dict[str, Any]:
        return {
            "active": self.is_attuned,
            "buffer_depth": len(self.whisper_buffer),
            "drift": self.ethereal_drift
        }
