import { useState } from "react";

import CourseFilters from "../Components/courses/coursefilters";
import CategoriesSidebar from "../Components/courses/categoriessidebar";
import CoursesGrid from "../Components/courses/coursesgrid";

const CoursePage = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "All Categories",
    level: "All Levels",
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Page Title */}
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Explore Our Courses
        </h1>

        <p className="text-gray-500 mt-2">
          Home / Courses
        </p>
      </div>

      {/* Search & Filters */}
      <CourseFilters onSearch={setFilters} />

      {/* Sidebar + Courses */}
      <div className="grid lg:grid-cols-4 gap-8 mt-8">
        <CategoriesSidebar />

        <CoursesGrid filters={filters} />
      </div>

    </div>
  );
};

export default CoursePage;
