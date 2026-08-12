import CourseCard from "./coursecard";

const courses = [
  {
    title: "Web Development",
    price: "$99.00",
    lessons: 45,
    students: 0,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },

  {
    title: "Graphic Design",
    price: "$79.99",
    lessons: 32,
    students: 0,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766",
  },

  {
    title: "Software Development",
    price: "$89.99",
    lessons: 40,
    students: 0,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },

  {
    title: "UI/UX Design",
    price: "$69.99",
    lessons: 28,
    students: 0,
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },

  {
    title: "Product Design",
    price: "$49.99",
    lessons: 20,
    students: 0,
    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931",
  },

  {
    title: "Data Analysis",
    price: "$59.99",
    lessons: 25,
    students: 0,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },

  {
    title: "Data Science",
    price: "$59.99",
    lessons: 25,
    students: 0,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
];

const CoursesGrid = () => {
  return (
    <div className="lg:col-span-3">

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
          />
        ))}

      </div>
{/* 
      Pagination
      <div className="flex justify-center gap-2 mt-10">
        <button className="w-8 h-8 border rounded">
          1
        </button>

        <button className="w-8 h-8 bg-blue-600 text-white rounded">
          2
        </button>

        <button className="w-8 h-8 border rounded">
          3
        </button>

        <button className="w-8 h-8 border rounded">
          4
        </button>
      </div> */}

    </div>
  );
};

export default CoursesGrid;