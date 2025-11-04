import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

export default function CopyButton({ text, label = 'Copy to Clipboard', className = '' }) {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(text);
  };

  return (
    <Button
      variant="outline"
      onClick={handleCopy}
      className={`flex items-center gap-2 ${className}`}
      disabled={isCopied}
    >
      {isCopied ? (
        <>
          <Check className="w-4 h-4 text-green-500" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          <span>{label}</span>
        </>
      )}
    </Button>
  );
}
