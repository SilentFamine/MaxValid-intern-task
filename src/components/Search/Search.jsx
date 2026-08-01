import { FaSearch } from "react-icons/fa";

function Search({ placeholder })  {
  return (
    <div className="relative">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-64 outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default Search;