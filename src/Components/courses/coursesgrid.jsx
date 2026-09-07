import CourseCard from "./coursecard";

const courses = [
  {
    title: "Web Development",
    price: "$99.00",
    lessons: 45,
    students: 0,
    category: "Web Development",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },

  {
    title: "Graphic Design",
    price: "$79.99",
    lessons: 32,
    students: 0,
    category: "Graphic Design",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766",
  },

  {
    title: "Software Development",
    price: "$89.99",
    lessons: 40,
    students: 0,
    category: "Software Development",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },

  {
    title: "UI/UX Design",
    price: "$69.99",
    lessons: 28,
    students: 0,
    category: "UI/UX Design",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },

  {
    title: "Product Design",
    price: "$49.99",
    lessons: 20,
    students: 0,
    category: "Product Design",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
  },

  {
    title: "Data Analysis",
    price: "$59.99",
    lessons: 25,
    students: 0,
    category: "Data Analysis",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },

  {
    title: "Data Science",
    price: "$59.99",
    lessons: 25,
    students: 0,
    category: "Data Science",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
];

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
