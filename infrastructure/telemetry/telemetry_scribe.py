import json
import logging
import time
from abc import ABC, abstractmethod
from typing import Dict, Any, List, Optional
from pathlib import Path

class ScribeInterface(ABC):
    @abstractmethod
    def record_echo(self, level: str, message: str):
        pass

class TelemetryScribe(ScribeInterface):
    def __init__(self, journal_path: str):
        self.journal_path = Path(journal_path)
        self.memory_buffer: List[Dict[str, Any]] = []
        self.scribed_count = 0
        self._init_journal()

    def _init_journal(self):
        logging.basicConfig(
            filename=self.journal_path,
            level=logging.INFO,
            format='%(asctime)s | %(levelname)s | %(message)s'
        )

    def record_echo(self, level: str, message: str):
        entry = {
            "timestamp": time.time(),
            "level": level,
            "essence": message,
            "id": self.scribed_count
        }
        self.memory_buffer.append(entry)
        self.scribed_count += 1
        getattr(logging, level.lower())(message)

    def commit_buffer_to_stone(self):
        archive_path = self.journal_path.with_suffix(".archive.json")
        with open(archive_path, "a") as f:
            for entry in self.memory_buffer:
                f.write(json.dumps(entry) + "\n")
        self.memory_buffer.clear()

    def retrieve_last_echoes(self, count: int = 10) -> List[Dict[str, Any]]:
        return self.memory_buffer[-count:]

    def summarize_activity(self) -> Dict[str, int]:
        summary = {"INFO": 0, "WARNING": 0, "ERROR": 0}
        for entry in self.memory_buffer:
            lvl = entry["level"]
            if lvl in summary:
                summary[lvl] += 1
        return summary

    def clear_volatile_memory(self):
        self.memory_buffer.clear()

    def get_journal_size(self) -> int:
        return self.journal_path.stat().st_size if self.journal_path.exists() else 0

    def scribe_ritual_success(self, ritual_id: str):
        self.record_echo("INFO", f"Ritual {ritual_id} manifested successfully")

    def scribe_ritual_failure(self, ritual_id: str, reason: str):
        self.record_echo("ERROR", f"Ritual {ritual_id} fractured: {reason}")

    def get_total_scribed(self) -> int:
        return self.scribed_count

    def rotate_journal(self):
        new_path = self.journal_path.with_suffix(f".{int(time.time())}.log")
        self.journal_path.rename(new_path)
        self._init_journal()

    def validate_journal_integrity(self) -> bool:
        return self.journal_path.exists() and self.journal_path.is_file()

    def export_scribed_buffer(self) -> str:
        return json.dumps(self.memory_buffer, indent=2)
