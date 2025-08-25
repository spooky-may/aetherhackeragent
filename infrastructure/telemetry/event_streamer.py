import asyncio
import logging
import json
import uuid
from typing import Dict, Any, List, Optional
from abc import ABC, abstractmethod

class IEventConsumer(ABC):
    @abstractmethod
    async def consume(self, event: Dict[str, Any]) -> None:
        pass

class EventStreamer:
    def __init__(self, stream_name: str):
        self.stream_name = stream_name
        self.consumers: List[IEventConsumer] = []
        self.queue = asyncio.Queue(maxsize=500)
        self.logger = logging.getLogger(f"Telemetry.Streamer.{stream_name}")
        self._streaming = False

    def subscribe(self, consumer: IEventConsumer) -> None:
        self.consumers.append(consumer)
        self.logger.info(f"Consumer {consumer.__class__.__name__} subscribed to {self.stream_name}")

    async def emit(self, event_type: str, data: Dict[str, Any]) -> None:
        event = {
            "id": str(uuid.uuid4()),
            "type": event_type,
            "data": data,
            "stream": self.stream_name
        }
        await self.queue.put(event)
        self.logger.debug(f"Event {event['id']} emitted into stream.")

    async def commence_streaming(self):
        self._streaming = True
        self.logger.info(f"Stream '{self.stream_name}' has commenced flowing.")
        while self._streaming:
            event = await self.queue.get()
            tasks = [c.consume(event) for c in self.consumers]
            if tasks:
                await asyncio.gather(*tasks)
            self.queue.task_done()

    def halt(self):
        self._streaming = False
        self.logger.warning(f"Stream '{self.stream_name}' has been dammed.")

class LogConsumer(IEventConsumer):
    async def consume(self, event: Dict[str, Any]) -> None:
        print(f"EVENT STREAM: {json.dumps(event)}")

async def run_stream_test():
    streamer = EventStreamer("Aether-Events")
    streamer.subscribe(LogConsumer())
    
    asyncio.create_task(streamer.commence_streaming())
    await streamer.emit("resonation", {"freq": 440})
    await asyncio.sleep(0.1)
    streamer.halt()

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    asyncio.run(run_stream_test())
