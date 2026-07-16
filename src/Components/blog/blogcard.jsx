import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <p className="text-sm text-gray-500">
          {post.date}
        </p>

        <h2 className="text-2xl font-bold mt-2">
          {post.title}
        </h2>

        <Link
          to={post.link}
          className="inline-block mt-5 bg-[#F09818] text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;