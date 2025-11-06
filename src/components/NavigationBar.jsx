import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CurioLogo from '@/components/CurioLogo';
import UserProfile from '@/components/UserProfile';

export default function NavigationBar({
  page = 'landing',
  demoTitle,
  onBack,
  showBackButton = false
}) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-white/20"
      style={{ backgroundColor: 'oklch(0.6 0.118 184.704)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Logo + Branding */}
          <div className="flex items-center gap-3">
            <CurioLogo onClick={handleLogoClick} />
            <div className="hidden sm:flex items-center gap-2 text-white" style={{ height: '32px', marginTop: '14px' }}>
              <span className="text-xl tracking-[0.15em] leading-none uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                Prism
              </span>
              <span className="text-xl tracking-tight leading-none uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}>
                Platform
              </span>
              {demoTitle && (
                <>
                  <span className="opacity-70 leading-none ml-1">·</span>
                  <span className="text-sm opacity-90 leading-none font-sans">{demoTitle}</span>
                </>
              )}
            </div>
            {/* Back button - mobile only */}
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="md:hidden text-white hover:bg-white/10"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Center section: Empty (patient info in page content) */}
          <div className="flex-1" />

          {/* Right section: User Profile */}
          <div className="flex items-center gap-3">
            <UserProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}
