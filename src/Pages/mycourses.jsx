import React, { useEffect, useState } from "react";
import { BookOpen, PlayCircle } from "lucide-react";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = () => {
    try {
      const storedCourses = JSON.parse(
        localStorage.getItem("studentCourses") || "[]"
      );

      setCourses(Array.isArray(storedCourses) ? storedCourses : []);
    } catch (error) {
      console.error("Error loading student courses:", error);
      setCourses([]);
    }
  };

  const updateProgress = (index) => {
    const updatedCourses = [...courses];

    const currentProgress = Number(updatedCourses[index].progress || 0);

    updatedCourses[index] = {
      ...updatedCourses[index],
      progress: Math.min(currentProgress + 10, 100),
    };

    setCourses(updatedCourses);

    localStorage.setItem(
      "studentCourses",
      JSON.stringify(updatedCourses)
    );
  };

  const getStatus = (progress) => {
    if (progress === 0) return "Not Started";
    if (progress >= 100) return "Completed";
    return "In Progress";
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          My Courses
        </h1>

        <p className="text-gray-500 mt-1">
          Track your learning progress and continue your courses.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b mb-6 text-sm">
        <button
          className="pb-3 font-semibold"
          style={{
            color: "#F09818",
            borderBottom: "2px solid #F09818",
          }}
        >
          All Courses
        </button>

        <button className="pb-3 text-gray-500">
          In Progress
        </button>

        <button className="pb-3 text-gray-500">
          Completed
        </button>
      </div>

      {/* Courses */}
      {courses.length === 0 ? (
        <div className="bg-white rounded-xl border p-10 text-center">
          <BookOpen
            size={45}
            className="mx-auto mb-4 text-gray-400"
          />

          <h2 className="text-lg font-semibold text-gray-700">
            No courses yet
          </h2>

          <p className="text-gray-500 mt-2">
            Courses you enroll in will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {courses.map((course, index) => {
            const progress = Number(course.progress || 0);

            return (
              <div
                key={index}
                className="bg-white border rounded-xl p-4 flex flex-col md:flex-row gap-5 items-center"
              >
                {/* Course Image */}
                <div className="w-full md:w-28 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  {course.image ? (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <BookOpen className="text-gray-400" />
                    </div>
                  )}
                </div>

                {/* Course Information */}
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h2 className="font-semibold text-gray-800">
                        {course.title}
                      </h2>

                      <p className="text-xs text-gray-500 mt-1">
                        {course.lessons || 0} Lessons
                      </p>
                    </div>

                    <span
                      className="text-xs font-semibold"
                      style={{ color: "#F09818" }}
                    >
                      {progress}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-4 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${progress}%`,
                        backgroundColor: "#F09818",
                      }}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-500">
                      {getStatus(progress)}
                    </span>

                    <button
                      onClick={() => updateProgress(index)}
                      className="flex items-center gap-2 text-sm font-medium text-white px-4 py-2 rounded-lg transition"
                      style={{ backgroundColor: "#F09818" }}
                    >
                      <PlayCircle size={16} />

                      {progress >= 100
                        ? "Completed"
                        : "Continue Learning"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyCourses;