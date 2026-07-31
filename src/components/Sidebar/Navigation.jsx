import MenuItem from "./MenuItem";

function Navigation({
  menuItems,
  activeMenu,
  setActiveMenu,
}) {
  return (
    <nav className="space-y-3">
      {menuItems.map((item) => (
        <MenuItem
          key={item.title}
          title={item.title}
          icon={item.icon}
          active={activeMenu === item.title}
          onClick={() => setActiveMenu(item.title)}
        />
      ))}
    </nav>
  );
}

export default Navigation;