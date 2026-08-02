import { useState } from "react";
import { getBlogs } from "../../utils/blogStorage";
import NewsCard from "../../components/Public/NewsCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [search, setSearch] = useState("");
    const navigate = useNavigate();
  // Latest blogs first
  const blogs = getBlogs().sort((a, b) => b.id - a.id);

  // Search Filter
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.body.toLowerCase().includes(search.toLowerCase())
  );

  // Featured Blog
  const featuredBlog = filteredBlogs[0];

  // Remaining Blogs
  const latestBlogs = filteredBlogs.slice(1);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search News..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Featured News */}
      {featuredBlog && (
        <div className="mb-12 bg-white rounded-xl shadow overflow-hidden">
          <img
            src={
              featuredBlog.image ||
              "https://placehold.co/1200x500"
            }
            alt={featuredBlog.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <p className="text-gray-500">
              {featuredBlog.date}
            </p>

            <h2 className="text-4xl font-bold mt-3">
              {featuredBlog.title}
            </h2>

            <p className="mt-4 text-gray-600 line-clamp-3">
              {featuredBlog.body}
            </p>
          </div>
        </div>
      )}
        <button
  onClick={() => navigate(`/news/${featuredBlog.id}`)}
  className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
>
  Read More
</button>
      {/* Latest News */}
      <h1 className="text-4xl font-bold mb-8">
        Latest News
      </h1>

      {latestBlogs.length === 0 ? (
        <p className="text-gray-500">
          No news available.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <NewsCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;