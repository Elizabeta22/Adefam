import React from "react";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  FileText,
  Bell,
  User,
  LogOut,
} from "lucide-react";

const StudentDashboard = () => {
  const courses = [
    {
      title: "Full Stack Web Development",
      progress: 75,
      image: "/images/fullstack.jpg",
    },
    {
      title: "Data Analysis with Python",
      progress: 50,
      image: "/images/dataanalytics.jpg",
    },
    {
      title: "UI/UX Design Masterclass",
      progress: 25,
      image: "/images/uiux.jpg",
    },
  ];

  const notifications = [
    {
      title: "New course available",
      time: "2 hours ago",
    },
    {
      title: "Assignment due tomorrow",
      time: "5 hours ago",
    },
    {
      title: "Course update available",
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-blue-700 text-white">
        <div className="p-6 border-b border-blue-600">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-12 h-12 rounded-full"
            />

            <div>
              <h3 className="font-semibold">
                John Doe
              </h3>

              <p className="text-xs text-blue-200">
                john@email.com
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li className="bg-blue-800 rounded-lg">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-800 rounded-lg"
              >
                <BookOpen size={18} />
                My Courses
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-800 rounded-lg"
              >
                <BarChart3 size={18} />
                Progress
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-800 rounded-lg"
              >
                <FileText size={18} />
                Materials
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-800 rounded-lg"
              >
                <Bell size={18} />
                Notifications
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 hover:bg-blue-800 rounded-lg"
              >
                <User size={18} />
                Profile
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-600">
          <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-blue-800 rounded-lg">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">
              Total Courses
            </p>

            <h3 className="text-3xl font-bold mt-2">
              6
            </h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">
              In Progress
            </p>

            <h3 className="text-3xl font-bold mt-2">
              4
            </h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">
              Completed
            </p>

            <h3 className="text-3xl font-bold mt-2">
              2
            </h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">
              Certificates
            </p>

            <h3 className="text-3xl font-bold mt-2">
              3
            </h3>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Continue Learning */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-5">
              Continue Learning
            </h2>

            <div className="space-y-5">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-4"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  <div className="flex-1 w-full">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">
                        {course.title}
                      </span>

                      <span>
                        {course.progress}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${course.progress}%`,
                        }}
                      ></div>
                    </div>
                  </div>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                    Continue
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold mb-5">
              Recent Notifications
            </h2>

            <div className="space-y-4">
              {notifications.map(
                (notification, index) => (
                  <div
                    key={index}
                    className="border-b pb-3"
                  >
                    <h4 className="font-medium">
                      {notification.title}
                    </h4>

                    <p className="text-sm text-gray-500">
                      {notification.time}
                    </p>
                  </div>
                )
              )}
            </div>

            <button className="text-blue-600 mt-4 font-medium">
              View All
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
