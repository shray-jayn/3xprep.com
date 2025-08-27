// src/lib/api.ts
export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  city: string;
  test: "SAT" | "LSAT" | "MCAT";
  preferredTime?: string;
  notes?: string;
  company?: string; // honeypot (empty string)
  mode?: "consultation" | "diagnostic";
};

const API_BASE =
  (import.meta.env.VITE_API_BASE as string | undefined)?.replace(/\/+$/, "") ||
  "";

// Optional: small timeout helper to avoid hanging requests
function withTimeout<T>(p: Promise<T>, ms = 15000) {
  return Promise.race([
    p,
    new Promise<never>((_, rej) =>
      setTimeout(() => rej(new Error("Request timed out")), ms)
    ),
  ]);
}

export async function postLead(payload: LeadPayload) {
  const res = await withTimeout(
    fetch(`${API_BASE}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
  );

  // Try to parse JSON even on non-2xx
  const data = await res
    .json()
    .catch(() => ({ ok: res.ok, error: `HTTP ${res.status}` }));

  if (!res.ok || data?.ok === false) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : JSON.stringify(data?.error ?? `HTTP ${res.status}`)
    );
  }
  return data;
}
