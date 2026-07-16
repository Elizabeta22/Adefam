const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-orange-50 text-black text-center rounded-3xl py-16">
        <h2 className="text-3xl font-bold">
          Ready To Start Learning?
        </h2>

        <p className="mt-3">
          Join thousands of successful students.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-[#F09818] text-white px-6 py-3 rounded-xl">
                <a href="/signup" className="block hover:text-black">  
                Register Now
                </a>
          </button>

          <button className="border px-6 py-3 rounded-xl bg-white text-[#F09818] border-[#F09818] hover:bg-[#F09818]">
                  <a href="/courses" className="block hover:text-black"> 
                Explore Courses
                </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;