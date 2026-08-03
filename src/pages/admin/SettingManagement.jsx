function SettingManagement() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Setting Management
        </h1>

        <p className="text-gray-500 mt-2">
          Configure your application settings.
        </p>
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-8 space-y-6">

        <div>
          <label className="font-medium">
            Website Name
          </label>

          <input
            type="text"
            defaultValue="News Portal"
            className="w-full border rounded-lg px-4 py-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Contact Email
          </label>

          <input
            type="email"
            defaultValue="admin@gmail.com"
            className="w-full border rounded-lg px-4 py-3 mt-2"
          />
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default SettingManagement;