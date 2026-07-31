function Profile({
  name,
  email,
  avatar,
}) {
  return (
    <div className="flex items-center gap-3 border-t pt-4">
      <div className="text-4xl text-gray-500">
        {avatar}
      </div>

      <div>
        <h2 className="font-semibold">
          {name}
        </h2>

        <p className="text-sm text-gray-500">
          {email}
        </p>
      </div>
    </div>
  );
}

export default Profile;