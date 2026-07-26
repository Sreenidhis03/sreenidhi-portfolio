import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AnimatedSection from "../../AnimatedSection";

const Contact = () => {
  return (
    <AnimatedSection>
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-orange-500 font-semibold">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Get In Touch
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            I'm currently seeking internship and full-time opportunities in
            Software Development, Artificial Intelligence, and Machine Learning.
            If you'd like to collaborate, discuss opportunities, or simply
            connect, I'd love to hear from you.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10">

          <div className="grid md:grid-cols-2 gap-12">

            {/* Left */}
            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                  <FaEnvelope className="text-orange-500 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <a
  href="mailto:sreenidhi3114@gmail.com"
  className="text-gray-600 hover:text-orange-500 transition"
>
  sreenidhi3114@gmail.com
</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                  <FaPhoneAlt className="text-orange-500 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Phone</h3>
                  <a
  href="tel:+919072334025"
  className="text-gray-600 hover:text-orange-500 transition"
>
  +91 907 233 4025
</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-orange-500 text-xl" />
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Location</h3>
                  <p className="text-gray-600">
                    Kerala, India
                  </p>
                </div>
              </div>

            </div>

            {/* Right */}
            <div>

              <div className="mb-8">
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
    Available for Internships
  </div>

  <h3 className="text-3xl font-bold text-gray-900">
    Let's Connect
  </h3>
</div>

              <div className="space-y-5">

                <a
                  href="https://github.com/Sreenidhis03"
                  target="_blank"
                  rel="noopener noreferrer"
className="flex items-center gap-4 border border-gray-300 rounded-xl p-5 hover:border-orange-500 hover:bg-orange-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"                >
                  <FaGithub className="text-2xl text-gray-900" />
                  <span className="font-medium text-lg">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sreenidhi-s-aa427b372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 border border-gray-300 rounded-xl p-5 hover:border-orange-500 hover:bg-orange-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <FaLinkedin className="text-2xl text-[#0A66C2]" />
                  <span className="font-medium text-lg">
                    LinkedIn
                  </span>
                </a>

               <div className="border border-orange-300 rounded-2xl p-6 bg-orange-50 hover:border-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
  <h3 className="text-2xl font-bold text-orange-600">
    Open to Opportunities
  </h3>

  <p className="text-gray-700 mt-3 leading-7">
    Currently seeking internships and entry-level software roles in
    Artificial Intelligence, Machine Learning, and Software Development.
    Feel free to connect if you have an opportunity or collaboration in mind.
  </p>
</div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    </AnimatedSection>
  );
};

export default Contact;