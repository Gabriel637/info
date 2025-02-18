import { useState, useEffect, useRef } from "react";
import { useSpring, useTrail, animated } from "@react-spring/web";
import { FaBriefcase, FaArrowRight, FaArrowUp, FaDatabase, FaAws, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";
import { FaReact, FaNodeJs, FaPhp, FaJava } from "react-icons/fa";
import { SiTypescript, SiExpress, SiStyledcomponents, SiTailwindcss, SiReactquery, SiLaravel, SiSequelize } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";

export const stacks = [
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl" title="TypeScript" key="TypeScript" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" title="React" key="React" /> },
  { name: "ReactNative", icon: <TbBrandReactNative className="text-blue-400 text-4xl" title="ReactNative" key="ReactNative" /> },
  { name: "NodeJs", icon: <FaNodeJs className="text-green-500 text-4xl" title="NodeJs" key="NodeJs" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400 text-4xl" title="Express" key="Express" /> },
  { name: "StyledComponents", icon: <SiStyledcomponents className="text-pink-400 text-4xl" title="StyledComponents" key="StyledComponents" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" title="TailwindCSS" key="TailwindCSS" /> },
  { name: "ReactQuery", icon: <SiReactquery className="text-yellow-500 text-4xl" title="ReactQuery" key="ReactQuery" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500 text-4xl" title="Laravel" key="Laravel" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500 text-4xl" title="PHP" key="PHP" /> },
  { name: "Java", icon: <FaJava className="text-orange-600 text-4xl" title="Java" key="Java" /> },
  { name: "SQL", icon: <FaDatabase className="text-blue-600 text-4xl" title="SQL" key="SQL" /> },
  { name: "Sequelize", icon: <SiSequelize className="text-blue-500 text-4xl" title="Sequelize" key="Sequelize" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500 text-4xl" title="AWS" key="AWS" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" title="HTML" key="HTML" /> },
  { name: "CSS", icon: <FaCss3 className="text-blue-500 text-4xl" title="CSS" key="CSS" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" title="JavaScript" key="JavaScript" /> },
  { name: "NextJs", icon: <RiNextjsFill className="text-blue-400 text-4xl" title="NextJs" key="NextJs" /> },
];

const experiences = [
  {
    company: "Grupo Vista",
    role: "Full-Stack Developer Intern",
    period: "2018 - 2019",
    description: "I developed a truck insurance management system to handle policies and claims. The platform allowed users to manage insurance data.",
    stacks: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel']
  },
  {
    company: "ZemoBank ",
    role: "Front-End Developer",
    period: "2019 - 2020",
    description: `I developed a self-registration system for businesses, enabling company onboarding without human intervention and reducing the registration process from one week to a single day. Secure data and document storage were implemented using SQL, ensuring compliance with banking security standards. To enhance user experience, I developed a progressive data persistence system with Redux, allowing users to resume their registration from where they left off. Additionally, I created an intuitive, secure, and high-performance banking portal using ReactJS and Tailwind CSS for account management and configurations.`,
    stacks: ['React', 'TypeScript', 'ReactNative', 'NodeJs', 'CSS', 'StyledComponents']
  },
  {
    company: "CoreBiz",
    role: "Front-End Developer",
    period: "2020 - 2021",
    description: "I was involved in the development of Motorola's e-commerce platform using VTEX, which was successfully launched in over 10 countries across Europe. The project focused on delivering a user-friendly shopping experience.",
    stacks: ['React', 'TypeScript', 'VTEX', 'CSS', 'TailwindCSS']
  },
  {
    company: "EyeMobile",
    role: "Fullstack Developer",
    period: "2021 - 2023",
    description: ` I developed a feature-rich business portal using ReactJS, serving more than 300 clients and handling approximately 15,000 sales per day, enabling businesses to efficiently manage their stores. On the backend, I worked on the development and maintenance of microservices in Node.js, providing real-time data for both the business portal and POS machines, processing thousands of transactions daily. I also implemented daily stock data integration, synchronizing more than 10,000 inventory records between store systems and backend databases. To ensure reliable and scalable data processing, I integrated AWS-based solutions using SQS queues, analytics, and automated scripts. Additionally, I analyzed usage data and business metrics, optimizing performance and improving the user experience through data-driven insights.`,
    stacks: ['React', 'TypeScript', 'NodeJs', 'Express', 'Java', 'TailwindCSS', 'StyledComponents', 'SQL', 'Sequelize', 'ReactQuery',]
  },
  {
    company: "Sanrlei Polini",
    role: "Fullstack Developer",
    period: "2024",
    description: `I developed an EVTL registration system for the civil engineering sector, enabling clients to generate reports in less than an hour, a process that previously took several days. The system was integrated with government data APIs, automating address-based registration and validation to streamline data input. Additionally, I implemented the Google Maps API to create an interactive, editable map, allowing users to visualize and modify location data in real time. The platform was built using ReactJS, Next.js, and Node.js, ensuring a responsive, user-friendly, and efficient experience.`,
    stacks: ['React', 'TypeScript', 'NodeJs', 'Express', 'TailwindCSS', 'StyledComponents', 'ReactQuery',]
  },
  {
    company: "DBC Company",
    role: "Front-End Developer",
    period: "2023 - now",
    description: `Developed micro frontends using ReactJS and Single-SPA, transforming the system into a lighter, modular, and more maintainable architecture, reducing loading time by 60%.
Optimized the processing of thousands of loan proposals, significantly enhancing efficiency—increasing analyst productivity to over 100 proposals per day and reducing analysis time to under 2 minutes.
Built the company's library of reusable components using Styled-Components and Storybook, ensuring consistency and a standardized design across the entire system.
Mentored junior developers, offering technical guidance and support, accelerating their professional growth and enhancing team performance.`,
    stacks: ['React', 'TypeScript', 'NodeJs', 'TailwindCSS', 'StyledComponents', 'Express', 'SQL', 'ReactQuery',]
  },
];

export default function Experience() {
  const lastPosition = experiences.length - 1;
  const [currentIndex, setCurrentIndex] = useState(lastPosition);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const trail = useTrail(experiences.length * 2 - 1, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(10px)",
    config: { tension: 200, friction: 25 },
    delay: 300,
  });

  const fadeContent = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(10px)" },
    config: { tension: 200, friction: 20 },
  });

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <section ref={sectionRef} id="experience" className="flex flex-col items-center justify-center bg-black-900 text-center text-white md:p-12 md:h-screen">
      <h2 className="text-4xl font-bold mb-8">Professional Experience</h2>

      <div className="items-center space-x-4 hidden md:flex">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center">
            <animated.button
              style={trail[index * 2]}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-full border-2 transition transform hover:scale-110 ${currentIndex === index ? "border-blue-500 bg-blue-600" : "border-gray-500 bg-gray-700 hover:bg-gray-600"
                }`}
            >
              <FaBriefcase className="text-white text-2xl" />
            </animated.button>

            {index < experiences.length - 1 && (
              <animated.div
                style={{ ...trail[index * 2 + 1], width: isVisible ? "40px" : "0px", overflow: "hidden" }}
                className="text-gray-500 ml-5 text-xl flex items-center"
              >
                <FaArrowRight />
              </animated.div>
            )}
          </div>
        ))}
      </div>

      <animated.div style={fadeContent} className="bg-gray-800 p-6 mt-8 md:rounded-lg shadow-lg w-full max-w-2xl text-center md:h-[420px] m-4">
        <h3 className="text-2xl font-semibold text-blue-400">{`${experiences[currentIndex].role} at ${experiences[currentIndex].company}`}</h3>
        <p className="text-sm text-gray-300">{experiences[currentIndex].period}</p>
        <p className="mt-4 text-gray-200">{experiences[currentIndex].description}</p>
        <div className="flex gap-4 justify-center mt-8">
          {experiences[currentIndex].stacks.map((stack) => stacks.find((item) => item.name === stack)?.icon)}
        </div>
      </animated.div>

      <FaArrowUp className="md:hidden" />

      <animated.div style={fadeContent} className="bg-gray-800 p-6 mt-8 md:rounded-lg shadow-lg w-full max-w-2xl text-center md:hidden m-4">
        <h3 className="text-2xl font-semibold text-blue-400">{`${experiences[currentIndex - 1].role} at ${experiences[currentIndex - 1].company}`}</h3>
        <p className="text-sm text-gray-300">{experiences[currentIndex - 1].period}</p>
        <p className="mt-4 text-gray-200">{experiences[currentIndex - 1].description}</p>
        <div className="flex gap-4 justify-center mt-8">
          {experiences[currentIndex - 1].stacks.map((stack) => stacks.find((item) => item.name === stack)?.icon)}
        </div>
      </animated.div>

      <FaArrowUp className="md:hidden" />

      <animated.div style={fadeContent} className="bg-gray-800 p-6 mt-8 md:rounded-lg shadow-lg w-full max-w-2xl text-center md:hidden m-4">
        <h3 className="text-2xl font-semibold text-blue-400">{`${experiences[currentIndex - 2].role} at ${experiences[currentIndex - 2].company}`}</h3>
        <p className="text-sm text-gray-300">{experiences[currentIndex - 2].period}</p>
        <p className="mt-4 text-gray-200">{experiences[currentIndex - 2].description}</p>
        <div className="flex gap-4 justify-center mt-8">
          {experiences[currentIndex - 2].stacks.map((stack) => stacks.find((item) => item.name === stack)?.icon)}
        </div>
      </animated.div>

      <div className="hidden md:flex md:mt-14">
        <animated.button
          onClick={scrollToAbout}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition w-12 h-12 flex justify-center items-center"        >
          <RxDoubleArrowUp className="text-white text-2xl" />
        </animated.button>
      </div>

      <div className="flex md:hidden m-4">
        <p className="text-white text-center">More info about my experiences on my Linkedin or Resumé, take a look!</p>
      </div>
    </section>
  );
}
