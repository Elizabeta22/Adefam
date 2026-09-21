import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  FileText,
  Bell,
  User,
  LogOut,
  Camera,
  PlayCircle,
  CheckCircle,
  Edit,
  Save,
} from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();

  // =====================================================
  // PAGE
  // =====================================================

  const [activePage, setActivePage] = useState("dashboard");

  // =====================================================
  // USER
  // =====================================================

  const getStoredUser = () => {
    try {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        return null;
      }

      return JSON.parse(storedUser);
    } catch (error) {
      console.error("Error reading user:", error);
      return null;
    }
  };

  const [user, setUser] = useState(getStoredUser);

  // =====================================================
  // PROFILE
  // =====================================================

  const [profileImage, setProfileImage] = useState(
    user?.profileImage || ""
  );

  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [profileForm, setProfileForm] = useState({
    name: user?.name || user?.fullname || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  // =====================================================
  // CHECK LOGIN
  // =====================================================

  useEffect(() => {
    const currentUser = getStoredUser();

    if (!currentUser) {
      navigate("/login");
      return;
    }

    setUser(currentUser);

    setProfileImage(currentUser.profileImage || "");

    setProfileForm({
      name: currentUser.name || currentUser.fullname || "",
      email: currentUser.email || "",
      phone: currentUser.phone || "",
    });
  }, [navigate]);

  // =====================================================
  // COURSES
  // =====================================================

  const defaultCourses = [
    {
      id: 1,
      title: "Web Development",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      progress: 0,
      lessons: 45,
    },

    {
      id: 2,
      title: "Data Analysis",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      progress: 0,
      lessons: 32,
    },

    {
      id: 3,
      title: "UI/UX Design",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      progress: 0,
      lessons: 28,
    },

    {
      id: 4,
      title: "Cybersecurity Fundamentals",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      progress: 0,
      lessons: 35,
    },
  ];

  const [courses, setCourses] = useState(() => {
    try {
      const savedCourses = localStorage.getItem("studentCourses");

      return savedCourses
        ? JSON.parse(savedCourses)
        : defaultCourses;
    } catch (error) {
      console.error("Error loading courses:", error);
      return defaultCourses;
    }
  });

  // =====================================================
  // COURSE FILTER
  // =====================================================

  const [courseFilter, setCourseFilter] = useState("all");

  // =====================================================
  // SAVE COURSES
  // =====================================================

  useEffect(() => {
    localStorage.setItem(
      "studentCourses",
      JSON.stringify(courses)
    );
  }, [courses]);

  // =====================================================
  // START / CONTINUE LEARNING
  // =====================================================

  const handleStartLearning = (id) => {
    setCourses((currentCourses) =>
      currentCourses.map((course) => {
        if (course.id === id) {
          return {
            ...course,
            progress: Math.min(
              Number(course.progress || 0) + 10,
              100
            ),
          };
        }

        return course;
      })
    );
  };

  // =====================================================
  // PROFILE IMAGE
  // =====================================================

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Please select an image smaller than 5MB.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const image = reader.result;

      setProfileImage(image);

      const currentUser = getStoredUser();

      if (currentUser) {
        const updatedUser = {
          ...currentUser,
          profileImage: image,
        };

        localStorage.setItem(
          "user",
          JSON.stringify(updatedUser)
        );

        setUser(updatedUser);
      }
    };

    reader.readAsDataURL(file);
  };

  // =====================================================
  // PROFILE INPUT
  // =====================================================

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfileForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================================
  // SAVE PROFILE
  // =====================================================

  const handleSaveProfile = () => {
    const currentUser = getStoredUser();

    if (!currentUser) {
      return;
    }

    const updatedUser = {
      ...currentUser,

      name: profileForm.name,

      fullname: profileForm.name,

      email: profileForm.email,

      phone: profileForm.phone,

      profileImage: profileImage,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);

    setProfileForm({
      name: updatedUser.name || "",
      email: updatedUser.email || "",
      phone: updatedUser.phone || "",
    });

    setIsEditingProfile(false);

    alert("Profile updated successfully!");
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("studentCourses");

    navigate("/login");
  };

  // =====================================================
  // STATISTICS
  // =====================================================

  const totalCourses = courses.length;

  const inProgress = courses.filter(
    (course) =>
      Number(course.progress || 0) > 0 &&
      Number(course.progress || 0) < 100
  ).length;

  const completed = courses.filter(
    (course) => Number(course.progress || 0) === 100
  ).length;

  const averageProgress =
    totalCourses > 0
      ? Math.round(
          courses.reduce(
            (total, course) =>
              total + Number(course.progress || 0),
            0
          ) / totalCourses
        )
      : 0;

  // =====================================================
  // FILTER COURSES
  // =====================================================

  const filteredCourses = courses.filter((course) => {
    const progress = Number(course.progress || 0);

    if (courseFilter === "progress") {
      return progress > 0 && progress < 100;
    }

    if (courseFilter === "completed") {
      return progress === 100;
    }

    return true;
  });

  // =====================================================
  // IF USER IS NOT LOADED
  // =====================================================

  if (!user) {
    return null;
  }

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="flex min-h-[calc(100vh-160px)]">

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside className="w-64 bg-[#F09818] text-white flex flex-col shrink-0">

          {/* PROFILE SUMMARY */}
          <div className="p-6 border-b border-white/20">

            <div className="flex items-center gap-3">

              {/* Profile image */}
              <div className="relative group">

                <label
                  htmlFor="profileImage"
                  className="cursor-pointer block"
                >

                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="
                        w-12
                        h-12
                        rounded-full
                        object-cover
                        border-2
                        border-white
                      "
                    />
                  ) : (
                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-white
                        text-[#F09818]
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-lg
                        border-2
                        border-white
                      "
                    >
                      {profileForm.name
                        ? profileForm.name
                            .charAt(0)
                            .toUpperCase()
                        : "S"}
                    </div>
                  )}

                  <div
                    className="
                      absolute
                      -bottom-1
                      -right-1
                      bg-white
                      text-[#F09818]
                      rounded-full
                      p-1
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  >
                    <Camera size={12} />
                  </div>

                </label>

                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

              </div>

              {/* USER INFORMATION */}

              <div className="overflow-hidden">

                <h2 className="font-semibold truncate">
                  {profileForm.name || "Student"}
                </h2>

                <p className="text-sm text-white/80 truncate">
                  {profileForm.email || ""}
                </p>

                <label
                  htmlFor="profileImage"
                  className="
                    text-xs
                    text-white
                    underline
                    cursor-pointer
                  "
                >
                  Change photo
                </label>

              </div>

            </div>

          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav className="flex-1 p-4 space-y-2">

            {/* DASHBOARD */}

            <button
              onClick={() => setActivePage("dashboard")}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                font-medium
                transition
                ${
                  activePage === "dashboard"
                    ? "bg-white text-[#F09818]"
                    : "text-white hover:bg-white hover:text-[#F09818]"
                }
              `}
            >
              <LayoutDashboard size={20} />

              Dashboard
            </button>

            {/* MY COURSES */}

            <button
              onClick={() => setActivePage("courses")}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                font-medium
                transition
                ${
                  activePage === "courses"
                    ? "bg-white text-[#F09818]"
                    : "text-white hover:bg-white hover:text-[#F09818]"
                }
              `}
            >
              <BookOpen size={20} />

              My Courses
            </button>

            {/* PROGRESS */}

            <button
              onClick={() => setActivePage("progress")}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                font-medium
                transition
                ${
                  activePage === "progress"
                    ? "bg-white text-[#F09818]"
                    : "text-white hover:bg-white hover:text-[#F09818]"
                }
              `}
            >
              <BarChart3 size={20} />

              Progress
            </button>

            {/* MATERIALS */}

            <button
              onClick={() => setActivePage("materials")}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                font-medium
                transition
                ${
                  activePage === "materials"
                    ? "bg-white text-[#F09818]"
                    : "text-white hover:bg-white hover:text-[#F09818]"
                }
              `}
            >
              <FileText size={20} />

              Materials
            </button>

            {/* NOTIFICATIONS */}

            <button
              onClick={() => setActivePage("notifications")}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                font-medium
                transition
                ${
                  activePage === "notifications"
                    ? "bg-white text-[#F09818]"
                    : "text-white hover:bg-white hover:text-[#F09818]"
                }
              `}
            >
              <Bell size={20} />

              Notifications
            </button>

            {/* PROFILE */}

            <button
              onClick={() => setActivePage("profile")}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                font-medium
                transition
                ${
                  activePage === "profile"
                    ? "bg-white text-[#F09818]"
                    : "text-white hover:bg-white hover:text-[#F09818]"
                }
              `}
            >
              <User size={20} />

              Profile
            </button>

          </nav>

          {/* LOGOUT */}

          <div className="p-4 border-t border-white/20">

            <button
              onClick={handleLogout}
              className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                text-white
                hover:bg-white
                hover:text-[#F09818]
                transition
              "
            >
              <LogOut size={20} />

              Logout
            </button>

          </div>

        </aside>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main className="flex-1 p-6 md:p-8 overflow-auto">

          {/* =================================================
              DASHBOARD PAGE
          ================================================= */}

          {activePage === "dashboard" && (
            <>

              {/* Welcome */}

              <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-800">
                  Welcome back,{" "}
                  {profileForm.name || "Student"} 👋
                </h1>

                <p className="text-gray-500 mt-2">
                  Continue your learning journey and improve
                  your skills.
                </p>

              </div>

              {/* =================================================
                  STATISTICS
              ================================================= */}

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

                {/* Total Courses */}

                <div
                  className="
                    bg-white
                    rounded-xl
                    p-5
                    shadow-sm
                    border
                    border-gray-100
                    group
                    hover:bg-[#F09818]
                    transition
                  "
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <p className="text-gray-500 group-hover:text-white/80">
                        Total Courses
                      </p>

                      <h2 className="text-3xl font-bold mt-2 group-hover:text-white">
                        {totalCourses}
                      </h2>

                    </div>

                    <BookOpen
                      size={28}
                      className="text-[#F09818] group-hover:text-white"
                    />

                  </div>

                </div>

                {/* In Progress */}

                <div
                  className="
                    bg-white
                    rounded-xl
                    p-5
                    shadow-sm
                    border
                    border-gray-100
                    group
                    hover:bg-[#F09818]
                    transition
                  "
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <p className="text-gray-500 group-hover:text-white/80">
                        In Progress
                      </p>

                      <h2 className="text-3xl font-bold mt-2 group-hover:text-white">
                        {inProgress}
                      </h2>

                    </div>

                    <BarChart3
                      size={28}
                      className="text-[#F09818] group-hover:text-white"
                    />

                  </div>

                </div>

                {/* Completed */}

                <div
                  className="
                    bg-white
                    rounded-xl
                    p-5
                    shadow-sm
                    border
                    border-gray-100
                    group
                    hover:bg-[#F09818]
                    transition
                  "
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <p className="text-gray-500 group-hover:text-white/80">
                        Completed
                      </p>

                      <h2 className="text-3xl font-bold mt-2 group-hover:text-white">
                        {completed}
                      </h2>

                    </div>

                    <CheckCircle
                      size={28}
                      className="text-[#F09818] group-hover:text-white"
                    />

                  </div>

                </div>

                {/* Overall Progress */}

                <div
                  className="
                    bg-white
                    rounded-xl
                    p-5
                    shadow-sm
                    border
                    border-gray-100
                    group
                    hover:bg-[#F09818]
                    transition
                  "
                >

                  <div className="flex justify-between items-center">

                    <div>

                      <p className="text-gray-500 group-hover:text-white/80">
                        Overall Progress
                      </p>

                      <h2 className="text-3xl font-bold mt-2 group-hover:text-white">
                        {averageProgress}%
                      </h2>

                    </div>

                    <BarChart3
                      size={28}
                      className="text-[#F09818] group-hover:text-white"
                    />

                  </div>

                </div>

              </div>

              {/* =================================================
                  MY COURSES ON DASHBOARD
              ================================================= */}

              <div className="bg-white rounded-xl shadow-sm p-6">

                <div className="flex justify-between items-center mb-6">

                  <div>

                    <h2 className="text-2xl font-bold text-gray-800">
                      My Courses
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Start learning your enrolled courses.
                    </p>

                  </div>

                  <button
                    onClick={() => setActivePage("courses")}
                    className="text-[#F09818] font-semibold hover:underline"
                  >
                    View All
                  </button>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                  {courses.map((course) => (

                    <div
                      key={course.id}
                      className="
                        bg-white
                        border
                        border-gray-200
                        rounded-xl
                        overflow-hidden
                        transition-all
                        duration-300
                        hover:bg-[#F09818]
                        hover:-translate-y-1
                        group
                      "
                    >

                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-44 object-cover"
                      />

                      <div className="p-5">

                        <h3 className="font-bold text-lg text-gray-800 group-hover:text-white">
                          {course.title}
                        </h3>

                        <p className="text-xs text-gray-500 group-hover:text-white/80 mt-1">
                          {course.lessons} Lessons
                        </p>

                        {/* Progress */}

                        <div className="mt-5">

                          <div className="flex justify-between mb-2">

                            <span className="text-sm text-gray-500 group-hover:text-white">
                              Progress
                            </span>

                            <span className="text-sm font-semibold text-[#F09818] group-hover:text-white">
                              {course.progress}%
                            </span>

                          </div>

                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

                            <div
                              className="
                                h-full
                                bg-[#F09818]
                                group-hover:bg-white
                                transition-all
                                duration-500
                              "
                              style={{
                                width: `${course.progress}%`,
                              }}
                            />

                          </div>

                        </div>

                        {/* Start Learning */}

                        <button
                          onClick={() =>
                            handleStartLearning(course.id)
                          }
                          disabled={course.progress === 100}
                          className="
                            w-full
                            mt-5
                            py-3
                            rounded-lg
                            bg-[#F09818]
                            text-white
                            font-semibold
                            flex
                            items-center
                            justify-center
                            gap-2
                            group-hover:bg-white
                            group-hover:text-[#F09818]
                            transition
                          "
                        >

                          {course.progress === 100 ? (
                            <>
                              <CheckCircle size={18} />
                              Completed
                            </>
                          ) : (
                            <>
                              <PlayCircle size={18} />

                              {course.progress === 0
                                ? "Start Learning"
                                : "Continue Learning"}
                            </>
                          )}

                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </>
          )}

          {/* =================================================
              MY COURSES PAGE
          ================================================= */}

          {activePage === "courses" && (
            <div>

              {/* Heading */}

              <div className="mb-6">

                <h1 className="text-3xl font-bold text-gray-800">
                  My Courses
                </h1>

                <p className="text-gray-500 mt-2">
                  Track your courses and continue learning.
                </p>

              </div>

              {/* Tabs */}

              <div className="bg-white rounded-xl p-4 mb-6">

                <div className="flex gap-6 border-b">

                  <button
                    onClick={() => setCourseFilter("all")}
                    className={`
                      pb-3
                      font-semibold
                      ${
                        courseFilter === "all"
                          ? "text-[#F09818] border-b-2 border-[#F09818]"
                          : "text-gray-500"
                      }
                    `}
                  >
                    All Courses
                  </button>

                  <button
                    onClick={() => setCourseFilter("progress")}
                    className={`
                      pb-3
                      font-semibold
                      ${
                        courseFilter === "progress"
                          ? "text-[#F09818] border-b-2 border-[#F09818]"
                          : "text-gray-500"
                      }
                    `}
                  >
                    In Progress
                  </button>

                  <button
                    onClick={() => setCourseFilter("completed")}
                    className={`
                      pb-3
                      font-semibold
                      ${
                        courseFilter === "completed"
                          ? "text-[#F09818] border-b-2 border-[#F09818]"
                          : "text-gray-500"
                      }
                    `}
                  >
                    Completed
                  </button>

                </div>

              </div>

              {/* Courses */}

              <div className="bg-white rounded-xl shadow-sm p-6">

                <div className="space-y-5">

                  {filteredCourses.length === 0 ? (

                    <div className="text-center py-12">

                      <BookOpen
                        size={45}
                        className="mx-auto text-gray-300 mb-4"
                      />

                      <h2 className="text-lg font-semibold text-gray-700">
                        No courses found
                      </h2>

                      <p className="text-gray-500 mt-2">
                        There are no courses in this section yet.
                      </p>

                    </div>

                  ) : (

                    filteredCourses.map((course) => (

                      <div
                        key={course.id}
                        className="
                          border
                          rounded-xl
                          p-4
                          flex
                          flex-col
                          md:flex-row
                          items-center
                          gap-5
                          hover:shadow-sm
                          transition
                        "
                      >

                        {/* Image */}

                        <img
                          src={course.image}
                          alt={course.title}
                          className="
                            w-full
                            md:w-28
                            h-20
                            object-cover
                            rounded-lg
                          "
                        />

                        {/* Course details */}

                        <div className="flex-1 w-full">

                          <div className="flex justify-between items-center gap-4">

                            <div>

                              <h2 className="font-bold text-gray-800">
                                {course.title}
                              </h2>

                              <p className="text-xs text-gray-500 mt-1">
                                {course.lessons} Lessons
                              </p>

                            </div>

                            <span className="text-sm font-semibold text-[#F09818]">
                              {course.progress}%
                            </span>

                          </div>

                          {/* Progress bar */}

                          <div className="w-full bg-gray-200 h-2 rounded-full mt-4 overflow-hidden">

                            <div
                              className="h-full bg-[#F09818] rounded-full transition-all duration-500"
                              style={{
                                width: `${course.progress}%`,
                              }}
                            />

                          </div>

                          <div className="flex justify-between items-center mt-3">

                            <span className="text-xs text-gray-500">

                              {course.progress === 100
                                ? "Completed"
                                : course.progress === 0
                                ? "Not Started"
                                : "In Progress"}

                            </span>

                            <button
                              onClick={() =>
                                handleStartLearning(course.id)
                              }
                              disabled={
                                course.progress === 100
                              }
                              className="
                                flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-lg
                                bg-[#F09818]
                                text-white
                                text-sm
                                font-semibold
                                hover:opacity-90
                                disabled:opacity-60
                              "
                            >

                              {course.progress === 100 ? (
                                <>
                                  <CheckCircle size={16} />
                                  Completed
                                </>
                              ) : (
                                <>
                                  <PlayCircle size={16} />

                                  {course.progress === 0
                                    ? "Start Learning"
                                    : "Continue Learning"}
                                </>
                              )}

                            </button>

                          </div>

                        </div>

                      </div>

                    ))

                  )}

                </div>

              </div>

            </div>
          )}

          {/* =================================================
              PROFILE PAGE
          ================================================= */}

          {activePage === "profile" && (
            <div>

              {/* Heading */}

              <div className="mb-6">

                <h1 className="text-3xl font-bold text-gray-800">
                  My Profile
                </h1>

                <p className="text-gray-500 mt-2">
                  View and update your profile information.
                </p>

              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">

                {/* Profile header */}

                <div className="flex flex-col md:flex-row items-center gap-5 pb-6 border-b">

                  {/* Image */}

                  <div className="relative">

                    {profileImage ? (

                      <img
                        src={profileImage}
                        alt="Profile"
                        className="
                          w-24
                          h-24
                          rounded-full
                          object-cover
                          border-4
                          border-gray-100
                        "
                      />

                    ) : (

                      <div
                        className="
                          w-24
                          h-24
                          rounded-full
                          bg-[#F09818]
                          text-white
                          flex
                          items-center
                          justify-center
                          text-3xl
                          font-bold
                        "
                      >
                        {profileForm.name
                          ? profileForm.name
                              .charAt(0)
                              .toUpperCase()
                          : "S"}
                      </div>

                    )}

                    {/* Camera */}

                    <label
                      htmlFor="profileImage"
                      className="
                        absolute
                        bottom-0
                        right-0
                        w-9
                        h-9
                        rounded-full
                        bg-[#F09818]
                        text-white
                        flex
                        items-center
                        justify-center
                        cursor-pointer
                        border-2
                        border-white
                      "
                    >
                      <Camera size={17} />

                      <input
                        id="profileImage"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>

                  </div>

                  {/* User name */}

                  <div className="flex-1 text-center md:text-left">

                    <h2 className="text-xl font-bold text-gray-800">
                      {profileForm.name || "Student"}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {profileForm.email}
                    </p>

                  </div>

                  {/* Edit button */}

                  <button
                    onClick={() => {
                      if (isEditingProfile) {
                        handleSaveProfile();
                      } else {
                        setIsEditingProfile(true);
                      }
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      px-4
                      py-2
                      rounded-lg
                      bg-[#F09818]
                      text-white
                      font-semibold
                    "
                  >

                    {isEditingProfile ? (
                      <>
                        <Save size={17} />
                        Save
                      </>
                    ) : (
                      <>
                        <Edit size={17} />
                        Edit Profile
                      </>
                    )}

                  </button>

                </div>

                {/* Profile form */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">

                  {/* Full Name */}

                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={profileForm.name}
                      onChange={handleProfileChange}
                      disabled={!isEditingProfile}
                      className="
                        w-full
                        border
                        border-gray-200
                        rounded-lg
                        px-4
                        py-3
                        outline-none
                        focus:border-[#F09818]
                        disabled:bg-gray-50
                      "
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
                      value={profileForm.email}
                      onChange={handleProfileChange}
                      disabled={!isEditingProfile}
                      className="
                        w-full
                        border
                        border-gray-200
                        rounded-lg
                        px-4
                        py-3
                        outline-none
                        focus:border-[#F09818]
                        disabled:bg-gray-50
                      "
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
                      value={profileForm.phone}
                      onChange={handleProfileChange}
                      disabled={!isEditingProfile}
                      placeholder="Enter phone number"
                      className="
                        w-full
                        border
                        border-gray-200
                        rounded-lg
                        px-4
                        py-3
                        outline-none
                        focus:border-[#F09818]
                        disabled:bg-gray-50
                      "
                    />

                  </div>

                </div>

                {/* Save changes */}

                {isEditingProfile && (

                  <div className="mt-6">

                    <button
                      onClick={handleSaveProfile}
                      className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-lg
                        bg-[#F09818]
                        text-white
                        font-semibold
                      "
                    >

                      <Save size={18} />

                      Save Changes

                    </button>

                  </div>

                )}

              </div>

            </div>
          )}

          {/* =================================================
              PROGRESS PAGE
          ================================================= */}

          {activePage === "progress" && (
            <div>

              <div className="mb-6">

                <h1 className="text-3xl font-bold text-gray-800">
                  My Progress
                </h1>

                <p className="text-gray-500 mt-2">
                  Track your overall learning progress.
                </p>

              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                  <div className="border rounded-xl p-5">

                    <p className="text-gray-500">
                      Total Courses
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                      {totalCourses}
                    </h2>

                  </div>

                  <div className="border rounded-xl p-5">

                    <p className="text-gray-500">
                      In Progress
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                      {inProgress}
                    </h2>

                  </div>

                  <div className="border rounded-xl p-5">

                    <p className="text-gray-500">
                      Completed
                    </p>

                    <h2 className="text-3xl font-bold mt-2">
                      {completed}
                    </h2>

                  </div>

                </div>

                <div className="mt-8">

                  <div className="flex justify-between mb-2">

                    <span className="font-semibold">
                      Overall Progress
                    </span>

                    <span className="font-semibold text-[#F09818]">
                      {averageProgress}%
                    </span>

                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-[#F09818] rounded-full"
                      style={{
                        width: `${averageProgress}%`,
                      }}
                    />

                  </div>

                </div>

              </div>

            </div>
          )}

          {/* =================================================
              MATERIALS PAGE
          ================================================= */}

          {activePage === "materials" && (
            <div>

              <div className="mb-6">

                <h1 className="text-3xl font-bold text-gray-800">
                  Learning Materials
                </h1>

                <p className="text-gray-500 mt-2">
                  Your course learning materials will appear here.
                </p>

              </div>

              <div className="bg-white rounded-xl p-10 text-center">

                <FileText
                  size={50}
                  className="mx-auto text-[#F09818] mb-4"
                />

                <h2 className="text-xl font-semibold">
                  Learning Materials
                </h2>

                <p className="text-gray-500 mt-2">
                  Materials for your courses will be available here.
                </p>

              </div>

            </div>
          )}

          {/* =================================================
              NOTIFICATIONS PAGE
          ================================================= */}

          {activePage === "notifications" && (
            <div>

              <div className="mb-6">

                <h1 className="text-3xl font-bold text-gray-800">
                  Notifications
                </h1>

                <p className="text-gray-500 mt-2">
                  Stay updated with your learning activities.
                </p>

              </div>

              <div className="bg-white rounded-xl p-10 text-center">

                <Bell
                  size={50}
                  className="mx-auto text-[#F09818] mb-4"
                />

                <h2 className="text-xl font-semibold">
                  No Notifications
                </h2>

                <p className="text-gray-500 mt-2">
                  You don't have any new notifications.
                </p>

              </div>

            </div>
          )}

        </main>

      </div>

    </div>
  );
};

export default StudentDashboard;