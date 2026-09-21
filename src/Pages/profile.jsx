import React, { useEffect, useState } from "react";
import { Camera, Edit, Save, User } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profileImage: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    try {
      const storedUser = JSON.parse(
        localStorage.getItem("user")
      );

      if (storedUser) {
        setUser(storedUser);

        setFormData({
          name: storedUser.name || storedUser.fullname || "",
          email: storedUser.email || "",
          phone: storedUser.phone || "",
          profileImage: storedUser.profileImage || "",
        });
      }
    } catch (error) {
      console.error("Unable to load user:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        profileImage: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const saveProfile = () => {
    const updatedUser = {
      ...user,
      name: formData.name,
      fullname: formData.name,
      email: formData.email,
      phone: formData.phone,
      profileImage: formData.profileImage,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);
    setEditing(false);

    // Tell the dashboard that the user changed
    window.dispatchEvent(new Event("userUpdated"));
  };

  if (!user) {
    return (
      <div className="bg-white rounded-xl border p-10 text-center">
        <User
          size={45}
          className="mx-auto mb-4 text-gray-400"
        />

        <h2 className="font-semibold text-gray-700">
          No registered user found
        </h2>

        <p className="text-gray-500 mt-2">
          Please log in or create an account first.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          My Profile
        </h1>

        <p className="text-gray-500 mt-1">
          View and update your personal information.
        </p>
      </div>

      <div className="bg-white border rounded-xl p-6">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-5 pb-6 border-b">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 bg-gray-100">
              {formData.profileImage ? (
                <img
                  src={formData.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User
                    size={40}
                    className="text-gray-400"
                  />
                </div>
              )}
            </div>

            {editing && (
              <label
                className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer text-white"
                style={{ backgroundColor: "#F09818" }}
              >
                <Camera size={16} />

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-800">
              {formData.name || "Registered User"}
            </h2>

            <p className="text-sm text-gray-500">
              {formData.email}
            </p>
          </div>

          <button
            onClick={() => {
              if (editing) {
                saveProfile();
              } else {
                setEditing(true);
              }
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white"
            style={{ backgroundColor: "#F09818" }}
          >
            {editing ? (
              <>
                <Save size={16} />
                Save
              </>
            ) : (
              <>
                <Edit size={16} />
                Edit Profile
              </>
            )}
          </button>
        </div>

        {/* Form */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={!editing}
              className="w-full border rounded-lg px-4 py-3 outline-none disabled:bg-gray-50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editing}
              className="w-full border rounded-lg px-4 py-3 outline-none disabled:bg-gray-50"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!editing}
              placeholder="Enter phone number"
              className="w-full border rounded-lg px-4 py-3 outline-none disabled:bg-gray-50"
            />
          </div>
        </div>

        {editing && (
          <div className="mt-6">
            <button
              onClick={saveProfile}
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-white"
              style={{ backgroundColor: "#F09818" }}
            >
              <Save size={17} />
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;