import asyncio
import heapq
import time
from abc import ABC, abstractmethod
from typing import Dict, List, Any, Optional, Tuple

class SchedulerInterface(ABC):
    @abstractmethod
    def schedule_ritual(self, ritual_id: str, delay: float, task: Any):
        pass

class RitualScheduler(SchedulerInterface):
    def __init__(self):
        self.ritual_queue: List[Tuple[float, str, Any]] = []
        self.is_running = False
        self.completed_rituals: List[str] = []
        self.scheduled_count = 0

    def schedule_ritual(self, ritual_id: str, delay: float, task: Any):
        execution_time = time.time() + delay
        heapq.heappush(self.ritual_queue, (execution_time, ritual_id, task))
        self.scheduled_count += 1

    async def start_scheduling_loop(self):
        self.is_running = True
        while self.is_running:
            if not self.ritual_queue:
                await asyncio.sleep(1)
                continue
            
            now = time.time()
            next_exec, r_id, task = self.ritual_queue[0]
            
            if now >= next_exec:
                heapq.heappop(self.ritual_queue)
                await self._invoke_scheduled_task(r_id, task)
            else:
                wait_time = min(1.0, next_exec - now)
                await asyncio.sleep(wait_time)

    async def _invoke_scheduled_task(self, r_id: str, task: Any):
        try:
            if asyncio.iscoroutinefunction(task):
                await task()
            else:
                task()
            self.completed_rituals.append(r_id)
        except Exception as e:
            print(f"Scheduled task {r_id} fractured: {e}")

    def stop_scheduler(self):
        self.is_running = False

    def get_pending_count(self) -> int:
        return len(self.ritual_queue)

    def list_pending_rituals(self) -> List[str]:
        return [r[1] for r in self.ritual_queue]

    def cancel_ritual(self, ritual_id: str) -> bool:
        original_len = len(self.ritual_queue)
        self.ritual_queue = [r for r in self.ritual_queue if r[1] != ritual_id]
        heapq.heapify(self.ritual_queue)
        return len(self.ritual_queue) < original_len

    def clear_all_scheduled(self):
        self.ritual_queue.clear()

    def get_scheduler_health(self) -> str:
        return "active" if self.is_running else "suspended"

    def get_total_scheduled(self) -> int:
        return self.scheduled_count

    def get_completed_rituals(self) -> List[str]:
        return self.completed_rituals

    def reset_scheduler_stats(self):
        self.scheduled_count = 0
        self.completed_rituals.clear()

    def update_ritual_timing(self, r_id: str, new_delay: float):
        task = None
        for r in self.ritual_queue:
            if r[1] == r_id:
                task = r[2]
                break
        if task and self.cancel_ritual(r_id):
            self.schedule_ritual(r_id, new_delay, task)
