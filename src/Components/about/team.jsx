import React from "react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Head of Design",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Brown",
    role: "Lead Instructor",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Emily Davis",
    role: "Career Advisor",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Team = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Meet Our Team
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our team consists of passionate professionals dedicated to
          empowering learners with the skills and opportunities needed
          to succeed in the tech industry.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Circular Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-gray-100"
            />

            {/* Member Details */}
            <div className="mt-5">
              <h3 className="text-xl font-bold text-gray-900">
                {member.name}
              </h3>

              <p className="text-gray-700 mt-2">
                {member.role}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;