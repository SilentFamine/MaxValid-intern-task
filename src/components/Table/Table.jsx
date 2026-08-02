import { FiExternalLink, FiMoreVertical } from "react-icons/fi";
import blogData from "../../data/blogData";

function Table() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left px-6 py-4">Content Title</th>
            <th className="text-left px-6 py-4">Published Date</th>
            <th className="text-left px-6 py-4">Source</th>
            <th className="text-left px-6 py-4">Status</th>
            <th className="text-center px-6 py-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {blogData.map((blog) => (
            <tr
              key={blog.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4 text-sm font-medium">
                {blog.title}
              </td>

              <td className="px-6 py-4 text-sm">
                {blog.date}
              </td>

              <td className="px-6 py-4">
                <a
                  href={blog.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  <FiExternalLink />
                </a>
              </td>

              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    blog.status === "Published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {blog.status}
                </span>
              </td>

              <td className="px-6 py-4 text-center">
                <button>
                  <FiMoreVertical />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;