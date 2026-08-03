import { useNavigate } from "react-router-dom";

function MenuItem({
  title,
  icon,
  pathname,
}) {
  const navigate = useNavigate();

  let path = "";
  let active = false;

  switch (title) {
    case "Dashboard":
      path = "/admin";
      active = pathname === "/admin";
      break;

    case "User Management":
      path = "/admin/users";
      active = pathname.startsWith("/admin/users");
      break;

    case "Blog & News Management":
      path = "/admin/blogs";
      active =
        pathname.startsWith("/admin/blogs") ||
        pathname.startsWith("/admin/create-content") ||
        pathname.startsWith("/admin/edit-content");
      break;

    case "Setting Management":
      path = "/admin/settings";
      active = pathname.startsWith("/admin/settings");
      break;

    default:
      break;
  }

  return (
    <div
      onClick={() => navigate(path)}
      className={`flex items-center gap-4 px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 ${
        active
          ? "bg-blue-600 text-white shadow-lg"
          : "text-gray-700 hover:bg-blue-50"
      }`}
    >
      <span className="text-xl">
        {icon}
      </span>

      <span className="font-medium">
        {title}
      </span>
    </div>
  );
}

export default MenuItem;