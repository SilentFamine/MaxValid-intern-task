function MenuItem({ title, icon, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:bg-blue-50"
      }`}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
}

export default MenuItem;