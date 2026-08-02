import { Outlet } from "react-router-dom";
import Navbar from "../components/Public/Navbar";
import Footer from "../components/Public/Footer";

function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default PublicLayout;