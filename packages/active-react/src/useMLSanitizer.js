// active-react/src/useMLSanitizer.js
import { useEffect, useState } from 'react';
import { loadXSSModel, isMaliciousInput } from 'active-core';

export function useMLSanitizer() {
  const [model, setModel] = useState(null);

  useEffect(() => {
    loadXSSModel().then(setModel);
  }, []);

  const sanitize = async (input) => {
    if (!model) return input;
    const isMalicious = await isMaliciousInput(model, input);
    return isMalicious ? null : input;
  };

  return { sanitize };
}