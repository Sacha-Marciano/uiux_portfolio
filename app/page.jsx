"use client";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

const projects = [
  {
    num: "01",
    name: "Together",
    pic: "/assets/projects/Project1.png",
    question: "Feeling overwhelmed with event planning ?",
    description:
      "Together helps you to manage every details without effortless.",
    bg: "#FFF7F7",
    border: "#FB0160",
    path: "/project1",
  },
  {
    num: "02",
    name: "MoneyMe",
    pic: "/assets/projects/Project2.png",
    question:
      "Struggling to keep track of shared expenses with friends and family?",
    description:
      "MoneyMe manage shared expenses and group accounts for any occasion with ease",
    bg: "#F8F4FFD9",
    border: "#662AB2",
    path: "/",
  },
];
export default function Home() {
  return (
    <section className="h-full p-4 md:p-8 ">
      <div className="container mx-auto h-full flex flex-col">
        <div className="flex flex-col gap-1 md:gap-7 items-center  text-center mb-16 md:mb-36">
          <h1 className="text-lg md:text-2xl font-bold">Hello,</h1>
          <h2 className="text-lg md:text-2xl font-bold">
            I'm Eden Journo Fellous
          </h2>
          <h2 className="text-lg md:text-2xl font-bold">UX/UI Designer</h2>
          <p className=" text-sm md:text-lg mt-4 md:mt-0">
            a UX/UI Designer focused to blending creativity and functionality to
            deliver intuitive and delightful user experiences.
          </p>
        </div>
        <ul>
          {projects.map((item, index) => {
            return (
              <li
                key={index}
                className="relative mb-8 flex flex-col md:flex-row items-center "
              >
                <div
                  style={{ backgroundColor: item.bg }}
                  className={`md:min-w-[30vw] md:max-w-[30vw] md:min-h-[40vh] md:max-h-[40vh] w-full flex justify-center p-8 rounded-3xl`}
                >
                  <img
                    src={item.pic}
                    alt="Project image"
                    className="object-contain"
                  />
                </div>
                <div
                  style={{ borderColor: item.border }}
                  className="flex flex-col md:gap-5 mx-7 md:px-7 py-7 md:py-0 border-y-4 md:border-x-4 md:border-y-0 md:w-[500px]"
                >
                  <h2 className="text-xl font-semibold mb-2 md:text-2xl ">
                    {item.name}
                  </h2>
                  <p className="text-xs md:text-sm">{item.question}</p>
                  <p className="text-xs md:text-sm">{item.description}</p>
                </div>
                <Link href={item.path}>
                  <div
                    style={{ borderColor: item.border }}
                    className="flex flex-col gap-5 text-nowrap"
                  >
                    <p className="font-medium py-7 md:py-14 flex">
                      View Case Study <ChevronRight />
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
