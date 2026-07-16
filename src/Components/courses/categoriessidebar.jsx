const CategoriesSidebar = () => {
  const categories = [
    "All Courses",
    "Web Development",
    "Graphic Design",
    "Software Development",
    "UI/UX Design",
    "Product Design",
    "Data Analysis",
    "Data Science",
  ];

  return (
    <div className="hidden md:block">
      <h3 className="font-bold mb-4">
        Categories
      </h3>

      <ul className="space-y-4">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              index === 0
                ? "text-yellow-600 font-semibold"
                : "text-gray-600"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSidebar;