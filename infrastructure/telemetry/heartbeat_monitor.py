import asyncio
import logging
import time
from typing import Dict, Any, List, Optional
from abc import ABC, abstractmethod

class IHeartbeatSource(ABC):
    @abstractmethod
    def get_pulse(self) -> Dict[str, Any]:
        pass

class HeartbeatMonitor:
    def __init__(self, cluster_id: str):
        self.cluster_id = cluster_id
        self.sources: Dict[str, IHeartbeatSource] = {}
        self.history: List[Dict[str, Any]] = []
        self.logger = logging.getLogger(f"Telemetry.Heartbeat.{cluster_id}")
        self._monitoring = False

    def link_source(self, name: str, source: IHeartbeatSource) -> None:
        self.sources[name] = source
        self.logger.info(f"Source '{name}' linked to the cluster heartbeat.")

    async def start_monitoring(self, interval: float = 2.0):
        self._monitoring = True
        self.logger.info("Heartbeat monitoring cycle initialized.")
        while self._monitoring:
            await self._collect_pulses()
            await asyncio.sleep(interval)

    async def _collect_pulses(self):
        timestamp = time.time()
        for name, source in self.sources.items():
            try:
                pulse = source.get_pulse()
                self._record_pulse(name, pulse, timestamp)
            except Exception as e:
                self.logger.error(f"Failed to capture pulse from {name}: {e}")

    def _record_pulse(self, name: str, pulse: Dict[str, Any], ts: float):
        entry = {"source": name, "data": pulse, "time": ts}
        self.history.append(entry)
        if len(self.history) > 1000:
            self.history.pop(0)
        self.logger.debug(f"Pulse captured from {name} at {ts}")

    def stop(self):
        self._monitoring = False
        self.logger.warning("Heartbeat monitoring has been silenced.")

class CoreSource(IHeartbeatSource):
    def get_pulse(self) -> Dict[str, Any]:
        return {"load": 0.15, "temp": 42.0, "status": "nominal"}

async def test_heartbeat():
    monitor = HeartbeatMonitor("Nexus-Primary")
    monitor.link_source("core_vitals", CoreSource())
    
    # Run for a few cycles
    asyncio.create_task(monitor.start_monitoring(0.5))
    await asyncio.sleep(1.6)
    monitor.stop()

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    asyncio.run(test_heartbeat())
