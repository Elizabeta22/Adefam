const CategoriesSidebar = ({ onCategoryChange, selectedCategory }) => {
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
        {categories.map((category, index) => {
          const filterCategory =
            category === "All Courses" ? "All Categories" : category;

          return (
            <li
              key={index}
              onClick={() => onCategoryChange(filterCategory)}
              className={`cursor-pointer transition ${
                selectedCategory === filterCategory
                  ? "text-yellow-600 font-semibold"
                  : "text-gray-600 hover:text-yellow-600"
              }`}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesSidebar;
