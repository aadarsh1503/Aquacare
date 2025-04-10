import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUserAlt, FaPen, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div>
      {/* Contact Section */}
      <div className="bg-tblue p-10">
        <h3 className="text-5xl text-center mt-10 font-poppins font-semibold mb-16">Contact</h3>
        <div className="max-w-6xl mx-auto flex flex-wrap lg:flex-nowrap gap-8">
          {/* Left Side */}
          <div className="flex-1 text-black">
            <h3 className="uppercase text-sm font-bold mb-2">Contact Us</h3>
            <h1 className="text-3xl font-bold mb-4">Have questions? Get in touch!</h1>
            <p className="text-gray-600 mb-6">
            We’re here to help. If you have any questions or need assistance, feel free to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-500 text-lg" />
                <p>P.O Box: 54121, Manama<br />Kingdom of Bahrain</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-500 text-lg" />
                <p>+973 39390050</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-lg" />
                <p>info@aquacare.me</p>
              </div>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="flex-1 lg:p-8 p-0 lg:mt-0 mt-6 rounded-md">
            <form className="space-y-14">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 border-b pb-2">
                  <FaUserAlt className="text-black" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full outline-none bg-tblue text-black"
                  />
                </div>
                <div className="flex items-center gap-2 border-b pb-2">
                  <FaEnvelope className="text-black" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full outline-none bg-tblue text-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 border-b pb-2">
                  <FaPhoneAlt className="text-black" />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full outline-none bg-tblue text-black"
                  />
                </div>
                <div className="flex items-center gap-2 border-b pb-2">
                  <FaPen className="text-black" />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full outline-none bg-tblue text-black"
                  />
                </div>
              </div>
              <div className="flex items-start gap-2 border-b pb-2">
                <FaPen className="text-black mt-1" />
                <textarea
                  placeholder="How can we help you? Feel free to get in touch!"
                  className="w-full outline-none bg-tblue text-black"
                />
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  <FaPaperPlane />
                  Get in Touch
                </button>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="privacy" />
                  <label htmlFor="privacy" className="text-black text-sm">
                    I agree to your <a href="/privacy-policy" className="text-blue-500 underline">privacy policy</a>.
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.236249565674!2d50.5237206!3d26.1868843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49afd0213a19d3%3A0x2f892ffe9e6f0385!2sGlobal%20Vision%20Solutions!5e0!3m2!1sen!2sin!4v1731936574918!5m2!1sen!2sin"
          width="100%"
          height="110%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
