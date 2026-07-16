import FeaturedPost from "../Components/blog/FeaturedPost";
import BlogList from "../Components/blog/BlogList";

const BlogPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-800">
          Latest Articles & News
        </h1>

        <p className="text-gray-500 mt-2">
          Home / Blog
        </p>
      </div>

      {/* Featured Post */}
      <FeaturedPost />

      {/* Blog Posts */}
      <BlogList />
    </div>
  );
};

export default BlogPage;