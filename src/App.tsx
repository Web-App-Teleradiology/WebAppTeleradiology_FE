import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages";
import RadiologistPage from "./pages/radiologistPage";
import ReportsPage from "./pages/reportsPage";
import SettingsPage from "./pages/settingsPage";
import SpecialistPage from "./pages/specialistPage";
import DashboardLayout from "./dashboard/Layout";
import ErrorPage from "./pages/errorPage";
import HomePage from "./pages/homePage";
import SpecialistPatientDetailPage from "./pages/specialistPatientDetailPage";

import { useAuth } from "./middleware/Contexts";
import "react-toastify/ReactToastify.min.css";
import RadiologyPatientDetailPage from "./pages/radiologyPatientDetailPage";

function App() {
  const { authToken } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {authToken === null && <Route path="/" element={<LoginPage />} />}
        {authToken !== null ? (
          <Route element={<DashboardLayout />} errorElement={<ErrorPage />}>
            <Route path="/" element={<HomePage />} />
            <Route path="radiologist" element={<RadiologistPage />} />
            <Route
              path="radiologist/:id"
              element={<RadiologyPatientDetailPage />}
            />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="Settings" element={<SettingsPage />} />
            <Route path="specialist" element={<SpecialistPage />} />
            <Route
              path="specialist/:id"
              element={<SpecialistPatientDetailPage />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        ) : (
          <Route path="/" element={<LoginPage />} />
        )}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
