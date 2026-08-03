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
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.source.trim()) {
      newErrors.source = "Source link is required";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.body.trim()) {
      newErrors.body = "Content body is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addBlog(formData);

    alert("Blog Published Successfully!");

    setErrors({});

    setFormData({
      title: "",
      source: "",
      date: "",
      status: "published",
      body: "",
      image: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow p-8 max-w-3xl">
      <h1 className="text-2xl font-bold mb-8">
        Create New Content
      </h1>

      <div className="space-y-6">

        {/* Title */}
        <div>
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

          {errors.title && (
            <p className="text-red-500 text-sm mt-1">
              {errors.title}
            </p>
          )}
        </div>

        {/* Source */}
        <div>
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

          {errors.source && (
            <p className="text-red-500 text-sm mt-1">
              {errors.source}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
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

          {errors.date && (
            <p className="text-red-500 text-sm mt-1">
              {errors.date}
            </p>
          )}
        </div>

        {/* Status */}
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
            {
              value: "published",
              label: "Published",
            },
            {
              value: "draft",
              label: "Draft",
            },
          ]}
        />

        {/* Image */}
        <FileUpload
          label="Upload Featured Image"
          onChange={(e) => {
            const file = e.target.files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onloadend = () => {
              setFormData((prev) => ({
                ...prev,
                image: reader.result,
              }));
            };

            reader.readAsDataURL(file);
          }}
        />

        {/* Body */}
        <div>
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

          {errors.body && (
            <p className="text-red-500 text-sm mt-1">
              {errors.body}
            </p>
          )}
        </div>

        {/* Buttons */}
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