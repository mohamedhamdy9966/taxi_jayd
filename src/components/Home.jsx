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
        {/* Title Section */}
        <div className="mb-10 px-4 text-center">
          <p className="text-base sm:text-lg md:text-2xl font-semibold text-[#3E4757]">
            See How We Create An Autonomous{" "}
            <span className="underline text-blue-600">AI Agent</span>
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full max-w-5xl flex items-center justify-center px-4">
          {/* Main Dashboard Image */}
          <img
            src="/Group 4.png"
            alt="Dashboard example"
            className="shadow-lg rounded-md w-full max-w-[90%] md:max-w-[80%] z-0"
          />

          {/* Decorative Image 1 (Customers) */}
          <img
            src="/Customers 1.png"
            alt="Customers"
            className="z-10 absolute -right-6 top-8 w-[20%] sm:w-[15%] md:w-[12%] md:-right-20 md:top-20"
          />

          {/* Decorative Image 2 (Featured Product) */}
          <img
            src="/Featured Product 1.png"
            alt="Featured Product"
            className="z-10 absolute -left-6 bottom-8 w-[20%] sm:w-[15%] md:w-[12%] md:-left-24 md:bottom-20"
          />
        </div>
      </section>

      {/* companies logos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-gray-600 text-lg font-medium mb-6">
            Trusted By The World Leading Organizations
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center">
            <img
              src="/OGLIVY.png"
              alt="Ogilvy"
              className="h-10 w-auto mx-auto opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/intys.png"
              alt="intys"
              className="h-10 w-auto mx-auto opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/linkedin.png"
              alt="LinkedIn"
              className="h-10 w-auto mx-auto opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/OGLIVY.png"
              alt="Ogilvy"
              className="h-10 w-auto mx-auto border rounded-sm p-1 transition"
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
        <div className="flex flex-col items-center justify-center mb-14 px-4">
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium shadow-md border border-blue-600 hover:bg-blue-100 transition mb-6 text-sm sm:text-base md:px-8 md:py-3">
            Features
          </button>
          <div className="text-center relative">
            <h6 className="font-semibold text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#0b1928] leading-snug">
              Streamline your recruitment with{" "}
              <br className="hidden sm:block" /> our advanced features
            </h6>
            <img
              src="/Group 5.png"
              className="absolute -right-4 top-0 hidden lg:block"
            />
            <img
              src="/Group 5.png"
              className="absolute -left-4 bottom-0 hidden lg:block"
            />
          </div>
        </div>

        {/* Features Sections */}
        {[
          {
            title: "Candidate Sourcing & Job Posting",
            description:
              "Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed.",
            image: [{ src: "/Group 8.png" }],
            additionalImages: [
              {
                src: "/solar_verified-check-bold.png",
                position: "top-12 left-20 sm:left-40",
                zIndex: "z-30",
              },
              {
                src: "/Group 10.png",
                position: "right-0.5 top-11",
                zIndex: "z-9",
              },
              {
                src: "/Group 9.png",
                position: "left-0.5 top-12",
                zIndex: "z-9",
              },
            ],
            reverse: false,
          },
          {
            title: "Automated Resume Screening & Filtering",
            description:
              "Our AI instantly sorts and prioritizes resumes, highlighting only the strongest matches and discarding unqualified applicants.",
            image: [
              { src: "/Group 13.png" },
              { src: "/Group 12.png" },
              { src: "/Group 11.png" },
            ],
            additionalImages: [
              {
                src: "/solar_magnifer-outline.png",
                position: "bottom-0 right-0",
              },
            ],
            reverse: true,
          },
          {
            title: "Online Assessment",
            description:
              "Candidates complete a quick skill or behavioral test to validate their capabilities. This process is seamlessly integrated and fully automated.",
            image: [{ src: "/Group 14.png" }],
            reverse: false,
          },
          {
            title: "AI Video Interviews",
            description:
              "An AI-driven virtual interviewer conducts dynamic, adaptive interviews, capturing both technical insights and soft skills. Everything is entirely hands-free.",
            image: [{ src: "/image.png", mx: "9" }],
            additionalImages: [
              {
                src: "/Group 15.png",
                position: "bottom-0 -right-16",
                zIndex: "z-50",
              },
            ],
            reverse: true,
          },
          {
            title: "Final Shortlist for the Line Manager",
            description:
              "Recruito presents a curated list of the top performers, complete with interview recordings and evaluations, so you can make a swift, confident hiring decision.",
            image: [
              { src: "/Group 16.png" },
              { src: "/Group 17.png" },
              { src: "/Group 18.png" },
            ],
            additionalImages: [
              {
                src: "/public/Gabrun-Minutes-BG 1.png",
                position: "top-0 right-0",
              },
            ],
            reverse: false,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 md:px-10 ${
              feature.reverse ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            {/* Text Section */}
            <div
              className={`flex flex-col justify-center w-full md:w-1/2 mb-6 md:mb-0 ${
                feature.reverse
                  ? "text-center md:text-right"
                  : "text-center md:text-left"
              }`}
            >
              <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-[#0b1928] leading-snug mb-4">
                {feature.title}
              </h5>
              <p className="text-[#3E4757] text-sm sm:text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Image Section */}
            <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 border border-gray-200 rounded-lg p-4 sm:p-6">
              {feature.image.map((img, dex) => (
                <img
                  key={dex}
                  src={img.src}
                  alt={img.src}
                  className={`relative z-${10 - dex} ${
                    img.mx ? `mx-${img.mx}` : ""
                  } opacity-${100 - dex * 10}`}
                />
              ))}
              {feature.additionalImages &&
                feature.additionalImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    className={`absolute ${img.position} ${img.zIndex} opacity-90`}
                  />
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Benefits */}
      <section
        id="pricing"
        className="bg-[#0B1928] py-20 flex flex-col items-center justify-center relative px-4 sm:px-10"
      >
        {/* Background Images */}
        <img
          src="/Gabrun-Hero-BG-5 1.png"
          className="absolute bottom-0 left-0 w-1/3 sm:w-auto"
          alt="Background Left"
        />
        <img
          src="/Gabrun-Hero-BG-5 2 (1).png"
          className="absolute bottom-0 right-0 w-1/3 sm:w-auto"
          alt="Background Right"
        />

        {/* Benefits Header Section */}
        <div className="flex flex-col items-center justify-center mb-14">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium shadow-md border border-blue-600 hover:bg-blue-100 transition mb-6">
            Benefits
          </button>
          <div className="text-center px-4">
            <h4 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-white leading-snug">
              Unlock the advantages of using <br /> Recruito AI for your hiring
              needs.
            </h4>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center border border-white rounded-xl p-6">
            <div className="p-5 border border-white rounded-xl mb-4">
              <img
                src="/streamline_ai-cloud-spark.png"
                alt="Automate Processes"
              />
            </div>
            <h3 className="text-white font-semibold text-center mb-4">
              Automate Processes
            </h3>
            <p className="text-center text-[#808080] mb-4">
              Let Recruito handle resume screening, scheduling, and interviews
              so you can focus on strategic decisions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center border border-white rounded-xl p-6">
            <div className="p-5 border border-white rounded-xl mb-4">
              <img
                src="/streamline_ai-edit-spark.png"
                alt="Provide Instant Information"
              />
            </div>
            <h3 className="text-white font-semibold text-center mb-4">
              Provide Instant Information
            </h3>
            <p className="text-center text-[#808080] mb-4">
              Quickly access relevant candidate data, ensuring no talent is
              overlooked in your search.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center border border-white rounded-xl p-6">
            <div className="p-5 border border-white rounded-xl mb-4">
              <img
                src="/streamline_ai-generate-portrait-image-spark.png"
                alt="Make Data-Driven Decisions"
              />
            </div>
            <h3 className="text-white font-semibold text-center mb-4">
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
        className="bg-gradient-to-br from-[#f4f9ff] to-white py-20 flex flex-col items-center justify-center px-4"
      >
        {/* FAQ Header */}
        <div className="flex flex-col items-center justify-center mb-14">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium shadow-md border border-blue-600 hover:bg-blue-100 transition mb-6">
            FAQS
          </button>
        </div>

        {/* FAQ Container */}
        <div className="max-w-3xl mx-auto p-5 border border-gray-300 rounded-md shadow-md w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-b-0">
              {/* Question Button */}
              <button
                className="w-full text-left py-3 px-4 font-semibold flex justify-between items-center text-gray-700 hover:text-blue-600 focus:outline-none"
                onClick={() => toggle(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "▲" : "▼"}</span>
              </button>

              {/* Answer Section */}
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

        <div className="mb-4 w-full p-2">
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
          className="absolute right-0 top-0 w-1/3 max-w-xs opacity-90 hidden lg:block"
          src="/grid1 1.png"
          alt="Grid Background Right"
        />
        <img
          className="absolute left-0 top-0 w-1/3 max-w-xs opacity-90 hidden lg:block"
          src="/grid1 2.png"
          alt="Grid Background Left"
        />

        {/* Central Circular Image */}
        <div className="flex justify-center items-center w-48 md:w-64 lg:w-72 mb-8">
          <img
            src="/123456-removebg-preview.png"
            alt="Central Icon"
            className="z-50"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-8 px-4">
          <h6 className="font-semibold text-2xl md:text-4xl lg:text-5xl text-[#0b1928] leading-snug">
            Ready to enhance your <br /> hiring process?
          </h6>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center items-center">
          <a
            href="#request-demo"
            className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium shadow-md border border-blue-600 hover:bg-blue-700 transition text-sm md:text-base lg:text-lg"
          >
            ✨ Request A Demo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          {/* Top Section: Logo and Social Icons */}
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 space-y-4 md:space-y-0">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <img src="/recruito_logo.png" alt="Recruito-AI" className="h-8" />
            </div>

            {/* Social Media Links */}
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

          {/* Bottom Section: Copyright and Links */}
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <span className="text-sm text-gray-700 text-center md:text-left">
              &copy; 2024 Recruito AI. All Rights Reserved.
            </span>

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
