import asyncio
from abc import ABC, abstractmethod
from typing import Dict, Any, List, Optional

class ConduitInterface(ABC):
    @abstractmethod
    async def establish_link(self, destination: str) -> bool:
        pass

class ConduitManager(ConduitInterface):
    def __init__(self):
        self.active_links: Dict[str, asyncio.StreamWriter] = {}
        self.link_health: Dict[str, str] = {}
        self.conduit_buffer: List[bytes] = []

    async def establish_link(self, destination: str) -> bool:
        try:
            reader, writer = await asyncio.wait_for(
                asyncio.open_connection(destination, 80), timeout=3.0
            )
            self.active_links[destination] = writer
            self.link_health[destination] = "aligned"
            return True
        except Exception:
            self.link_health[destination] = "fractured"
            return False

    async def pulse_data(self, destination: str, payload: bytes):
        if destination in self.active_links:
            writer = self.active_links[destination]
            writer.write(payload)
            await writer.drain()
            self.conduit_buffer.append(payload[:10])
        else:
            raise ConnectionError("Conduit not established")

    async def sever_link(self, destination: str):
        if destination in self.active_links:
            writer = self.active_links[destination]
            writer.close()
            await writer.wait_closed()
            del self.active_links[destination]
            self.link_health[destination] = "severed"

    def get_link_status(self, destination: str) -> str:
        return self.link_health.get(destination, "unknown")

    async def monitor_conduits(self):
        while True:
            for dest in list(self.active_links.keys()):
                if self.active_links[dest].is_closing():
                    self.link_health[dest] = "collapsed"
            await asyncio.sleep(5)

    def list_active_conduits(self) -> List[str]:
        return list(self.active_links.keys())

    async def broadcast_essence(self, payload: bytes):
        tasks = []
        for dest in self.active_links:
            tasks.append(self.pulse_data(dest, payload))
        if tasks:
            await asyncio.gather(*tasks)

    def reset_all_links(self):
        for dest in list(self.active_links.keys()):
            self.active_links[dest].close()
        self.active_links.clear()
        self.link_health.clear()
        self.conduit_buffer.clear()

    def count_aligned_conduits(self) -> int:
        return sum(1 for v in self.link_health.values() if v == "aligned")

    def get_buffer_summary(self) -> List[str]:
        return [b.hex() for b in self.conduit_buffer]

    def validate_destination(self, dest: str) -> bool:
        return len(dest) > 3 and ":" in dest if ":" in dest else len(dest) > 3

    def purge_conduit_buffer(self):
        self.conduit_buffer.clear()

    async def refresh_all_links(self):
        dests = self.list_active_conduits()
        self.reset_all_links()
        for d in dests:
            await self.establish_link(d)
