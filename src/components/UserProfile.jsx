export default function UserProfile() {
  // Fake user data for demo
  const user = {
    name: 'Dr. Shailja Dixit',
    role: 'Clinical Decision Specialist',
    initials: 'SD'
  };

  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      {/* User name - hidden on small screens */}
      <div className="hidden sm:flex flex-col items-end text-white">
        <span className="text-sm font-medium leading-tight">{user.name}</span>
        <span className="text-xs opacity-80 leading-tight">
          {user.role}
        </span>
      </div>

      {/* Avatar */}
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-xs font-semibold group-hover:scale-110 transition-transform border border-white/30">
          {user.initials}
        </div>
        {/* Optional status indicator */}
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-[oklch(0.6_0.118_184.704)]"></div>
      </div>
    </div>
  );
}
