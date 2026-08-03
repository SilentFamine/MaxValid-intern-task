import MenuItem from "./MenuItem";

function Navigation({ menuItems, pathname }) {
  return (
    <nav className="space-y-4">
      {menuItems.map((item) => (
        <MenuItem
          key={item.title}
          title={item.title}
          icon={item.icon}
          pathname={pathname}
        />
      ))}
    </nav>
  );
}

export default Navigation;