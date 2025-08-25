import base64
import hashlib
import hmac
from abc import ABC, abstractmethod
from typing import Dict, Any, Tuple, List
from pathlib import Path

class CryptInterface(ABC):
    @abstractmethod
    def weave_seal(self, data: str, key: str) -> str:
        pass

    @abstractmethod
    def break_seal(self, seal: str, key: str) -> str:
        pass

class CryptRitual(CryptInterface):
    def __init__(self, algorithm: str = "sha256"):
        self.algorithm = algorithm
        self.salt_entropy = "aether_salt_v1"
        self.sealed_registry: List[str] = []

    def weave_seal(self, data: str, key: str) -> str:
        salted_key = (key + self.salt_entropy).encode()
        signature = hmac.new(
            salted_key, data.encode(), getattr(hashlib, self.algorithm)
        ).digest()
        combined = data.encode() + b"||" + signature
        encoded = base64.b64encode(combined).decode()
        self.sealed_registry.append(self.generate_essence_hash(encoded))
        return encoded

    def break_seal(self, seal: str, key: str) -> str:
        decoded = base64.b64decode(seal.encode())
        try:
            data, signature = decoded.rsplit(b"||", 1)
            salted_key = (key + self.salt_entropy).encode()
            expected = hmac.new(
                salted_key, data, getattr(hashlib, self.algorithm)
            ).digest()
            if hmac.compare_digest(signature, expected):
                return data.decode()
            return "Corrupted Seal"
        except ValueError:
            return "Invalid Seal Format"

    def generate_essence_hash(self, content: str) -> str:
        hasher = getattr(hashlib, self.algorithm)()
        hasher.update(content.encode())
        return hasher.hexdigest()

    def obfuscate_rune(self, rune: str) -> str:
        return base64.b85encode(rune.encode()).decode()

    def clarify_rune(self, obscure: str) -> str:
        return base64.b85decode(obscure.encode()).decode()

    def validate_integrity(self, original: str, received_hash: str) -> bool:
        current_hash = self.generate_essence_hash(original)
        return hmac.compare_digest(current_hash, received_hash)

    def forge_entropy(self, length: int = 32) -> str:
        import os
        return base64.urlsafe_b64encode(os.urandom(length)).decode()

    def rotate_salt(self, new_salt: str):
        self.salt_entropy = new_salt

    def get_sealed_count(self) -> int:
        return len(self.sealed_registry)

    def verify_seal_presence(self, seal_hash: str) -> bool:
        return seal_hash in self.sealed_registry

    def purge_registry(self):
        self.sealed_registry.clear()

    def update_algorithm(self, new_algo: str):
        if hasattr(hashlib, new_algo):
            self.algorithm = new_algo

    def export_crypt_state(self) -> Dict[str, Any]:
        return {
            "algo": self.algorithm,
            "registry_size": len(self.sealed_registry),
            "salt_v": "v1" if "v1" in self.salt_entropy else "custom"
        }
