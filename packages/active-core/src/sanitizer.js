import { loadXSSModel, isMaliciousInput } from './ml-model';

export async function sanitizeInput(input) {
  const model = await loadXSSModel();
  const isMalicious = await isMaliciousInput(model, input);
  if (isMalicious) {
    console.warn('Blocked malicious input:', input);
    return null;
  }
  return input;
}