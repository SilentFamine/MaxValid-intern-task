import Search from "../Search/Search";

function Header() {
  return (
    <header className="flex justify-between items-center bg-white border-b p-6">
      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold">
          Blog & News Management
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Search />

        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
          Add New
        </button>

        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
    </header>
  );
}

export default Header;