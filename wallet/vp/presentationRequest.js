export function parsePresentationRequest(raw) {
  const parsed = typeof raw === "string" ? JSON.parse(raw) : raw;

  const {challenge, domain, request} = parsed;
  if (!challenge || !domain) {
    throw new Error("Invalid presentation request: challenge and domain are required.");
  }

  return {challenge, domain, request};
}
