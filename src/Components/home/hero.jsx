const Hero = () => {
  return (
    <section className="bg-sky-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="bg-white text-[#F09818] px-4 py-2 rounded-full text-sm">
              Best Online Learning Platform
            </span>

            <h1 className="text-5xl font-bold mt-6">
              Learn In-Demand
              <span className="block text-[#F09818]">
                Tech Skills
              </span>
            </h1>

            <p className="mt-5 text-gray-600">
              Join thousands of learners and build your career
              with industry-relevant courses.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-[#F09818] text-white px-6 py-3 rounded-xl">
                <a href="/signup" className="block hover:text-[#5070F8]">  
                Register Now
                </a>
              </button>

              <button className="border px-6 py-3 rounded-xl bg-white text-[#F09818] border-[#F09818] hover:bg-[#F09818] hover:text-white transition-colors duration-300">
                  <a href="/courses" className="block hover:text-[#5070F8]"> 
                Explore Courses
                </a>
              </button>
            </div>
          </div>

          <div>
            <img
              src="/student.jpg"
              alt="Student"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;