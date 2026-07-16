const Partners = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Our Trusted Partners
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        <div className="text-center text-lg md:text-2xl font-bold text-gray-400">
          Microsoft
        </div>

        <div className="text-center text-lg md:text-2xl font-bold text-gray-400">
          Google
        </div>

        <div className="text-center text-lg md:text-2xl font-bold text-gray-400">
          Meta
        </div>

        <div className="text-center text-lg md:text-2xl font-bold text-gray-400">
          Amazon
        </div>

        <div className="text-center text-lg md:text-2xl font-bold text-gray-400">
          DSN
        </div>
      </div>
    </section>
  );
};

export default Partners;