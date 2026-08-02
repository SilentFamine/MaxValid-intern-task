import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";

import {
  getBlogs,
  deleteBlog,
} from "../../utils/blogStorage";

function BlogManagement() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  // Load all blogs
  const loadBlogs = () => {
    setBlogs(getBlogs());
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  // Search Filter
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  // Delete Blog
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    deleteBlog(id);
    loadBlogs();
  };

  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Blog & News Management
        </h1>

        <div className="flex items-center gap-4">
          <Search
            placeholder="Search Content..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Button
            text="Create New Content"
            onClick={() => navigate("/create-content")}
          />
        </div>
      </div>

      {/* Table */}
      <Table
        blogs={filteredBlogs}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default BlogManagement;