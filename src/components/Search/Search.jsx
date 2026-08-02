import { FaSearch } from "react-icons/fa";

function Search({
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="relative">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-64 border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Search;