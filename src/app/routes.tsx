import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Connect from "@/pages/connect";
import Dashboard from "@/pages/dashboard";
import ProtectedRoute from "@/shared/lib/protected-route";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Connect />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default AppRoutes;
