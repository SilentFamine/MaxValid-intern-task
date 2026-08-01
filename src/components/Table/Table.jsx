import blogData from "../../data/blogData";function Table() {
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
                {blogData.map((blog) => (
                <tr key={blog.id} className="border-b">
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4">{blog.date}</td>
                <td className="px-6 py-4">{blog.source}</td>
                <td className="px-6 py-4">...</td>
                </tr>
                ))}
            </tbody>
      </table>
    </div>
  );
}

export default Table;