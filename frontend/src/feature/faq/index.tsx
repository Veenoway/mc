"use client";
import { Button } from "@/components/button";
import { ExtraLargeFont, LargeFont, MediumFont } from "@/components/font";
import { useState } from "react";
import { faqs } from "./constant";

export const FAQ = () => {
  const [elementHovered, setElementHovered] = useState(0);
  const [showAnswerOnElement, setShowAnswerOnElement] = useState(0);
  const [activeSection, setActiveSection] = useState("basic");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleMouseEnter = (i: number) => {
    setElementHovered(i + 1);
    setShowAnswerOnElement(i + 1);
  };

  const handleMouseLeave = () => {
    setElementHovered(0);
    setShowAnswerOnElement(0);
  };

  const handleButtonClick = (section: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 400);
  };

  const activeFaq = faqs[activeSection];

  return (
    <div
      className="py-[50px] h-auto min-h-screen pt-[100px]"
      style={{
        backgroundImage:
          "radial-gradient(at right bottom, #0d0021, #200052 80%, #200052)",
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col mx-auto">
        <ExtraLargeFont className="mb-5">
          Frequently Asked Questions
        </ExtraLargeFont>
        <div className="flex items-center">
          <Button
            className={`mr-2.5 ${
              activeSection === "basic" ? "opacity-100" : "opacity-60"
            } transition-opacity duration-300 ease-in-out`}
            onClick={() => handleButtonClick("basic")}
          >
            Basic Questions
          </Button>
          <Button
            className={`${
              activeSection === "tech" ? "opacity-100" : "opacity-60"
            } transition-opacity duration-300 ease-in-out`}
            onClick={() => handleButtonClick("tech")}
          >
            Tech Questions
          </Button>
        </div>
        {Object.keys(faqs).map((section) => (
          <div
            key={section}
            className={`transition-opacity ${
              activeSection === section && !isTransitioning
                ? "opacity-100"
                : "opacity-0"
            } duration-500 ease-in-out flex flex-col `}
          >
            {(activeSection === section ? activeFaq : []).map((faq, i) => {
              const answer = faq.answer
                .replace(/===/g, "<br>")
                .replace(/(?<!\d)(1\.|2\.)/g, "<br>$1");
              return (
                <div
                  key={faq.question}
                  className={`my-10`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <div className="mb-2.5 w-fit">
                    <LargeFont className="mb-2.5">{faq.question}</LargeFont>
                    <div
                      className={`h-0.5 ${
                        elementHovered === i + 1 ? "w-full" : "w-0"
                      } bg-berry rounded transition-all duration-300 ease-in-out`}
                    />
                  </div>
                  <MediumFont className="text-80 font-normal">
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                  </MediumFont>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
