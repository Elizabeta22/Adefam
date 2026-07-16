import BlogCard from "./BlogCard";

const posts = [
  {
    title: "The Future of Web Development",
    date: "May 8, 2026",
    image: "/webfuture.jpg",
    link: "/future-web-development",
  },
  {
    title: "A Beginner's Guide to Data Analysis",
    date: "May 5, 2026",
    image: "/dataanalysis.jpg",
    link: "/beginner-data-analysis",
  },
  {
    title: "Cybersecurity Best Practices",
    date: "May 3, 2026",
    image: "/cybersecurity.jpg",
    link: "/cybersecurity-best-practices",
  },
  {
    title: "How to Build a Successful Tech Career",
    date: "May 1, 2026",
    image: "/career.jpg",
    link: "/successful-tech-career",
  },
];

const BlogList = () => {
  return (
    <div className="mt-8 space-y-8">
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogList;