import { useState } from "react";

const CourseFilters = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-4">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearch}
        className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select className="border rounded-lg px-4 py-3">
        <option>All Categories</option>
        <option>Web Development</option>
        <option>UI/UX Design</option>
        <option>Data Analytics</option>
        <option>Cybersecurity</option>
      </select>

      <select className="border rounded-lg px-4 py-3">
        <option>All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </div>
  );
};

export default CourseFilters;