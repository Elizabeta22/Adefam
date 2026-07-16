const TopTechSkills2026 = () => {
  const skills = [
    "Artificial Intelligence (AI)",
    "Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "Full Stack Web Development",
    "UI/UX Design",
    "Data Science & Analytics",
    "Mobile App Development",
    "DevOps & Automation",
    "Blockchain Technology",
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Top 10 Tech Skills to Learn in 2026
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Technology continues to evolve rapidly. Learning the right skills
          today can prepare you for exciting career opportunities tomorrow.
          Here are ten of the most valuable tech skills to focus on in 2026.
        </p>

        {/* Skills List */}
        <div className="bg-white rounded-xl shadow p-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border-b last:border-b-0 py-5"
            >
              <h2 className="text-xl font-semibold text-[#5070F8]">
                {index + 1}. {skill}
              </h2>

              <p className="text-gray-600 mt-2">
                {skill} is one of the most in-demand technology skills in
                2026. Building knowledge in this field can improve your
                career opportunities and prepare you for the future of work.
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Final Thoughts
          </h2>

          <p className="text-gray-600">
            Whether you're a beginner or an experienced professional,
            investing time in these skills will help you stay competitive in
            the fast-changing technology industry. Start learning today and
            build a future-ready career.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TopTechSkills2026;