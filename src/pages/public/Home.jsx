import { useState } from "react";
import { getBlogs } from "../../utils/blogStorage";
import NewsCard from "../../components/Public/NewsCard";

function Home() {
  const blogs = getBlogs().sort((a, b) => b.id - a.id);

const [search, setSearch] = useState("");

const filteredBlogs = blogs.filter(
  (blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.body.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-10">
        Latest News
      </h1>

        <div className="my-8">
            <input
                type="text"
                placeholder="Search News..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
            />
            </div>
      {blogs.length === 0 ? (
        <p className="text-gray-500">
          No news available.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
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