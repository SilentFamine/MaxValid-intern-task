import { FaBell, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between shadow-sm">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your blogs and news easily.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button className="relative w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
          <FaBell className="text-xl text-gray-700" />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-5xl text-gray-500" />

          <div>
            <h3 className="font-semibold text-gray-900">
              Super Admin
            </h3>

            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;