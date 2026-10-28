
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "./Footer";

export default function PageLayout() {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
