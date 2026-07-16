import {
  Globe,
  Palette,
  Code2,
  LayoutDashboard,
  PenTool,
  BarChart3,
  Database,
} from "lucide-react";

const courses = [
  {
    title: "Web Development",
    level: "Advanced",
    icon: Globe,
    bg: "bg-blue-100",
  },
  {
    title: "Graphics Design",
    level: "Intermediate",
    icon: Palette,
    bg: "bg-red-100",
  },
  {
    title: "Software Development",
    level: "Advanced",
    icon: Code2,
    bg: "bg-green-100",
  },
  {
    title: "UI/UX Design",
    level: "Intermediate",
    icon: LayoutDashboard,
    bg: "bg-purple-100",
  },
  {
    title: "Product Design",
    level: "Intermediate",
    icon: PenTool,
    bg: "bg-yellow-100",
  },
  {
    title: "Data Analysis",
    level: "Advanced",
    icon: BarChart3,
    bg: "bg-green-100",
  },
  {
    title: "Data Science",
    level: "Intermediate",
    icon: Database,
    bg: "bg-blue-100",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">
          Featured Courses
        </h2>

        {/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {courses.map((course, index) => {
    const Icon = course.icon;

    return (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 border border-gray-100"
      >
        {/* Icon */}
        <div
          className={`w-14 h-14 ${course.bg} rounded-xl flex items-center justify-center mb-5`}
        >
          <Icon
            size={34}
            className="text-slate-700"
            strokeWidth={2}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">
          {course.title}
        </h3>

        {/* Level */}
        <p className="text-gray-500 text-base">
          {course.level}
        </p>
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
};

export default FeaturedCourses;