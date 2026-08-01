import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";

function BlogManagement() {
  return (
    <div className="space-y-6">

      {/* Top Section */}
      <div className="flex justify-between items-center">

        {/* Left Side */}
        <h1 className="text-3xl font-bold">
          Blog & News Management
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Search placeholder="Search Content..." />
          <Button text="Create New Content" />
        </div>

      </div>

      {/* Table */}
      <Table />

    </div>
  );
}

export default BlogManagement;