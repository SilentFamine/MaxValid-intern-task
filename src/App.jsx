import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./Layouts/AdminLayout";

import Dashboard from "./pages/admin/Dashboard";
import BlogManagement from "./pages/admin/BlogManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="blogs" element={<BlogManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;