import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jol5m4r",
        "template_dhactwr",
        form.current,
        "ti_4r7FGOcK7r2pou"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section className="bg-sky-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="bg-blue-100 text-[#F09818] px-4 py-2 rounded-full text-sm font-medium">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
            Get In Touch
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions about our courses or training programs?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Contact Information
            </h2>

            <div className="bg-white p-5 rounded-2xl shadow-sm flex gap-4">
              <MapPin className="text-[#F09818]" size={28} />
              <div>
                <h3 className="font-semibold text-lg">
                  Address
                </h3>
                <p className="text-gray-600">
                 30, Nulge House, Km4 Gbongan - Ibadan Rd, beside Lotus Bank, Osogbo
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm flex gap-4">
              <Phone className="text-[#F09818]" size={28} />
              <div>
                <h3 className="font-semibold text-lg">
                  Phone
                </h3>
                <p className="text-gray-600">
                  +234 803 236 6804
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm flex gap-4">
              <Mail className="text-[#F09818]" size={28} />
              <div>
                <h3 className="font-semibold text-lg">
                  Email
                </h3>
                <p className="text-gray-600">
                  adefamcomputers@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm flex gap-4">
              <Clock className="text-[#F09818]" size={28} />
              <div>
                <h3 className="font-semibold text-lg">
                  Working Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday
                </p>
                <p className="text-gray-600">
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h2 className="text-3xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#F09818]  text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Visit Our Office
          </h2>

          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126527.98238878754!2d4.545540709329645!3d7.787531736402433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787b05c5b3e45%3A0xb0ba130ad54d677a!2sAdefam%20Computer%20Infotech!5e0!3m2!1sen!2sng!4v1781182817215!5m2!1sen!2sng"
              className="w-full h-[450px]"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;