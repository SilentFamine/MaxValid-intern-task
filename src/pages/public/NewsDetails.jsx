import { useParams } from "react-router-dom";
import { getBlogs } from "../../utils/blogStorage";

function NewsDetails() {
  const { id } = useParams();

  const blogs = getBlogs();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Blog Not Found
      </h1>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <img
  src={blog.image || "https://placehold.co/900x500"}
  alt={blog.title}
  className="w-full rounded-xl mb-8"
/>

      <p className="text-gray-500">
        {blog.date}
      </p>

      <h1 className="text-4xl font-bold my-5">
        {blog.title}
      </h1>

      <p className="text-gray-700 leading-8">
        {blog.body}
      </p>

      <a
        href={blog.source}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-8 text-blue-600"
      >
        Original Source
      </a>
    </div>
  );
}

export default NewsDetails;