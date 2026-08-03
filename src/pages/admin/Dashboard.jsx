import { getBlogs } from "../../utils/blogStorage";
import {
  FaNewspaper,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function Dashboard() {
  const blogs = getBlogs();

  const totalBlogs = blogs.length;

  const publishedBlogs = blogs.filter(
    (blog) => blog.status === "published"
  ).length;

  const draftBlogs = blogs.filter(
    (blog) => blog.status === "draft"
  ).length;

  const recentBlogs = [...blogs]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <div className="space-y-8">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back! Here's an overview of your content.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Total Blogs */}
        <div className="bg-white rounded-xl shadow border p-6 flex justify-between items-center hover:shadow-lg transition">
          <div>
            <p className="text-gray-500 text-sm">
              Total Blogs
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {totalBlogs}
            </h2>
          </div>

          <div className="bg-blue-100 p-4 rounded-full">
            <FaNewspaper className="text-blue-600 text-3xl" />
          </div>
        </div>

        {/* Published */}
        <div className="bg-white rounded-xl shadow border p-6 flex justify-between items-center hover:shadow-lg transition">
          <div>
            <p className="text-gray-500 text-sm">
              Published
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              {publishedBlogs}
            </h2>
          </div>

          <div className="bg-green-100 p-4 rounded-full">
            <FaCheckCircle className="text-green-600 text-3xl" />
          </div>
        </div>

        {/* Draft */}
        <div className="bg-white rounded-xl shadow border p-6 flex justify-between items-center hover:shadow-lg transition">
          <div>
            <p className="text-gray-500 text-sm">
              Draft
            </p>

            <h2 className="text-4xl font-bold text-yellow-500 mt-2">
              {draftBlogs}
            </h2>
          </div>

          <div className="bg-yellow-100 p-4 rounded-full">
            <FaClock className="text-yellow-500 text-3xl" />
          </div>
        </div>

      </div>

      {/* Recent Blogs */}
      <div className="bg-white rounded-xl shadow border p-6">

        <h2 className="text-xl font-semibold mb-6">
          Recent Blogs
        </h2>

        {recentBlogs.length === 0 ? (
          <p className="text-gray-500">
            No blogs available.
          </p>
        ) : (
          <div className="space-y-4">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {blog.date}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    blog.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {blog.status}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default Dashboard;