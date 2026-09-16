const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full md:w-72">

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

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search applications..."
        className="w-full h-9 pl-9 pr-3 rounded-lg border border-gray-200 bg-white text-xs outline-none focus:border-gray-400"
      />

    </div>
  );
};

export default SearchBar;