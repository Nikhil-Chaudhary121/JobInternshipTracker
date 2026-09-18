const Sidebar = ({handleClick}) => {
  return (
    <aside className="hidden lg:flex w-60 shrink-0 border-r border-gray-200 bg-white min-h-screen flex-col">

      {/* Logo */}
      <div className="h-16 px-5 flex items-center border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div onClick={handleClick} className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              J
            </span>
          </div>

          <span className="font-semibold text-gray-900">
            JobTrack
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1">

        <p onClick={handleClick} className="px-3 pt-3 pb-2 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
          Workspace
        </p>

        <button onClick={handleClick} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium">
          <DashboardIcon />
          Dashboard
        </button>

        <button onClick={handleClick} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 text-sm transition">
          <ApplicationsIcon />
          Applications
        </button>

        <button onClick={handleClick} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 text-sm transition">
          <InterviewIcon />
          Interviews
        </button>

        <button onClick={handleClick} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 text-sm transition">
          <CompanyIcon />
          Companies
        </button>

        <p onClick={handleClick} className="px-3 pt-7 pb-2 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
          Other
        </p>

        <button onClick={handleClick} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 text-sm transition">
          <SettingsIcon />
          Settings
        </button>

      </nav>

      {/* Bottom */}
      <div className="mt-auto p-4 border-t border-gray-100">
        <div className="flex items-center gap-3">

          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium">
            N
          </div>

          <div className="min-w-0">
            <p onClick={handleClick} className="text-sm font-medium truncate">
              Your Account
            </p>

            <p onClick={handleClick} className="text-xs text-gray-400 truncate">
              Job seeker
            </p>
          </div>

        </div>
      </div>

    </aside>
  );
};


/* Icons */

const DashboardIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const ApplicationsIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M6 3h9l3 3v15H6z" />
    <path d="M14 3v4h4" />
    <path d="M9 12h6M9 16h6" />
  </svg>
);

const InterviewIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M8 2v4M16 2v4M3 9h18" />
  </svg>
);

const CompanyIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
    <path d="M2 21h20M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 1.7-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.4v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1L8 17l.1-.1A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.5-1H6.7v-2.4h.2a1.7 1.7 0 0 0 1.5-1A1.7 1.7 0 0 0 8.1 8.7L8 8.6l1.7-1.7.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h2.4v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2v2.4h-.2a1.7 1.7 0 0 0-1.5 1Z" />
  </svg>
);

export default Sidebar;