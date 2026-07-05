function SearchBar( { value, onChange }) {
    return (
      <div className="w-full flex justify-center mt-6 px-4">
        <div className="w-full md:w-[60%] relative">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search for movies..."
            placeholder="Search for movies..."
            className="w-full p-4 pl-12 rounded-xl bg-zinc-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>
    );
}

export default SearchBar;