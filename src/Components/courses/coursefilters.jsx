import { useState } from "react";

const CourseFilters = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [level, setLevel] = useState("All Levels");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    onSearch({
      searchTerm: value,
      category: category,
      level: level,
    });
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);

    onSearch({
      searchTerm: searchTerm,
      category: value,
      level: level,
    });
  };

  const handleLevelChange = (e) => {
    const value = e.target.value;
    setLevel(value);

    onSearch({
      searchTerm: searchTerm,
      category: category,
      level: value,
    });
  };

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearch}
        className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Category */}
      <select
        value={category}
        onChange={handleCategoryChange}
        className="border rounded-lg px-4 py-3"
      >
        <option>All Categories</option>
        <option>Web Development</option>
        <option>UI/UX Design</option>
        <option>Data Analysis</option>
        <option>Cybersecurity</option>
      </select>

      {/* Level */}
      <select
        value={level}
        onChange={handleLevelChange}
        className="border rounded-lg px-4 py-3"
      >
        <option>All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </div>
  );
};

export default CourseFilters;
