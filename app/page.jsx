"use client";

import Link from "next/link";

const projects = [
  {
    num: "01",
    name: "Together",
    pic: "/assets/projects/Project1.png",
    question: "Feeling overwhelmed with event planning ?",
    description:
      "Together helps you to manage every details without effortless.",
    bg: "#FFF7F7",
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
    path: "/",
  },
];
export default function Home() {
  return (
    <section className="h-full ">
      <div className="container mx-auto h-full flex flex-col">
        <div className="md:h-[50vh] flex flex-col gap-7 items-center mt-12 md:mt-24 mb-12 text-center">
          <h1>Hello,</h1>
          <h2>I'm Eden Journo Fellous</h2>
          <h2>UX/UI Designer</h2>
          <p>
            a UX/UI Designer focused to blending creativity and functionality to
            deliver intuitive and delightful user experiences.
          </p>
        </div>
        <ul>
          {projects.map((item, index) => {
            return (
              <li
                key={index}
                className="relative mb-8 flex flex-col md:flex-row items-center md:gap-14"
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
                <div className="flex flex-col gap-5 mx-7 md:px-7 py-7 md:py-0 border-b-4 md:border-l-4 md:border-b-0 border-accent md:w-[500px]">
                  <h2>{item.name}</h2>
                  <p>{item.question}</p>
                  <p>{item.description}</p>
                </div>
                <Link href={item.path}>
                  <div className="flex flex-col gap-5 md:pl-7 border-b-4 md:border-l-4 md:border-b-0 border-accent text-nowrap">
                    <p className="font-medium py-7 md:py-14">View Case Study</p>
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
