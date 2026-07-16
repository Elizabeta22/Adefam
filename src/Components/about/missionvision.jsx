import React from 'react'
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-sky-50 p-8 rounded-2xl">
          <Target className="text-blue-600 mb-4" />

          <h3 className="text-xl font-bold mb-3">
            Our Mission
          </h3>

          <p className="text-gray-600">
            To bridge the digital skills gap by offering comprehensive and accessible
            education and training programs that equip individuals with the latest tools and
            techniques. We promote innovation, diversity, and excellence in the digital
            landscape by fostering a collaborative community.
          </p>
        </div>

        <div className="bg-orange-50 p-8 rounded-2xl">
          <Eye className="text-lime-200 mb-4" />

          <h3 className="text-xl font-bold mb-3">
            Our Vision
          </h3>

          <p className="text-gray-600">
            Our ultimate vision is to contribute significantly to achieving the United Nations
            Sustainable Development Goals (SDGs) while aligning with the principles and
            goals of the Global Development Group (GDG) in increasing the level of digital
            literacy in the community. Together, we envision a world where empowered
            individuals drive transformative growth, creating a sustainable and inclusive
            global future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;