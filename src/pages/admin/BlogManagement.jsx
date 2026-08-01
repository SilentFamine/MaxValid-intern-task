import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";

function BlogManagement() {
  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-between items-center">
        {/* Left Side */}
        <h1 className="text-3xl font-bold">
          Blog & News Management
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Search placeholder="Search blogs..." />

          <Button text="Add New Content" />
        </div>
      </div>
    </div>
  );
}

export default BlogManagement;