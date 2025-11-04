import { useState } from 'react';

/**
 * Custom hook for copying text to clipboard with success feedback
 */
export function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // Use modern clipboard API
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers or non-HTTPS contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand('copy');
          textArea.remove();
        } catch (err) {
          console.error('Fallback copy failed:', err);
          textArea.remove();
          throw err;
        }
      }

      // Show success feedback
      setIsCopied(true);

      // Reset after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return true;
    } catch (err) {
      console.error('Failed to copy text:', err);
      setIsCopied(false);
      return false;
    }
  };

  return { isCopied, copyToClipboard };
}
