import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { RxDoubleArrowDown } from "react-icons/rx";

const items = [
  { text: "a software engineer", animation: "https://lottie.host/9bb19425-ba01-4efd-b5fa-fa4fe36b3829/0eRneeSbkZ.lottie" },
  { text: "a problem solver", animation: "https://lottie.host/16c09511-09d0-48ef-bf7e-e8c0e5d45df8/iYpCh6NKB4.lottie" },
  { text: "a creative thinker", animation: "https://lottie.host/bfda1567-981c-41b1-8429-56af9a2aee7d/Cm2LKMG21n.lottie" },
  { text: "a continuous learner", animation: "https://lottie.host/8740ec58-149c-4c10-a326-756c57fb0a7e/sQif3vrMU7.lottie" },
];

export default function Presentation() {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typingPhase, setTypingPhase] = useState<"typing" | "deleting">("typing");

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  const pulse = useSpring({
    loop: { reverse: true },
    to: { scale: 1.2 },
    from: { scale: 1 },
    config: { tension: 200, friction: 12 }
  });

  useEffect(() => {
    const currentText = items[index].text;
    if (typingPhase === "typing") {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentText[displayedText.length]);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setTypingPhase("deleting"), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIndex((prev) => (prev + 1) % items.length);
        setTypingPhase("typing");
      }
    }
  }, [displayedText, typingPhase, index]);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <section id="presentation">
      <div className="flex flex-col justify-center bg-black-900 text-white items-center md:h-screen">
        <div className="flex flex-col md:flex-row w-full p-12 text-center justify-evenly h-screen md:h-fit md:items-center md:text-left">
          <div className="w-full h-[100px] md:h-fit md:w-1/2 items-center">
            <h1 className="text-4xl font-bold">
              I am <animated.span style={fadeIn}>{displayedText}</animated.span>
            </h1>
          </div>

          <div className="w-full h-1/2 md:w-1/2 flex justify-center items-center">
            <div className="bg-white rounded-3xl h-[350px] w-full md:h-[400px]">
              <DotLottieReact
                src={items[index].animation}
                loop
                autoplay
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <animated.button
            style={pulse}
            id="presentationId"
            onClick={scrollToExperience}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition w-12 h-12 flex justify-center items-center"        >
            <RxDoubleArrowDown className="text-white text-2xl" />
          </animated.button>
        </div>
      </div>
    </section>
  );
}
