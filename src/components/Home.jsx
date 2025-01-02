import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from "./Autoplay";

const Home = () => {
  const [active, setActive] = useState("home");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is an AI Agent?",
      answer: (
        <div>
          <p>
            An AI agent is a software system that understands language, learns
            from data, and takes actions automatically to achieve specific
            goals. In the hiring world, an AI agent can review resumes, interact
            with candidates, and provide recommendations, all without manual
            oversight. Key capabilities include:
          </p>
          <ul className="list-disc ml-5">
            <li>
              Natural Language Processing to interpret resumes and candidate
              responses
            </li>
            <li>
              Adaptive Learning to improve accuracy and efficiency over time
            </li>
            <li>
              Task Automation to handle repetitive or time-consuming steps
            </li>
            <li>Data-Driven Insights for better predictions and decisions</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are the Benefits of Using Recruito’s AI Agent?",
      answer: (
        <p>
          Benefits include faster hiring, improved candidate experiences, and
          cost efficiency.
        </p>
      ),
    },
    {
      question: "Next Steps?",
      answer: (
        <p>
          Contact us to learn more about integrating Recruito’s AI Agent into
          your workflow!
        </p>
      ),
    },
  ];

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center flex-wrap">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src="/recruito_logo.png"
              alt="Recruito Logo"
              className="w-32 md:w-40"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-6 text-center flex-wrap md:flex-nowrap">
            {["home", "features", "pricing", "resources"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setActive(section)} // Set active on click
                className={`text-sm ${
                  active === section
                    ? "text-blue-500 font-semibold" // Active styles
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}{" "}
                {active === section && (
                  <span className="text-blue-500">*</span> // Add star if active
                )}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#1F67E7] to-[#1AD7BE] text-white text-sm px-4 py-2 rounded-full shadow-md hover:opacity-90 mt-4 md:mt-0"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-[#f4f9ff] to-white py-20 relative overflow-hidden"
      >
        <img
          src="/docker-pattern-right 3.png"
          className="absolute top-0 right-0 opacity-80 w-20 sm:w-40 md:w-60"
        />
        <img
          src="/docker-pattern-right 4.png"
          className="absolute bottom-0 left-0 opacity-80 w-20 sm:w-40 md:w-60"
        />
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
            Revolutionize Your Hiring <br /> Process with{" "}
            <span className="text-blue-500">Recruito AI</span> ✨
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-8 text-[#3E4757]">
            Your fully automated hiring assistant that sources, screens,
            <br className="hidden sm:block" /> and interviews candidates
            effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#free-trial"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition"
            >
              Start Your Free Trial
            </a>
            <a
              href="#request-demo"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium shadow-md border border-blue-600 hover:bg-blue-100 transition"
            >
              <span>✨</span>Request A Demo
            </a>
          </div>
        </div>
      </section>

      {/* Dashboard section */}
      <section className="bg-gradient-to-br from-[#f4f9ff] to-white py-20 flex flex-col items-center justify-center">
        <div className="mb-10 px-4 text-center">
          <p className="text-base sm:text-lg md:text-2xl font-semibold text-[#3E4757]">
            See How We Create An Autonomous{" "}
            <span className="underline text-blue-600">AI Agent</span>
          </p>
        </div>
        <div className="relative w-full max-w-5xl flex items-center justify-center px-4">
          <img
            src="/Group 4.png"
            alt="Dashboard example"
            className="shadow-lg rounded-md w-full max-w-[90%] md:max-w-[80%] z-0"
          />
          <img
            src="/Customers 1.png"
            className="z-1 absolute -right-12 top-10 md:-right-28 md:top-24"
          />
          <img
            src="/Featured Product 1.png"
            className="z-1 absolute -left-10 bottom-10 md:-left-32 md:top-56"
          />
        </div>
      </section>

      {/* companies logos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-gray-600 text-lg font-medium mb-6">
            Trusted By The World Leading Organizations
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-6">
            <img
              src="/GSK.png"
              alt="GSK"
              className="h-10 opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/OGLIVY.png"
              alt="Ogilvy"
              className="h-10 opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/intys.png"
              alt="intys"
              className="h-10 opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="h-10 opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/OGLIVY.png"
              alt="Ogilvy"
              className="h-10 border rounded-sm p-1 transition"
            />
            <img
              src="/GSK.png"
              alt="GSK"
              className="h-10 opacity-80 hover:opacity-100 transition"
            />
          </div>
        </div>
      </section>

      {/* features */}
      <section
        id="features"
        className="bg-gradient-to-br from-[#f4f9ff] to-white py-20 flex flex-col items-center justify-center"
      >
        {/* Features Header Section */}
        <div className="flex flex-col items-center justify-center mb-14">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium shadow-md border border-blue-600 hover:bg-blue-100 transition mb-6">
            Features
          </button>
          <div className="text-center relative">
            <h6 className="font-semibold text-5xl text-[#0b1928] leading-snug">
              Streamline your recruitment with <br /> our advanced features
            </h6>
            <img
              src="/public/Group 5.png"
              className="absolute -right-40 top-0"
            />
            <img
              src="/public/Group 5.png"
              className="absolute -left-16 bottom-0"
            />
          </div>
        </div>

        {/* first Section */}
        <div className="flex flex-row items-center justify-between w-full max-w-7xl px-10">
          {/* Text Section */}
          <div className="flex flex-col justify-center text-left w-1/2 pr-8">
            <h5 className="font-semibold text-4xl text-[#0b1928] leading-snug mb-6">
              Candidate Sourcing & <br /> Job Posting
            </h5>
            <p className="text-[#3E4757] text-lg leading-relaxed">
              Recruito automatically posts your position or actively hunts top
              candidates across multiple platforms. No human intervention
              needed.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center w-1/2 border border-gray-200 rounded-lg m-5 pb-0">
            <img
              src="/public/Gabrun-Minutes-BG 1.png"
              className="absolute top-0 right-0 opacity-80"
            />
            <div>
              <div className="relative pb-0">
                <img
                  src="/Group 8.png"
                  alt="Highlighted person"
                  className="relative z-20 rounded-lg"
                />
                <img
                  src="/solar_verified-check-bold.png"
                  className="absolute top-5 left-20 z-40"
                />
              </div>
            </div>

            <img
              src="/Group 10.png"
              alt="Background card 1"
              className="absolute z-10 right-0.5 top-11 rounded-lg opacity-95"
            />
            <img
              src="/Group 9.png"
              alt="Background card 2"
              className="absolute z-0 left-0.5 top-12 rounded-lg opacity-95"
            />
          </div>
        </div>

        {/* second section */}

        <div className="flex flex-row items-center justify-between w-full max-w-7xl px-10">
          {/* Image Section */}
          <div className="relative flex flex-col items-center justify-center w-1/2 pt-24 border pb-10 border-gray-200 rounded-lg m-5">
            <img
              src="/Gabrun-Minutes-BG 1.png"
              className="absolute top-0 left-0"
            />
            <img
              src="/solar_magnifer-outline.png"
              className="absolute bottom-0 right-0"
            />
            <img src="/Group 13.png" alt="input_1" className="" />
            <img src="/Group 12.png" alt="input_2" className="opacity-90" />
            <img src="/Group 11.png" alt="input_3" className="opacity-90" />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center text-center w-1/2 pr-8">
            <h5 className="font-semibold text-4xl text-[#0b1928] leading-snug mb-6">
              Automated Resume <br /> Screening & Filtering
            </h5>
            <p className="text-[#3E4757] text-lg leading-relaxed">
              Our AI instantly sorts and prioritizes resumes, highlighting only
              <br />
              the strongest matches and discarding unqualified applicants.
            </p>
          </div>
        </div>

        {/* third section */}

        <div className="flex flex-row items-center justify-between w-full max-w-7xl px-10">
          {/* Text Section */}
          <div className="flex flex-col justify-center text-left w-1/2 pr-8">
            <h5 className="font-semibold text-4xl text-[#0b1928] leading-snug mb-6">
              Online Assessment
            </h5>
            <p className="text-[#3E4757] text-lg leading-relaxed">
              Candidates complete a quick skill or behavioral test to validate
              their capabilities. This process is seamlessly integrated and
              fully automated.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center w-1/2 border border-gray-200 rounded-lg m-5">
            <img
              src="/Gabrun-Minutes-BG 1.png"
              className="absolute top-0 right-0 opacity-85 z-0"
            />
            <img src="/Group 14.png" alt="rating" className="w-100% z-10" />
          </div>
        </div>

        {/* fourth section */}

        <div className="flex flex-row items-center justify-between w-full max-w-7xl px-10">
          {/* Image Section */}

          <div className="relative flex flex-col items-center justify-center w-1/2 border pt-5 pr-10 border-gray-200 rounded-lg m-5">
            <img
              src="/Gabrun-Minutes-BG 1.png"
              className="absolute top-0 left-0"
            />
            <img
              src="/Group 15.png"
              className="absolute bottom-0 -right-12 z-20"
            />
            <img src="/image.png" alt="input_1" className="z-10" />
          </div>

          {/* Text Section */}

          <div className="flex flex-col justify-center text-center w-1/2 pr-8">
            <h5 className="font-semibold text-4xl text-[#0b1928] leading-snug mb-6">
              AI Video Interviews
            </h5>
            <p className="text-[#3E4757] text-lg leading-relaxed text-left pl-14">
              An AI-driven virtual interviewer conducts dynamic, adaptive
              interviews, capturing both technical insights and soft skills.
              Everything is entirely hands-free.
            </p>
          </div>
        </div>

        {/* fifth section */}

        <div className="flex flex-row items-center justify-between w-full max-w-7xl px-10">
          {/* Text Section */}
          <div className="flex flex-col justify-center text-left w-1/2 pr-8">
            <h5 className="font-semibold text-[44px] text-[#0b1928] leading-snug mb-6">
              Final Shortlist for the
              <br /> Line Manager
            </h5>
            <p className="text-[#3E4757] text-lg leading-relaxed">
              Recruito presents a curated list of the top performers, complete
              with interview recordings and evaluations, so you can make a
              swift, confident hiring decision.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center w-1/2 border border-gray-200 rounded-lg m-5">
            <img
              src="/Gabrun-Minutes-BG 1.png"
              className="absolute top-0 right-0 opacity-75"
            />
            <div className="pt-10">
              <img src="/Group 16.png" className="h-40" />
              <img src="/Group 17.png" className="h-48" />
              <img src="/Group 18.png" className="h-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        id="pricing"
        className="bg-[#0B1928] py-20 flex flex-col items-center justify-center relative pt-5 pb-5 pr-10 pl-10"
      >
        <img
          src="/Gabrun-Hero-BG-5 1.png"
          className="absolute bottom-0 left-0"
        />
        <img
          src="/Gabrun-Hero-BG-5 2 (1).png"
          className="absolute bottom-0 right-0"
        />
        {/* benefits Header Section */}
        <div className="flex flex-col items-center justify-center mb-14">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium shadow-md border border-blue-600 hover:bg-blue-100 transition mb-6">
            Benefits
          </button>
          <div className="text-center">
            <h4 className="font-semibold text-5xl text-[#ffffff] leading-snug">
              Unlock the advantages of using <br /> Recruito AI for your hiring
              needs.
            </h4>
          </div>
        </div>
        {/* cards */}
        <div className="flex flex-row justify-between items-center gap-2">
          <div className="flex flex-col items-center justify-center border border-white rounded-xl p-6">
            <div className="p-5 border border-white rounded-xl mb-4">
              <img src="/streamline_ai-cloud-spark.png" />
            </div>
            <h3 className="text-[#fff] font-semibold text-center mb-4">
              Automate Processes
            </h3>
            <p className="text-center text-[#808080] mb-4">
              Let Recruito handle resume screening, scheduling, and interviews
              so you can focus on strategic decisions.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border border-white rounded-xl p-6">
            <div className="p-5 border border-white rounded-xl mb-4">
              <img src="/streamline_ai-edit-spark.png" />
            </div>
            <h3 className="text-[#fff] font-semibold text-center mb-4">
              Provide Instant Information
            </h3>
            <p className="text-center text-[#808080] mb-4">
              Quickly access relevant candidate data, ensuring no talent is
              overlooked in your search.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border border-white rounded-xl p-6">
            <div className="p-5 border border-white rounded-xl mb-4">
              <img src="/streamline_ai-generate-portrait-image-spark.png" />
            </div>
            <h3 className="text-[#fff] font-semibold text-center mb-4">
              Make Data-Driven Decisions
            </h3>
            <p className="text-center text-[#808080] mb-4">
              Utilize analytics to rank candidates based on key metrics,
              providing unbiased recommendations for your hiring team.
            </p>
          </div>
        </div>
      </section>

      {/* faqs */}
      <section
        id="resources"
        className="bg-gradient-to-br from-[#f4f9ff] to-white py-20 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center mb-14">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium shadow-md border border-blue-600 hover:bg-blue-100 transition mb-6">
            FAQS
          </button>
        </div>
        <div className="max-w-2xl mx-auto p-5 border border-gray-300 rounded-md shadow-md w-[980px]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0 w-[650px]">
              <button
                className="w-full text-left py-3 px-4 font-semibold flex justify-between items-center text-gray-700 hover:text-blue-600 font-medium focus:outline-none"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "▲" : "▼"}</span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* carousel */}
      <section
        id="features"
        className="bg-gradient-to-br from-[#f4f9ff] to-white py-20 flex flex-col items-center justify-center"
      >
        {/* Features Header Section */}
        <div className="flex flex-col items-center justify-center mb-12">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium shadow-md border border-blue-600 hover:bg-blue-100 transition mb-6">
            Testimonials
          </button>
          <div className="text-center px-6 sm:px-20">
            <h6 className="font-semibold text-2xl sm:text-4xl text-[#0b1928] leading-snug pr-20 pl-20">
              Don’t just take our word for it— <br />
              see what our clients say about Recruito AI.
            </h6>
          </div>
        </div>

        <div className="mb-4">
          <AutoPlay />
        </div>
      </section>

      {/* demo */}
      <section
        id="demo"
        className="relative bg-gradient-to-br from-[#f4f9ff] to-white py-20 flex flex-col items-center justify-center"
      >
        {/* Background Grid Images */}
        <img
          className="absolute right-0 opacity-90"
          src="/grid1 1.png"
          alt="Grid Background Right"
        />
        <img
          className="absolute left-0 opacity-90"
          src="/grid1 2.png"
          alt="Grid Background Left"
        />

        {/* Central Circular Image */}
        <div className="flex justify-center items-center w-64 mb-8">
          {/* Inner Image */}
          <img
            src="/123456-removebg-preview.png"
            alt="Central Icon"
            className="z-50"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h6 className="font-semibold text-4xl text-[#0b1928] leading-snug">
            Ready to enhance your <br /> hiring process?
          </h6>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center items-center">
          <a
            href="#request-demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-md border border-blue-600 hover:bg-blue-700 transition"
          >
            ✨ Request A Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 flex flex-row md:flex-col">
          {/* top Section - Logo and Copyright */}

          <div className="flex flex-row justify-between items-center mb-5">
            <div className="flex items-center space-x-2">
              <img src="/recruito_logo.png" alt="Recruito-AI" />
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex space-x-4">
              <span className="text-sm text-gray-700">
                &copy; 2024 Recruito AI. All Rights Reserved.
              </span>
            </div>

            {/* Terms and Privacy Links */}
            <div className="flex space-x-4 text-sm">
              <a href="/terms" className="text-gray-500 hover:text-gray-700">
                Terms
              </a>
              <a href="/privacy" className="text-gray-500 hover:text-gray-700">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
