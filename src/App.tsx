import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./pages";
import RadiologistPage from "./pages/radiologist";
import ReportsPage from "./pages/reports";
import SettingsPage from "./pages/settings";
import SpecialistPage from "./pages/specialist";
import DashboardLayout from "./dashboard/Layout";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import DocsPage from "./pages/documentation";
import { useAuth } from "./middleware/Contexts";

function App() {
  const { authToken } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {authToken === null && <Route path="/" element={<LoginPage />} />}
        <Route path="*" element={<ErrorPage />} />
        {authToken !== null ? (
          <Route element={<DashboardLayout />} errorElement={<ErrorPage />}>
            <Route path="/" element={<HomePage />} />
            <Route path="radiologist" element={<RadiologistPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="Settings" element={<SettingsPage />} />
            <Route path="specialist" element={<SpecialistPage />} />
            <Route path="documentation" element={<DocsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        ) : (
          <Route path="/" element={<LoginPage />} />
        )}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
