import CourseCard from "./coursecard";
import courses from "../../data/courses";


const CoursesGrid = ({ filters }) => {
  const filteredCourses = courses.filter((course) => {
    // Search filter
    const matchesSearch = course.title
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase());

    // Category filter
    const matchesCategory =
      filters.category === "All Categories" ||
      course.category === filters.category;

    // Level filter
    const matchesLevel =
      filters.level === "All Levels" ||
      course.level === filters.level;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="lg:col-span-3">

      {/* Results count */}
      <div className="mb-4 text-gray-500">
        Showing {filteredCourses.length}{" "}
        {filteredCourses.length === 1 ? "course" : "courses"}
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-gray-700">
            No courses found
          </h3>

          <p className="text-gray-500 mt-2">
            Try changing your search or filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default CoursesGrid;
