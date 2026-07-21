import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";

import AppLayout from "../layout/AppLayout";
import ContactUs from "../pages/ContactUs";
import TreatmentsPage from "../pages/TreatmentsPage";

import AboutPage from "../pages/AboutPage";

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
        path: "service",
        element:<TreatmentsPage />
      },

       {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;