import { useState } from 'react';

export function useClipboard() {
  const [error, setError] = useState<Error | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyResult = (value: boolean) => {
    setCopied(value);
  };

  const copy = (valueToCopy: any) => {
    if ('clipboard' in navigator) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => handleCopyResult(true))
        .catch((err) => setError(err));
    } else {
      setError(new Error('useClipboard: navigator.clipboard is not supported'));
    }
  };

  const reset = () => {
    setCopied(false);
    setError(null);
  };

  return { copy, reset, error, copied };
}
