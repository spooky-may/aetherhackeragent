import logging
import uuid
from abc import ABC, abstractmethod
from typing import Dict, Any, List, Optional
from collections import deque

class IAnomalyPattern(ABC):
    @abstractmethod
    def fits(self, data: Dict[str, Any]) -> bool:
        pass

class AnomalyDetector:
    def __init__(self, sensitivity: float = 0.5):
        self.sensitivity = sensitivity
        self.patterns: List[IAnomalyPattern] = []
        self.buffer = deque(maxlen=100)
        self.logger = logging.getLogger("Telemetry.Anomaly")

    def teach_pattern(self, pattern: IAnomalyPattern) -> None:
        self.patterns.append(pattern)
        self.logger.info("New anomaly pattern taught to the detector.")

    def ingest_reading(self, reading: Dict[str, Any]) -> bool:
        self.buffer.append(reading)
        is_anomalous = False
        
        for pattern in self.patterns:
            if pattern.fits(reading):
                self._manifest_alert(reading, pattern)
                is_anomalous = True
                
        return is_anomalous

    def _manifest_alert(self, reading: Dict[str, Any], pattern: IAnomalyPattern):
        alert_id = uuid.uuid4().hex[:8]
        msg = f"ANOMALY {alert_id}: Pattern {pattern.__class__.__name__} detected!"
        self.logger.critical(msg)
        self.logger.debug(f"Anomalous data: {reading}")

    def adjust_sensitivity(self, level: float):
        self.sensitivity = max(0.0, min(1.0, level))
        self.logger.info(f"Sensitivity adjusted to {self.sensitivity}")

class SpikePattern(IAnomalyPattern):
    def __init__(self, threshold: float):
        self.threshold = threshold
    def fits(self, data: Dict[str, Any]) -> bool:
        val = data.get("value", 0)
        return val > self.threshold

def test_anomaly():
    detector = AnomalyDetector(sensitivity=0.8)
    detector.teach_pattern(SpikePattern(100.0))
    
    detector.ingest_reading({"value": 45.0})
    detector.ingest_reading({"value": 150.0}) # Should alert

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    test_anomaly()
