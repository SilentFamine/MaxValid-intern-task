import { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaNewspaper,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt />,
    active: false,
  },
  {
    title: "User Management",
    icon: <FaUsers />,
    active: false,
  },
  {
    title: "Blog & News Management",
    icon: <FaNewspaper />,
    active: true,
  },
  {
    title: "Setting Management",
    icon: <FaCog />,
    active: false,
  },
];

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(
    "Blog & News Management"
  );
  return (
    <aside className="w-[280px] h-screen bg-white border-r flex flex-col justify-between p-6">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-blue-600 mb-10">
          LOGO
        </h1>

        {/* Navigation */}
       <nav className="space-y-3">
  {menuItems.map((item) => (
    <MenuItem
      key={item.title}
      title={item.title}
      icon={item.icon}
      active={item.active}
    />
  ))}
</nav>

      {/* Profile */}
      <div className="flex items-center gap-3 border-t pt-4">
        <FaUserCircle className="text-4xl text-gray-500" />

        <div>
          <h2 className="font-semibold">
            Super Admin
          </h2>

          <p className="text-sm text-gray-500">
            superadmin@gmail.com
          </p>
        </div>
      </div>
    </div>
  </aside>
  );
}

export default Sidebar;