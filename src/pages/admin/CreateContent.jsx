import { useState } from "react";

import Input from "../../components/Form/Input";
import Textarea from "../../components/Form/Textarea";
import Select from "../../components/Form/Select";
import FileUpload from "../../components/Form/FileUpload";
import Button from "../../components/Button/Button";
import { addBlog } from "../../utils/blogStorage";

function CreateContent() {
  const [formData, setFormData] = useState({
    title: "",
    source: "",
    date: "",
    status: "published",
    body: "",
  });

  // Handle Publish Button
 const handleSubmit = () => {
  addBlog(formData);

  alert("Blog Published Successfully!");

  setFormData({
    title: "",
    source: "",
    date: "",
    status: "published",
    body: "",
  });
};

  return (
    <div className="bg-white rounded-xl shadow p-8 max-w-3xl">
      <h1 className="text-2xl font-bold mb-8">
        Create New Content
      </h1>

      <div className="space-y-6">
        <Input
          label="Content Title"
          placeholder="Enter content title"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
        />

        <Input
          label="Source Link"
          placeholder="https://example.com"
          value={formData.source}
          onChange={(e) =>
            setFormData({
              ...formData,
              source: e.target.value,
            })
          }
        />

        <Input
          label="Published Date"
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({
              ...formData,
              date: e.target.value,
            })
          }
        />

        <Select
          label="Status"
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value,
            })
          }
          options={[
            { value: "published", label: "Published" },
            { value: "draft", label: "Draft" },
          ]}
        />

        <FileUpload label="Upload Featured Image" />

        <Textarea
          label="Content Body"
          placeholder="Write your content..."
          value={formData.body}
          onChange={(e) =>
            setFormData({
              ...formData,
              body: e.target.value,
            })
          }
        />

        <div className="flex justify-end gap-4 pt-4">
          <Button
            text="Cancel"
            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
          />
              
          <Button
            text="Publish"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateContent;