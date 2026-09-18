

const MobileNav = ({handleClick}) => {
  
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-4 py-2">
      

      <div className="flex items-center justify-around">

        <button onClick={handleClick} className="flex flex-col items-center gap-1 text-blue-600">
          <DashboardIcon />
          <span className="text-[10px]">Home</span>
        </button>

        <button onClick={handleClick} className="flex flex-col items-center gap-1 text-gray-400">
          <ApplicationsIcon />
          <span className="text-[10px]">Jobs</span>
        </button>

        <button onClick={handleClick} className="w-11 h-11 -mt-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
          <span className="text-2xl">+</span>
        </button>

        <button onClick={handleClick} className="flex flex-col items-center gap-1 text-gray-400">
          <InterviewIcon />
          <span className="text-[10px]">Interviews</span>
        </button>

        <button onClick={handleClick} className="flex flex-col items-center gap-1 text-gray-400">
          <SettingsIcon />
          <span className="text-[10px]">Settings</span>
        </button>

      </div>

    </nav>
  );
};

const DashboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const ApplicationsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 3h9l3 3v15H6z" />
    <path d="M14 3v4h4M9 12h6M9 16h6" />
  </svg>
);

const InterviewIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M8 2v4M16 2v4M3 9h18" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="3" />
    <path d="M19 12a7 7 0 0 0-14 0 7 7 0 0 0 14 0Z" />
  </svg>
);

export default MobileNav;