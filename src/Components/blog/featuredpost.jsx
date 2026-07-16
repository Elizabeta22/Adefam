import { Link } from "react-router-dom";

const FeaturedPost = () => {
  return (
    <div className="mt-8 rounded-xl overflow-hidden border shadow-sm">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Featured"
          className="w-full h-72 object-cover"
        />

        <span className="absolute top-4 left-4 bg-yellow-600 text-white text-xs px-3 py-1 rounded-full">
          Featured
        </span>

        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
          <h2 className="text-2xl font-bold">
            Top 10 Tech Skills to Learn in 2026
          </h2>

          <div className="flex justify-between mt-3 text-sm">
            <span>May 10, 2026</span>
          <Link
           to="/top-tech-skills-2026"
           className="border border-yellow-600 text-yellow-600 px-8 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
           Read More
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;