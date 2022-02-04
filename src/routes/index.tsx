import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const MainRoutes = () => (
  <Routes>
    <Route index element={<Dashboard />} />
  </Routes>
);

export default MainRoutes;
