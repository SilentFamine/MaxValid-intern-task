function Button({
  text,
  onClick,
  type = "button",
  className = "",
}) {

  const handleClick = () => {
    console.log(`${text} clicked`);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;