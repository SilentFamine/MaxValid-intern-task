import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Profile from "./Profile";
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
  const [activeMenu, setActiveMenu] = useState(
    "Blog & News Management"
  );

  console.log(activeMenu);
  
  return (
    <aside className="w-[280px] h-screen bg-white border-r flex flex-col justify-between p-6">
      {/* Logo */}
      <div>
       <Logo/>

        {/* Navigation */}
       <Navigation
        menuItems={menuItems}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
       />

       {/* Profile */}
       <Profile
       name="Super Admin"
       email="superadmin@gmail.com"
       avatar={<FaUserCircle />}
       />
      </div>
    </aside>
  );
}

export default Sidebar;