import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CalendarPage from "./pages/calendar";
import LoginPage from "./pages";
import ProjectsPage from "./pages/projects";
import ReportsPage from "./pages/reports";
import SettingsPage from "./pages/settings";
import Testing from "./pages/testing";
import TasksPage from "./pages/tasks";
import DashboardLayout from "./dashboard/Layout";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import DocsPage from "./pages/documentation";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="admin" element={<DashboardLayout />}>
          <Route path="*" element={<ErrorPage />} />
          <Route index element={<HomePage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="Settings" element={<SettingsPage />} />
          <Route path="testing" element={<Testing />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="documentation" element={<DocsPage />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
