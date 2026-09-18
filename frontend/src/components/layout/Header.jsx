import { IoLogOutOutline } from "react-icons/io5";

const Header = ({ onAddJob , onLogout  , handleClick}) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6">

      {/* Left */}
      <div className="flex items-center gap-3">

        <button className="lg:hidden w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center">
          <MenuIcon />
        </button>

        <h1 className="text-lg font-semibold text-gray-900">
          Dashboard
        </h1>

      </div>

      {/* Search */}
      <div className="hidden md:flex relative w-64 lg:w-80">

        <SearchIcon />

        <input
          placeholder="Search for anything here..."
          className="w-full h-9 pl-9 pr-3 rounded-full bg-gray-50 border border-gray-100 text-xs outline-none focus:border-gray-300"
        />

      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        <button
          onClick={onAddJob}
          className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition"
        >
          <span className="text-xl leading-none">
            +
          </span>
        </button>

        <button onClick={onLogout} className="hidden sm:flex w-9 h-9 rounded-full hover:bg-gray-100 items-center justify-center">
          <IoLogOutOutline />
        </button>

        <button onClick={handleClick} className="hidden sm:flex w-9 h-9 rounded-full hover:bg-gray-100 items-center justify-center">
          <SettingsIcon />
        </button>

        <div onClick={handleClick} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium">
          ?
        </div>

      </div>

    </header>
  );
};

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const SearchIcon = () => (
  <svg
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3-3" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="3" />
    <path d="M19 12a7 7 0 0 0-.2-1.7l2-1.5-2-3.4-2.3 1a8 8 0 0 0-2.8-1.7L13.5 2h-3l-.3 2.7a8 8 0 0 0-2.8 1.7l-2.3-1-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .6.1 1.2.2 1.7l-2 1.5 2 3.4 2.3-1a8 8 0 0 0 2.8 1.7l.3 2.7h3l.3-2.7a8 8 0 0 0 2.8-1.7l2.3 1 2-3.4-2-1.5c.1-.5.2-1.1.2-1.7Z" />
  </svg>
);

export default Header;