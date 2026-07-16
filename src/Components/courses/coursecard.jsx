import { BookOpen, Users, Star } from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition">

      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">

        <h3 className="font-semibold text-slate-800">
          {course.title}
        </h3>

        <p className="text-yellow-600 font-bold mt-3">
          {course.price}
        </p>

        <div className="flex justify-between mt-4 text-sm text-gray-500">

          <span className="flex items-center gap-1">
            <BookOpen size={14} />
            {course.lessons}
          </span>

          <span className="flex items-center gap-1">
            <Users size={14} />
            {course.students}
          </span>

          <span className="flex items-center gap-1">
            <Star size={14} />
            0
          </span>

        </div>

        <button className="w-full mt-5 bg-yellow-600 text-white py-2 rounded-lg">
          Enroll Now
        </button>

      </div>
    </div>
  );
};

export default CourseCard;