import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./Layouts/AdminLayout";
import PublicLayout from "./Layouts/PublicLayout";

import Home from "./pages/public/Home";
import NewsDetails from "./pages/public/NewsDetails";

import Dashboard from "./pages/admin/Dashboard";
import BlogManagement from "./pages/admin/BlogManagement";
import CreateContent from "./pages/admin/CreateContent";
import EditContent from "./pages/admin/EditContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Website */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Route>

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="blogs" element={<BlogManagement />} />
          <Route path="create-content" element={<CreateContent />} />
          <Route path="edit-content/:id" element={<EditContent />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;