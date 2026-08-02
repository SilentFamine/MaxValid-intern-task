function Table({ blogs = [] }) {
  return (
    <div className="bg-white rounded-lg shadow border overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="text-left px-6 py-4">Content Title</th>
            <th className="text-left px-6 py-4">Published Date</th>
            <th className="text-left px-6 py-4">Source Link</th>
            <th className="text-left px-6 py-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="border-b">
              <td className="px-6 py-4">{blog.title}</td>
              <td className="px-6 py-4">{blog.date}</td>
              <td className="px-6 py-4">{blog.source}</td>
              <td className="px-6 py-4"> <div className="flex gap-2">
    <button className="px-3 py-1 bg-blue-600 text-white rounded">
      Edit
    </button>

    <button className="px-3 py-1 bg-red-600 text-white rounded">
      Delete
    </button>
  </div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;