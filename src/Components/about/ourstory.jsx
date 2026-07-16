import React from 'react'

const OurStory = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-5">
            Introduction
          </h2>

          <p className="text-gray-600 mb-4">
          
          </p>

          <p className="text-gray-600">
            Adefam Computer Infotech (ACI) is a dynamic IT hub offering comprehensive
training and consulting in computing and IT services. Our mission is to provide
high-quality, flexible education and_ services, fostering individual and
organizational potential in a secure environment. We drive a competitive,
inclusive knowledge-based economy by enhancing skills.

          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Team Meeting"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;