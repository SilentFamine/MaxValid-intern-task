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
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 5;

  // Load Blogs
 const loadBlogs = () => {
  const blogs = getBlogs().sort((a, b) => b.id - a.id);
  setBlogs(blogs);
};

  useEffect(() => {
    loadBlogs();
  }, []);

  // Search Filter
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = filteredBlogs.slice(
    indexOfFirstBlog,
    indexOfLastBlog
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
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Blog & News Management
        </h1>

        <div className="flex items-center gap-4">
          <Search
            placeholder="Search Content..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />

          <Button
            text="Create New Content"
            onClick={() => navigate("/admin/create-content")}
          />
        </div>
      </div>

      {/* Blog Table */}
      <Table
        blogs={currentBlogs}
        onDelete={handleDelete}
      />

      {/* Pagination */}
      {filteredBlogs.length > blogsPerPage && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({
            length: Math.ceil(
              filteredBlogs.length / blogsPerPage
            ),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`px-4 py-2 rounded-lg transition ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default BlogManagement;