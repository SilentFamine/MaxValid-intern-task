import Input from "../../components/Form/Input";
import Textarea from "../../components/Form/Textarea";

function CreateContent() {
  return (
    <div className="bg-white rounded-xl shadow p-8 w-full max-w-6xl">

      <h1 className="text-2xl font-bold mb-8">
        Create New Content
      </h1>

      <Input
        label="Content Title"
        placeholder="Enter content title"
      />

      <Textarea
        label="Content Body"
        placeholder="Write your content..."
        />

    </div>
  );
}

export default CreateContent;