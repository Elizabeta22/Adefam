
import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Search,
  Pencil,
  Trash2,
  Plus,
  Menu,
  X,
  UserRound,
  DollarSign,
  UserCheck,
  Upload,
} from "lucide-react";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sample users for now
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      course: "Web Development",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      course: "Graphic Design",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      course: "Data Analysis",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      course: "Cybersecurity",
      status: "Active",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      course: "Web Development",
      status: "Active",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const [courses, setCourses] = useState([]);

  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    category: "Web Development",
    price: "",
    duration: "",
    level: "Beginner",
    thumbnail: "",
    video: "",
  });

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Users", icon: Users },
    { name: "Courses", icon: BookOpen },
    { name: "Content", icon: FileText },
    { name: "Analytics", icon: BarChart3 },
    { name: "Settings", icon: Settings },
  ];

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.course}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCourseForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleAddCourse = (event) => {
    event.preventDefault();

    if (
      !courseForm.title.trim() ||
      !courseForm.description.trim() ||
      !courseForm.price
    ) {
      alert("Please fill in the required fields.");
      return;
    }

    const newCourse = {
      id: Date.now(),
      ...courseForm,
    };

    setCourses((previous) => [...previous, newCourse]);

    alert("Course added successfully!");

    setCourseForm({
      title: "",
      description: "",
      category: "Web Development",
      price: "",
      duration: "",
      level: "Beginner",
      thumbnail: "",
      video: "",
    });
  };

  const handleDeleteUser = (id) => {
    setUsers((previous) =>
      previous.filter((user) => user.id !== id)
    );
  };

  const handleLogout = () => {
    alert("Logout functionality will be connected later.");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* Mobile Header */}
      <div className="flex items-center justify-between bg-[#F09818] p-4 text-white lg:hidden">
        <h1 className="text-xl font-bold">
          Adefam Admin
        </h1>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle navigation"
        >
          {sidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex min-h-screen">

        {/* ================= SIDEBAR ================= */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-[#F09818] text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >

          {/* Admin Profile */}
          <div className="border-b border-white/20 p-6">
            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#F09818]">
                A
              </div>

              <div className="min-w-0">
                <h2 className="font-bold">
                  Admin
                </h2>

                <p className="truncate text-xs text-white/80">
                  admin@adefam.com
                </p>
              </div>

            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 p-4">

            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActivePage(item.name);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-medium transition ${
                    isActive
                      ? "bg-white text-[#F09818]"
                      : "text-white hover:bg-white hover:text-[#F09818]"
                  }`}
                >
                  <Icon size={20} />
                  {item.name}
                </button>
              );
            })}

          </nav>

          {/* Logout */}
          <div className="border-t border-white/20 p-4">

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-white transition hover:bg-white hover:text-[#F09818]"
            >
              <LogOut size={20} />
              Logout
            </button>

          </div>

        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">

          {/* Page Header */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

            <div>
              <p className="text-sm text-gray-500">
                Adefam / Admin
              </p>

              <h1 className="mt-1 text-3xl font-bold text-gray-800">
                {activePage}
              </h1>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm">
              <UserRound
                size={20}
                className="text-[#F09818]"
              />

              <span className="text-sm font-medium">
                Administrator
              </span>
            </div>

          </div>

          {/* ================= DASHBOARD ================= */}
          {activePage === "Dashboard" && (
            <div className="space-y-6">

              {/* Statistics */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                  title="Total Students"
                  value="2,543"
                  icon={<Users size={28} />}
                />

                <StatCard
                  title="Active Users"
                  value="1,234"
                  icon={<UserCheck size={28} />}
                />

                <StatCard
                  title="Total Courses"
                  value="56"
                  icon={<BookOpen size={28} />}
                />

                <StatCard
                  title="Revenue"
                  value="$25,430"
                  icon={<DollarSign size={28} />}
                />

              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h2 className="mb-6 text-lg font-bold">
                    Student Growth
                  </h2>

                  <StudentGrowthChart />
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h2 className="mb-6 text-lg font-bold">
                    Course Enrollments
                  </h2>

                  <CourseEnrollmentChart />
                </div>

              </div>

              {/* Recent Users */}
              <div className="rounded-xl bg-white p-6 shadow-sm">

                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

                  <h2 className="text-lg font-bold">
                    Recent Users
                  </h2>

                  <button
                    onClick={() => setActivePage("Users")}
                    className="font-semibold text-[#F09818] hover:underline"
                  >
                    View All
                  </button>

                </div>

                <UserTable
                  users={users.slice(0, 5)}
                  onDelete={handleDeleteUser}
                  showActions={false}
                />

              </div>

            </div>
          )}

          {/* ================= USERS ================= */}
          {activePage === "Users" && (
            <div className="rounded-xl bg-white p-6 shadow-sm">

              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

                <h2 className="text-xl font-bold">
                  Manage Users
                </h2>

                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(event) =>
                      setSearchTerm(event.target.value)
                    }
                    className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 outline-none focus:border-[#F09818] sm:w-64"
                  />
                </div>

              </div>

              <UserTable
                users={filteredUsers}
                onDelete={handleDeleteUser}
                showActions={true}
              />

            </div>
          )}

          {/* ================= COURSES ================= */}
          {activePage === "Courses" && (
            <div className="space-y-6">

              <div className="flex flex-wrap items-center justify-between gap-4">

                <h2 className="text-xl font-bold">
                  Course Management
                </h2>

                <button
                  onClick={() => setActivePage("Add Course")}
                  className="flex items-center gap-2 rounded-lg bg-[#F09818] px-4 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  <Plus size={18} />
                  Add Course
                </button>

              </div>

              {courses.length === 0 ? (
                <div className="rounded-xl bg-white p-10 text-center shadow-sm">

                  <BookOpen
                    size={40}
                    className="mx-auto mb-3 text-gray-400"
                  />

                  <p className="text-gray-500">
                    No new courses have been added yet.
                  </p>

                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="overflow-hidden rounded-xl bg-white shadow-sm"
                    >

                      {course.thumbnail ? (
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="h-40 w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-40 items-center justify-center bg-gray-200">
                          <BookOpen
                            size={40}
                            className="text-gray-400"
                          />
                        </div>
                      )}

                      <div className="p-5">

                        <h3 className="font-bold">
                          {course.title}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                          {course.description}
                        </p>

                        <p className="mt-3 font-semibold text-[#F09818]">
                          ${course.price}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>
              )}

            </div>
          )}

          {/* ================= ADD COURSE ================= */}
          {activePage === "Add Course" && (
            <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow-sm sm:p-8">

              <h2 className="mb-6 text-xl font-bold">
                Add New Course
              </h2>

              <form
                onSubmit={handleAddCourse}
                className="space-y-5"
              >

                <FormInput
                  label="Course Title *"
                  name="title"
                  value={courseForm.title}
                  onChange={handleInputChange}
                  placeholder="Enter course title"
                  required
                />

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Course Description *
                  </label>

                  <textarea
                    name="description"
                    value={courseForm.description}
                    onChange={handleInputChange}
                    placeholder="Enter course description"
                    rows="4"
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-[#F09818]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                  <FormSelect
                    label="Category"
                    name="category"
                    value={courseForm.category}
                    onChange={handleInputChange}
                    options={[
                      "Web Development",
                      "Graphic Design",
                      "Software Development",
                      "UI/UX Design",
                      "Product Design",
                      "Data Analysis",
                      "Data Science",
                    ]}
                  />

                  <FormInput
                    label="Price ($) *"
                    name="price"
                    type="number"
                    value={courseForm.price}
                    onChange={handleInputChange}
                    placeholder="99.00"
                    required
                  />

                  <FormInput
                    label="Duration (hours)"
                    name="duration"
                    type="number"
                    value={courseForm.duration}
                    onChange={handleInputChange}
                    placeholder="10"
                  />

                  <FormSelect
                    label="Level"
                    name="level"
                    value={courseForm.level}
                    onChange={handleInputChange}
                    options={[
                      "Beginner",
                      "Intermediate",
                      "Advanced",
                    ]}
                  />

                </div>

                <FormInput
                  label="Course Thumbnail URL"
                  name="thumbnail"
                  type="url"
                  value={courseForm.thumbnail}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />

                <FormInput
                  label="Course Video URL"
                  name="video"
                  type="url"
                  value={courseForm.video}
                  onChange={handleInputChange}
                  placeholder="https://example.com/video"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F09818] px-4 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  <Upload size={18} />
                  Publish Course
                </button>

              </form>

            </div>
          )}

          {/* ================= OTHER PAGES ================= */}
          {["Content", "Analytics", "Settings"].includes(activePage) && (
            <div className="rounded-xl bg-white p-10 text-center shadow-sm">

              <Settings
                size={45}
                className="mx-auto mb-4 text-[#F09818]"
              />

              <h2 className="text-xl font-bold">
                {activePage}
              </h2>

              <p className="mt-2 text-gray-500">
                This section is ready for your next features.
              </p>

            </div>
          )}

        </main>

      </div>

    </div>
  );
};

/* ================= STAT CARD ================= */

const StatCard = ({ title, value, icon }) => (
  <div className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:bg-[#F09818]">

    <div className="flex items-center justify-between">

      <div>
        <p className="text-sm text-gray-500 group-hover:text-white/80">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-bold group-hover:text-white">
          {value}
        </h2>
      </div>

      <div className="text-[#F09818] group-hover:text-white">
        {icon}
      </div>

    </div>

  </div>
);

/* ================= FORM INPUT ================= */

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold">
      {label}
    </label>

    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-[#F09818]"
    />
  </div>
);

/* ================= FORM SELECT ================= */

const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
}) => (
  <div>
    <label className="mb-2 block text-sm font-semibold">
      {label}
    </label>

    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-[#F09818]"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

/* ================= USER TABLE ================= */

const UserTable = ({ users, onDelete, showActions }) => (
  <div className="overflow-x-auto">

    <table className="w-full min-w-[650px] text-left text-sm">

      <thead>
        <tr className="border-b border-gray-200 text-gray-500">
          <th className="px-3 py-4">Name</th>
          <th className="px-3 py-4">Email</th>
          <th className="px-3 py-4">Course</th>
          <th className="px-3 py-4">Status</th>

          {showActions && (
            <th className="px-3 py-4">Action</th>
          )}
        </tr>
      </thead>

      <tbody>

        {users.map((user) => (
          <tr
            key={user.id}
            className="border-b border-gray-100 last:border-0"
          >

            <td className="px-3 py-4 font-medium">
              {user.name}
            </td>

            <td className="px-3 py-4 text-gray-500">
              {user.email}
            </td>

            <td className="px-3 py-4">
              {user.course}
            </td>

            <td className="px-3 py-4">

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.status}
              </span>

            </td>

            {showActions && (
              <td className="px-3 py-4">

                <div className="flex gap-3">

                  <button
                    onClick={() =>
                      alert(`Edit ${user.name}`)
                    }
                    className="text-[#F09818] hover:text-orange-700"
                    aria-label={`Edit ${user.name}`}
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-red-600 hover:text-red-800"
                    aria-label={`Delete ${user.name}`}
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              </td>
            )}

          </tr>
        ))}

        {users.length === 0 && (
          <tr>
            <td
              colSpan={showActions ? 5 : 4}
              className="px-3 py-8 text-center text-gray-500"
            >
              No users found.
            </td>
          </tr>
        )}

      </tbody>

    </table>

  </div>
);

/* ================= STUDENT GROWTH CHART ================= */

const StudentGrowthChart = () => (
  <div className="w-full">

    <svg
      viewBox="0 0 500 280"
      className="h-auto w-full"
      role="img"
      aria-label="Student growth chart"
    >

      {[60, 100, 140, 180].map((y) => (
        <line
          key={y}
          x1="50"
          y1={y}
          x2="470"
          y2={y}
          stroke="#E5E7EB"
          strokeDasharray="4 4"
        />
      ))}

      <line
        x1="50"
        y1="20"
        x2="50"
        y2="225"
        stroke="#D1D5DB"
      />

      <line
        x1="50"
        y1="225"
        x2="470"
        y2="225"
        stroke="#D1D5DB"
      />

      <polyline
        points="50,205 105,155 160,178 215,90 270,105 325,100 380,75 435,25"
        fill="none"
        stroke="#F09818"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {[
        [50, 205],
        [105, 155],
        [160, 178],
        [215, 90],
        [270, 105],
        [325, 100],
        [380, 75],
        [435, 25],
      ].map(([x, y], index) => (
        <circle
          key={index}
          cx={x}
          cy={y}
          r="4"
          fill="#F09818"
        />
      ))}

      <text x="50" y="250" fontSize="12" fill="currentColor">
        Jan
      </text>

      <text x="155" y="250" fontSize="12" fill="currentColor">
        Mar
      </text>

      <text x="260" y="250" fontSize="12" fill="currentColor">
        May
      </text>

      <text x="365" y="250" fontSize="12" fill="currentColor">
        Jul
      </text>

      <text x="425" y="250" fontSize="12" fill="currentColor">
        Aug
      </text>

    </svg>

    <p className="mt-2 text-center text-xs text-gray-500">
      Illustrative data
    </p>

  </div>
);

/* ================= COURSE ENROLLMENT CHART ================= */

const CourseEnrollmentChart = () => {
  const segments = [
    {
      name: "Web Development",
      value: 40,
      color: "#F09818",
    },
    {
      name: "Design",
      value: 25,
      color: "#FDBA74",
    },
    {
      name: "Data Analysis",
      value: 20,
      color: "#EA580C",
    },
    {
      name: "Cybersecurity",
      value: 10,
      color: "#FED7AA",
    },
    {
      name: "Others",
      value: 5,
      color: "#C2410C",
    },
  ];

  const radius = 85;
  const center = 105;

  const polar = (angle) => {
    const radians = (angle * Math.PI) / 180;

    return {
      x: center + radius * Math.cos(radians),
      y: center + radius * Math.sin(radians),
    };
  };

  const makeSlice = (startAngle, endAngle) => {
    const start = polar(startAngle);
    const end = polar(endAngle);

    const largeArc =
      endAngle - startAngle > 180 ? 1 : 0;

    return `
      M ${center} ${center}
      L ${start.x} ${start.y}
      A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}
      Z
    `;
  };

  let currentAngle = -90;

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">

      <svg
        viewBox="0 0 210 210"
        className="h-52 w-52 shrink-0"
        role="img"
        aria-label="Course enrollment pie chart"
      >

        {segments.map((segment) => {
          const start = currentAngle;
          const end = currentAngle + segment.value * 3.6;

          currentAngle = end;

          return (
            <path
              key={segment.name}
              d={makeSlice(start, end)}
              fill={segment.color}
              stroke="white"
              strokeWidth="2"
            />
          );
        })}

      </svg>

      <div className="space-y-3 text-sm">

        {segments.map((segment) => (
          <div
            key={segment.name}
            className="flex items-center gap-2"
          >

            <span
              className="h-3 w-3 rounded-sm"
              style={{
                backgroundColor: segment.color,
              }}
            />

            <span>{segment.name}</span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default AdminDashboard;