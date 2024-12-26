import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    num: "01",
    name: "Together",
    pic: "/assets/projects/Project1.png",
    question: "Feeling overwhekmed with event planning ?",
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
                  className={`md:min-w-[40vw] md:max-w-[40vw] w-full flex justify-center p-8 rounded-3xl`}
                >
                  <img
                    src={item.pic}
                    alt="Project image"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-5 mx-7 md:px-7 py-7 md:py-0 border-b-4 md:border-l-4 md:border-b-0 border-accent">
                  <h2>{item.name}</h2>
                  <p>{item.question}</p>
                  <p>{item.description}</p>
                </div>
                <Link href={item.path}>
                  <div className="flex flex-col gap-5 md:pl-7 border-b-4 md:border-l-4 md:border-b-0 border-accent text-nowrap">
                    <p className="font-medium py-7 md:py-14">View Case Study</p>
                  </div>
                </Link>
                {/* <Link
                  href={item.path}
                  className="items-center justify-center xl:gap-4  relative md:flex"
                > */}
                {/* <div className="xl:max-w-[33%] h-24 text-2xl xl:border-l-4 xl:border-b-0 border-b-8 p-8 border-accent">
                    {" "}
                    {item.name}
                  </div>
                  <div className="xl:max-w-[33%] h-24 text-wrap xl:border-l-8 xl:border-b-0 border-b-8 px-8 border-accent">
                    {item.description}{" "}
                  </div>
                  <div className="xl:max-w-[33%] h-24 text-2xl xl:border-l-8 xl:border-b-0 p-8 border-b-8 border-accent">
                    View case study {`->`}
                  </div> */}
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
