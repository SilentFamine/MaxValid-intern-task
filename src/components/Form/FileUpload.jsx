function FileUpload({ label }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type="file"
        className="w-full border border-gray-300 rounded-lg px-4 py-3
        file:mr-4 file:py-2 file:px-4
        file:border-0 file:rounded-md
        file:bg-blue-600 file:text-white
        file:cursor-pointer"
      />
    </div>
  );
}

export default FileUpload;