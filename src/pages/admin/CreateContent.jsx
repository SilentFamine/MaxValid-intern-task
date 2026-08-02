import Input from "../../components/Form/Input";

function CreateContent() {
  return (
    <div className="bg-white rounded-xl shadow p-8">

      <h1 className="text-2xl font-bold mb-8">
        Create New Content
      </h1>

      <Input
        label="Content Title"
        placeholder="Enter content title"
      />

    </div>
  );
}

export default CreateContent;