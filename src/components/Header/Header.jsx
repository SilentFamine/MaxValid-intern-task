import HeaderActions from "./HeaderActions";

function Header() {
  return (
    <header className="flex justify-end items-center bg-white border-b p-6">
      <HeaderActions>
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </HeaderActions>
    </header>
  );
}

export default Header;