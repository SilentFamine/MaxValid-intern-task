import { getBlogs } from "../../utils/blogStorage";
import NewsCard from "../../components/Public/NewsCard";

function Home() {
  const blogs = getBlogs();

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-10">
        Latest News
      </h1>

      {blogs.length === 0 ? (
        <p className="text-gray-500">
          No news available.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
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