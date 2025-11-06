import curioLogo from '@/assets/curio-logo-light.png';

export default function CurioLogo({ onClick, size = 'default' }) {
  const heights = {
    small: 'h-6',
    default: 'h-8',
    large: 'h-10'
  };

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary rounded"
      aria-label="Return to home"
    >
      <img
        src={curioLogo}
        alt="Curio logo"
        className={`${heights[size]} w-auto`}
      />
    </button>
  );
}
