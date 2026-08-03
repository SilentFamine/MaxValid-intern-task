import {
  FaTachometerAlt,
  FaUsers,
  FaNewspaper,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

import { useLocation } from "react-router-dom";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Profile from "./Profile";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    title: "User Management",
    icon: <FaUsers />,
  },
  {
    title: "Blog & News Management",
    icon: <FaNewspaper />,
  },
  {
    title: "Setting Management",
    icon: <FaCog />,
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[280px] h-screen bg-white border-r shadow-sm flex flex-col justify-between px-6 py-8">
      <div>
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <div className="mt-10">
          <Navigation
            menuItems={menuItems}
            pathname={location.pathname}
          />
        </div>
      </div>

      {/* Profile */}
      <Profile
        name="Super Admin"
        email="superadmin@gmail.com"
        avatar={
          <FaUserCircle className="text-5xl text-gray-400" />
        }
      />
    </aside>
  );
}

export default Sidebar;