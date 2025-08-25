import asyncio
import logging
import uuid
from abc import ABC, abstractmethod
from typing import Dict, List, Any, Type
from enum import Enum, auto

class ThreadStatus(Enum):
    LATENT = auto()
    VIBRANT = auto()
    FADING = auto()
    EXTINCT = auto()

class ILifeThread(ABC):
    @abstractmethod
    async def weave(self) -> None:
        pass
    @abstractmethod
    async def unravel(self) -> None:
        pass

class LifecycleWeaver:
    def __init__(self):
        self.threads: Dict[str, ILifeThread] = {}
        self.statuses: Dict[str, ThreadStatus] = {}
        self.logger = logging.getLogger("Aether.Weaver")

    def spin_thread(self, thread_id: str, thread_cls: Type[ILifeThread], *args, **kwargs) -> None:
        self.threads[thread_id] = thread_cls(*args, **kwargs)
        self.statuses[thread_id] = ThreadStatus.LATENT
        self.logger.info(f"Thread {thread_id} spun in the loom.")

    async def activate_all(self) -> None:
        for tid, thread in self.threads.items():
            if self.statuses[tid] == ThreadStatus.LATENT:
                self.logger.info(f"Activating thread: {tid}")
                await thread.weave()
                self.statuses[tid] = ThreadStatus.VIBRANT

    async def terminate_all(self) -> None:
        for tid in list(self.threads.keys()):
            await self.quench_thread(tid)

    async def quench_thread(self, thread_id: str) -> None:
        if thread_id in self.threads:
            self.statuses[thread_id] = ThreadStatus.FADING
            await self.threads[thread_id].unravel()
            self.statuses[thread_id] = ThreadStatus.EXTINCT
            del self.threads[thread_id]
            self.logger.warning(f"Thread {thread_id} has been quenched.")

class PulseThread(ILifeThread):
    async def weave(self) -> None:
        print("Thread beginning its vibrant pulse...")
    async def unravel(self) -> None:
        print("Thread pulse returning to the void.")

async def perform_weaving():
    weaver = LifecycleWeaver()
    weaver.spin_thread("pulse_alpha", PulseThread)
    await weaver.activate_all()
    await asyncio.sleep(0.5)
    await weaver.terminate_all()

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    asyncio.run(perform_weaving())
