import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          News Portal
        </Link>

        <Link
          to="/admin"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;