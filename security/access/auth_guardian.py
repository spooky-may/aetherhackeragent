import json
import time
from abc import ABC, abstractmethod
from typing import Dict, List, Optional, Any

class GuardianInterface(ABC):
    @abstractmethod
    def verify_sigil(self, token: str) -> bool:
        pass

class AuthGuardian(GuardianInterface):
    def __init__(self, secret_essence: str):
        self.secret_essence = secret_essence
        self.active_sessions: Dict[str, float] = {}
        self.gate_open = True
        self.denied_attempts: List[Dict[str, Any]] = []

    def verify_sigil(self, token: str) -> bool:
        if not self.gate_open:
            return False
        if token in self.active_sessions:
            expiry = self.active_sessions[token]
            if time.time() < expiry:
                return True
            del self.active_sessions[token]
        self._record_denial(token, "expired_or_invalid")
        return False

    def _record_denial(self, token: str, reason: str):
        self.denied_attempts.append({
            "token": token[:8],
            "reason": reason,
            "ts": time.time()
        })

    def issue_sigil(self, identity: str, duration: int = 3600) -> str:
        import hashlib
        entropy = str(time.time()) + identity + self.secret_essence
        sigil = hashlib.sha256(entropy.encode()).hexdigest()
        self.active_sessions[sigil] = time.time() + duration
        return sigil

    def revoke_sigil(self, token: str):
        if token in self.active_sessions:
            del self.active_sessions[token]

    def challenge_entity(self, provided_essence: str) -> bool:
        import hmac
        res = hmac.compare_digest(provided_essence, self.secret_essence)
        if not res:
            self._record_denial("essence_challenge", "wrong_secret")
        return res

    def close_gates(self):
        self.gate_open = False
        self.active_sessions.clear()

    def open_gates(self):
        self.gate_open = True

    def audit_sessions(self) -> List[str]:
        current = time.time()
        expired = [k for k, v in self.active_sessions.items() if v < current]
        for k in expired:
            del self.active_sessions[k]
        return list(self.active_sessions.keys())

    def get_remaining_potency(self, token: str) -> float:
        if token in self.active_sessions:
            return max(0.0, self.active_sessions[token] - time.time())
        return 0.0

    def get_denial_count(self) -> int:
        return len(self.denied_attempts)

    def purge_denials(self):
        self.denied_attempts.clear()

    def list_recent_denials(self, limit: int = 5) -> List[Dict[str, Any]]:
        return self.denied_attempts[-limit:]

    def check_gate_status(self) -> str:
        return "open" if self.gate_open else "closed"

    def update_secret_essence(self, new_essence: str):
        self.secret_essence = new_essence
        self.active_sessions.clear()
