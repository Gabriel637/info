import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaFilePdf } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiStyledcomponents, SiReactquery } from "react-icons/si";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useSpring, animated } from "@react-spring/web";
import { RiNextjsFill } from "react-icons/ri";
import { useReward } from 'react-rewards';

export default function About() {
  const { reward } = useReward('aboutId', 'confetti');

  const scrollToPresentation = () => {
    reward();
    setTimeout(() => {
      document.getElementById("presentation")?.scrollIntoView({ behavior: "smooth" });
    }, 1000)
  };

  const pulse = useSpring({
    loop: { reverse: true },
    to: { scale: 1.2 },
    from: { scale: 1 },
    config: { tension: 200, friction: 12 }
  });

  return (
    <section id="about" className="flex flex-col items-center justify-evenly bg-black-900 text-white mt-[150px] md:p-12 md:h-screen md:mt-0">
      <div className="flex w-full">
        <div className="text-center md:text-left md:w-1/2">

          <h1 className="text-4xl font-bold">Hello, I&apos;m <span className="text-blue-400">Gabriel Barbosa</span></h1>
          <p className="mt-4 text-lg text-gray-300">
            A full-stack developer with a passion for front-end solutions. Over the years, I&apos;ve worked with technologies like React, TypeScript, and Node.js to create smooth and user-friendly experiences. From banking to e-commerce to sales platforms, I&apos;ve had the chance to contribute to a variety of projects, always focusing on performance and usability.
          </p>
          <p className="mt-4 text-lg text-gray-300">
            If you&apos;re interested in chatting about my skills or how I can help with your projects, feel free to reach out!
          </p>

          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <FaReact className="text-blue-400 text-4xl" title="React" />
            <SiTypescript className="text-blue-500 text-4xl" title="TypeScript" />
            <RiNextjsFill className="text-blue-500 text-4xl" title="NextJs" />
            <FaNodeJs className="text-green-500 text-4xl" title="Node.js" />
            <SiStyledcomponents className="text-green-400 text-4xl" title="StyledComponents" />
            <SiReactquery className="text-yellow-500 text-4xl" title="ReactQuery" />
            <SiTailwindcss className="text-cyan-400 text-4xl" title="TailwindCSS" />
          </div>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/gabriel-b-4ba810124/" target="_blank" className="flex items-center gap-2 bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              <FaLinkedin className="text-white text-xl" /> LinkedIn
            </a>
            <a href="https://github.com/Gabriel637" target="_blank" className="flex items-center gap-2 bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-600 transition">
              <FaGithub className="text-white text-xl" /> GitHub
            </a>
            <a href={"/info/Gabriel_Barbosa_Resume.pdf"} download="Gabriel_Barbosa_Resume" className="flex items-center gap-2 bg-green-700 px-5 py-2 rounded-lg hover:bg-green-600 transition">
              <FaFilePdf className="text-white text-xl" /> Resume
            </a>
          </div>

        </div>
      </div>
      <div className="hidden md:flex">
        <animated.button
          id="aboutId"
          style={pulse}
          onClick={scrollToPresentation}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition w-12 h-12 flex justify-center items-center"        >
          <RxDoubleArrowDown className="text-white text-2xl" />
        </animated.button>
      </div>
    </section>
  );
}
