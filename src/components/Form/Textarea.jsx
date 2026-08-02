function Textarea({
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <><div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
              {label}
          </label>

          <textarea
              rows={8}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div><div className="flex justify-end gap-4 mt-8">

              <button
                  className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                  Cancel
              </button>

              <button
                  className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                  Publish
              </button>

          </div></> 
     
  );
}

export default Textarea;