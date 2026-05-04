'use client';

interface DownloadButtonProps {
  filename: string;
  content: string;
}

export default function DownloadButton({ filename, content }: DownloadButtonProps) {
  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/x-sh' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="btn-divine flex items-center gap-2"
    >
      ↓ Download {filename}
    </button>
  );
}
