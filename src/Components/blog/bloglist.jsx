import BlogCard from "./blogcard";

const posts = [
  {
    title: "The Future of Web Development",
    date: "May 8, 2026",
    image: "/webdev.jpg",
    link: "https://ktiworld.org/blog/the-future-of-web-development-what-every-developer-must-know-in-2026",
    external: true,
  },
  {
    title: "7 Useful Data Analysis Techniques",
    date: "May 5, 2026",
    image: "/dataanalysis1.jpg",
    link: "https://careerfoundry.com/en/blog/data-analytics/data-analysis-techniques/",
    external: true,
  },
  {
    title: "Cybersecurity Best Practices",
    date: "May 3, 2026",
    image: "/cybersecurity1.jpg",
    link: "https://www.syteca.com/en/blog/best-cyber-security-practices",
    external: true,
  },
  {
    title: "How to Build a Successful Tech Career",
    date: "May 1, 2026",
    image: "/coding.jpg",
    link: "https://dataschoolnigeria.com.ng/beginner-roadmap-to-becoming-a-tech-professional/",
    external: true,
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

