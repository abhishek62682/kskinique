import { Outlet } from "react-router-dom";
import Footer from "../components/home/Footer";
import Navbar from "../components/Navbar";

import Lenis from "lenis";
import FloatingActionButtons from "../components/common/FloatingActionButtons";

const AppLayout = () => {
  new Lenis({
    autoRaf: true,
  });
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

      <FloatingActionButtons />
    </>
  );
};

export default AppLayout;
