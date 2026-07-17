import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import AppLayout from "../layout/AppLayout";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },

       {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;