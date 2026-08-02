import { useNavigate } from "react-router-dom";

function NewsCard({ blog }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Image */}
      <img
  src={blog.image || "https://placehold.co/600x350"}
  alt={blog.title}
  className="w-full h-52 object-cover"
/>

      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">
          {blog.date}
        </p>

        <h2 className="text-xl font-semibold mb-3 line-clamp-2">
          {blog.title}
        </h2>

        <p className="text-gray-600 line-clamp-3">
          {blog.body}
        </p>

        <button
          onClick={() => navigate(`/news/${blog.id}`)}
          className="mt-5 text-blue-600 font-semibold hover:underline"
        >
          Read More →
        </button>
      </div>
    </div>
  );
}

export default NewsCard;