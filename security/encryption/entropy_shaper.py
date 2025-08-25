import os
import random
import string
from abc import ABC, abstractmethod
from typing import List, Dict, Any, Optional

class EntropyInterface(ABC):
    @abstractmethod
    def harvest_chaos(self, bits: int) -> bytes:
        pass

class EntropyShaper(EntropyInterface):
    def __init__(self):
        self.chaos_pool: List[bytes] = []
        self.seed_essence = "aether_prime"
        self.shaping_count = 0

    def harvest_chaos(self, bits: int) -> bytes:
        chaos = os.urandom(bits // 8)
        self.chaos_pool.append(chaos)
        return chaos

    def shape_sigil(self, length: int = 16) -> str:
        chars = string.ascii_letters + string.digits + "!@#$%^&*"
        self.shaping_count += 1
        return "".join(random.choice(chars) for _ in range(length))

    def forge_ethereal_id(self, prefix: str = "AETH") -> str:
        suffix = self.harvest_chaos(32).hex()[:8]
        return f"{prefix}-{suffix.upper()}"

    def shuffle_grimoire(self, grimoire: List[Any]) -> List[Any]:
        shuffled = list(grimoire)
        random.shuffle(shuffled)
        return shuffled

    def extract_essence_from_pool(self) -> bytes:
        if not self.chaos_pool:
            return self.harvest_chaos(128)
        return self.chaos_pool.pop(0)

    def distil_chaos_to_int(self, min_val: int, max_val: int) -> int:
        return random.randint(min_val, max_val)

    def get_pool_depth(self) -> int:
        return len(self.chaos_pool)

    def clear_pool(self):
        self.chaos_pool.clear()

    def inject_external_chaos(self, source: bytes):
        self.chaos_pool.append(source)

    def calculate_chaos_entropy(self) -> float:
        import math
        if not self.chaos_pool:
            return 0.0
        return math.log2(len(self.chaos_pool) + 1)

    def set_seed_essence(self, essence: str):
        self.seed_essence = essence
        random.seed(essence)

    def get_shaping_statistics(self) -> Dict[str, Any]:
        return {
            "total_shaped": self.shaping_count,
            "pool_depth": self.get_pool_depth(),
            "seed": self.seed_essence[:4] + "***"
        }

    def reset_shaping_engine(self):
        self.clear_pool()
        self.shaping_count = 0
        self.seed_essence = "aether_prime"

    def distil_chaos_to_float(self) -> float:
        return random.random()

    def forge_complex_essence(self, components: List[str]) -> str:
        base = self.shape_sigil(8)
        return f"{base}-" + "-".join(components)
