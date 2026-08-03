function UserManagement() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          User Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all registered users.
        </p>
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-6">

        <table className="w-full">

          <thead className="border-b">
            <tr className="text-left">
              <th className="py-3">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-4">Tanvir</td>
              <td>tanvir@example.com</td>
              <td>Admin</td>
              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </td>
            </tr>

            <tr>
              <td className="py-4">Test</td>
              <td>test@example.com</td>
              <td>Editor</td>
              <td>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Pending
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default UserManagement;