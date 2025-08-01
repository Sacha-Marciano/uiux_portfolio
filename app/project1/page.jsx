import DoughnutChart from "@/components/DoughnutChart";

const Project1 = () => {
  return (
    <section className="container relative">
      {/* Frame 1 - Title */}
      <div className="md:h-[33%] md:flex md:justify-end">
        <div className=" md:absolute text-center top-5 lg:top-10 left-0">
          <h1 className="text-2xl lg:text-4xl bg-primary text-transparent bg-clip-text mb-2 lg:mb-8 font-medium">
            Together
          </h1>
          <p className="text-xs">
            The app that make hosting events stress-free by bringing everyone
            <br></br>
            together to plan, organize and contribute.
          </p>
        </div>
        <img src={"/assets/project1/Frame1.png"} />
      </div>
      {/* Frame 1 - Description */}
      <div className="flex flex-col md:flex-row justify-center text-center md:items-center py-4 md:pt-20">
        <div className="mx-auto p-3 md:px-12 border-b-4 md:border-l-4 md:border-b-0 border-[#FB0160] md:h-[120px] mb-5 md:mb-0 lg:mx-12">
          <h2 className="font-extrabold md:w-[20%] mb-3 md:mb-7 text-xl">
            ROLE
          </h2>
          <p>UX/UI Designer</p>
        </div>
        <div className="mx-auto p-3 md:px-12 border-b-4 md:border-l-4 md:border-b-0 border-[#FB0160] md:h-[120px] mb-5 md:mb-0 lg:mx-12">
          <h2 className="font-extrabold md:w-[20%] mb-3 md:mb-7 text-xl">
            WHAT
          </h2>
          <p className="md:text-left ">Final Project</p>
          <p>Netcraft Academy</p>
        </div>
        <div className="mx-auto p-3 md:px-12 border-b-4 md:border-l-4 md:border-b-0 border-[#FB0160] md:h-[120px] mb-5 md:mb-0 lg:mx-12">
          <h2 className="font-extrabold md:w-[20%] mb-3 md:mb-7 text-xl">
            WHEN
          </h2>
          <p className="md:text-left">2024</p>
        </div>
      </div>
      {/* Frame 1 - Overview */}
      <div className="flex flex-col md:h-[33vh] justify-center items-center text-center px-6 mb-6">
        <h2 className="mb-4 md:mb-8 md:mt-10 font-medium text-2xl">Overview</h2>
        <p className="text-left">
          You've always wanted to host a perfect event , but the effort involved
          can feel <strong>time-consuming</strong> and{" "}
          <strong>complicated</strong>. <br></br> Together helps you streamline
          event planning by <strong>connecting participants</strong> to share
          tasks and information effortlessly.<br></br> With everyone working
          together, <strong>planning becomes smoother</strong> and more{" "}
          <strong>enjoyable</strong> for everyone involved.
        </p>
      </div>
      {/* Frame 2 - Problem */}
      <div className="container h-full px-10 md:px-20 md:pr-56 py-10 md:py-20 bg-accent-secondary relative ">
        {/* title and description 1 */}
        <div className="h-full w-full">
          <h2 className="bg-primary text-transparent bg-clip-text pb-4 md:border-b-2 border-black/50 font-medium text-2xl">
            Problem
          </h2>
          <p className="mb-6 md:mb-0 md:relative md:top-16">
            Organizing a private event can be overwhelming ,especially when it
            comes to organizing details , managing tasks , tracking RSVPs .
            <strong>The process often becomes chaotic and disorganized</strong>{" "}
            , leading to confusion and last-minute stress. Without a streamlined
            solution, coordinating details among friends and family can detract
            from the enjoyment of the event.
          </p>
        </div>
        <img
          src={"/assets/project1/Frame2.png"}
          alt="Problem icon"
          className="h-[40%] absolute md:top-24 md:right-10"
        />
      </div>
      {/* Frame 2 - Solution */}
      <div className="container h-full px-10 md:px-20 py-10 md:py-20 bg-accent-secondary ">
        <div className="md:flex mb-10">
          <img
            src={"/assets/project1/Frame2_1.png"}
            alt="Solution icon"
            className="object-contain max-h-[40%]"
          />
          <h2 className="bg-primary text-transparent bg-clip-text md:border-b-2 border-black/50 font-medium w-[100%] md:flex justify-end items-end pt-10 md:py-10 px-20 text-2xl">
            Solution
          </h2>
        </div>
        <p className="mb-10 ">
          Together revolutionizes private event planning by streamlining
          organization and enhancing coordination.<br></br> Our app provides:{" "}
        </p>
        {/* Solutions */}
        <div className="flex flex-col gap-6">
          {/* Solution 1  */}
          <div className="flex gap-6">
            <img
              src={"/assets/ui/Check.png"}
              alt="Check icon"
              className="object-contain"
            ></img>
            <p>
              <strong> RSVP tracking </strong> so you always know who’s
              attending.
            </p>
          </div>
          {/* Solution 2  */}
          <div className="flex gap-6">
            <img
              src={"/assets/ui/Check.png"}
              alt="Check icon"
              className="object-contain"
            ></img>
            <p>
              <strong>Easy task management </strong> with the option to select
              from pre-made lists or create new tasks to assign to guests.
            </p>
          </div>
          {/* Solution 3 */}
          <div className="flex gap-6">
            <img
              src={"/assets/ui/Check.png"}
              alt="Check icon"
              className="object-contain"
            ></img>
            <p>
              <strong>Optional reminders </strong> to ensure no tasks or details
              are forgotten.
            </p>
          </div>
          {/* Solution 4  */}
          <div className="flex gap-6">
            <img
              src={"/assets/ui/Check.png"}
              alt="Check icon"
              className="object-contain"
            ></img>
            <p>
              <strong>Final event schedule </strong> showing what each guest is
              bringing and when.
            </p>
          </div>
        </div>
      </div>
      {/* Frame 3 - Competitors */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="mt-12 md:mt-28 mb-16"> Competitors Analysis</h2>
        <p className="max-w-[1250px] px-10 md:px-28">
          The competitive analysis revealed significant shortcomings in current
          personal event planning apps. Evite focuses on digital invitations and
          RSVP tracking but lacks tools for task management or guest
          coordination. Pro Party Planner offers comprehensive features like
          timelines and task delegation but overwhelms users with its
          complexity, making it less suitable for small gatherings. Bring It
          simplifies item tracking for group events but fails to integrate
          essential features like reminders or a unified schedule. This gap
          often leads to <strong>frustration</strong> and{" "}
          <strong>missed details</strong>
        </p>
        {/* competitors logos */}
        <div className="flex gap-16 items-start justify-between my-24 px-10 md:px-0">
          <div className=" flex flex-col items-center justify-center">
            <img
              src={"/assets/project1/competitors/Competitors1.png"}
              className="h-[50%]"
            />
            <p className="text-center mt-5">Bring it</p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <img
              src={"/assets/project1/competitors/Competitors2.png"}
              className="h-[50%]"
            />
            <p className="text-center mt-5">Evite</p>
          </div>
          <div className=" flex flex-col items-center justify-center">
            <img
              src={"/assets/project1/competitors/Competitors3.png"}
              className="h-[50%]"
            />
            <p className="text-center mt-5">Pro Party Planner</p>
          </div>
        </div>
      </div>
      {/* Frame 4 - User Research */}
      <div className="px-10 md:pt-16 md:pb-14 md:pr-52 mb-6 md:mb-0 ">
        <h2 className="bg-primary text-transparent bg-clip-text font-medium mb-14">
          User Research
        </h2>
        <p>
          To understand the challenges of organizing private events, I conducted
          interviews and distributed a questionnaire. These methods revealed
          common pain points and preferences among users .
        </p>
      </div>
      {/* Doughnut charts */}
      <div className="md:grid grid-cols-3 mb-24">
        {/* Chart 1 */}
        <div className="flex flex-col items-center text-center px-5 mb-10">
          <p className="font-bold">
            When you are hosting,<br></br> what are the most challenging part ?
          </p>
          <div className="md:border-r-black-100 md:border-r-2 w-[100%] px-28 py-10 flex justify-center">
            <DoughnutChart data1={57} data2={43} />
          </div>
          <div>
            <p className="text-[#FB0160] mb-6">
              57% of the users struggle with completing task on time{" "}
            </p>
            <p className="text-[#FB016050]">
              43% of the users find tracking RSVPs most difficult
            </p>
          </div>
        </div>
        {/* Chart 2 */}
        <div className="flex flex-col items-center text-center px-5 mb-10">
          <p className="font-bold px-3">
            When you are hosting, who helps you with planning and organizing
            private events?
          </p>
          <div className="md:border-r-black-100 md:border-r-2 w-[100%] px-28 flex justify-center py-10">
            {" "}
            <DoughnutChart data1={90} data2={10} />
          </div>
          <div>
            <p className="text-[#FB0160] mb-6">
              90% of the users are helped by family and friends
            </p>
            <p className="text-[#FB016050]">
              10% of the users are helped by professional providers/organizers
            </p>
          </div>
        </div>
        {/* Chart 3 */}
        <div className="flex flex-col items-center text-center px-5 mb-10">
          <p className="font-bold">
            As an organizer/guest,how do you ensure you don’t forget important
            details about the event?
          </p>
          <div className="md:border-r-black-100 md:border-r-2 w-[100%] px-28 flex justify-center py-10">
            <DoughnutChart data1={70} data2={30} />
          </div>
          <div className="px-2">
            <p className="text-[#FB0160]">
              70% of the users use WhatsApp groups (but messages are hard to
              track)
            </p>
            <p className="text-[#FB016050]">
              30% of the users are using phone's notes app
            </p>
          </div>
        </div>
      </div>
      {/* Frame 5 - Personas */}
      <div className="flex flex-col items-center">
        <h2 className="mb-7 md:mb-11">Personas</h2>
        <p className="mb-7 md:mb-16 text-center">
          This research helped me to establish two main personas, each
          highlighting <br></br> unique aspects of the event planning
          experience.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[12px] object-contain mb-14 md:mb-28 px-4">
          <img
            src={"/assets/project1/personas/Personas1.png"}
            alt="Personas 1"
            // width={"50%"}
            className="lg:max-w-[50%]"
          />
          <img
            src={"/assets/project1/personas/Personas2.png"}
            alt="Personas 2"
            // width={"50%"}
            className="lg:max-w-[50%]"
          />
        </div>
      </div>
      {/* Frame 6  - Userflow*/}
      <div>
        <img src={"/assets/project1/Frame6.png"} alt="Userflow diagram" />
      </div>
      {/* Frame 7 - Key Features */}
      <div className="pt-8  md:pt-16 pb-16 md:pb-32 flex flex-col items-center">
        <h2 className="font-medium">Key Features</h2>
        <div className="pr-10 md:w-full flex flex-col md:flex-row items-center md:justify-around">
          {/* Icon 1 */}
          <div className="text-center w-full md:w-[20%] flex items-center md:flex-col">
            <div className="object-contain flex flex-col items-center p-2 md:p-16 md:border-b-[#FB0160] md:border-b-4">
              <img
                src={"/assets/project1/features/Feature1.png"}
                alt="Feature icon"
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-bold my-7">My Tasks</h2>
              <p>Keep track of personal responsibilities</p>
            </div>
          </div>
          {/* Icon 2 */}
          <div className="text-center w-full md:w-[20%] flex items-center md:flex-col">
            <div className="object-contain flex flex-col items-center p-4 box-border md:p-16 md:border-b-[#FB0160] md:border-b-4">
              <img
                src={"/assets/project1/features/Feature2.png"}
                alt="Feature icon"
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-bold my-7">Reminders</h2>
              <p>Send reminders to guests about their assigned tasks</p>
            </div>
          </div>
          {/* Icon 3 */}
          <div className="text-center w-full md:w-[20%] flex items-center md:flex-col">
            <div className="object-contain flex flex-col items-center p-4 box-border md:p-16 md:border-b-[#FB0160] md:border-b-4">
              <img
                src={"/assets/project1/features/Feature3.png"}
                alt="Feature icon"
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-xl md:text-3xl font-bold my-7">
                Event Schedule
              </h2>
              <p>Track the event timeline and guest contributions</p>
            </div>
          </div>
        </div>
      </div>
      {/* Prototype */}
      {/* Frame 8 - Events */}
      <div className="flex flex-col items-center p-10 md:p-0">
        <h2 className="bg-primary text-transparent bg-clip-text font-medium mb-14">
          Prototype
        </h2>
        <div className="md:flex md:h-[80vh] mb-16">
          <div className="md:py-16 md:pl-12">
            <h2 className="font-medium mb-5 md:mb-10">Events</h2>
            <p className="md:max-w-[70%] mb-5">
              The events page provides a<strong> centralized view </strong>of
              both personal events and those you're invited to. Effortlessly
              track who is hosting and see the list of attendees , whether
              they’ve confirmed or declined.
            </p>
          </div>
          <img
            src={"/assets/project1/prototype/Prototype1.png"}
            alt="Prototype Image"
            height={"80%"}
            className="object-contain"
          />
        </div>
      </div>
      {/* Frame 9 - Create a new event */}
      <div className="flex flex-col md:flex-row md:h-[80vh] mb-16 justify-between p-10 md:p-0">
        <img
          src={"/assets/project1/prototype/Prototype1.png"}
          alt="Protorype Image"
          height={"80%"}
          className="object-contain md:ml-10 order-last md:order-none"
        />
        <div className="md:py-10 md:pl-12">
          <h2 className="font-medium mb-5 md:mb-10">Create a new event</h2>
          <p className="md:max-w-[70%] mb-5 md:mb-20">
            To get started, create a new event by following these easy steps,
            ensuring all the important information is set.{" "}
          </p>
          {/* Step 1 */}
          <div className="flex gap-6 mb-10">
            <h2 className="bg-primary text-transparent bg-clip-text font-medium">
              1
            </h2>
            <div>
              <h2 className="font-medium">First Step</h2>
              <p>Tap on the button “+” (Create a new event)</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex gap-6 mb-10">
            <h2 className="bg-primary text-transparent bg-clip-text font-medium">
              2
            </h2>
            <div>
              <h2 className="font-medium">Second Step</h2>
              <p>Enter relevent event details</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex gap-6 mb-5">
            <h2 className="bg-primary text-transparent bg-clip-text font-medium">
              3
            </h2>
            <div>
              <h2 className="font-medium">Third Step</h2>
              <p>Invite Guest via Whatsapp</p>
            </div>
          </div>
        </div>
      </div>
      {/* Frame 10 - Event Page */}
      <div className="md:flex md:h-[80vh] mb-16 p-10 md:p-0">
        <div className="md:py-16 md:pl-12 md:flex md:flex-col">
          <h2 className="font-medium mb-10">Event Page</h2>
          <p className="md:max-w-[70%]">
            The “Event Page” offers a <strong> comprehensive snapshot </strong>{" "}
            of everything needed for the event, providing access to key details
            and helping organizers manage their responsibilities smoothly."
          </p>
          {/* Arrows */}
          <div className="self-end md:pr-6 md:pt-12 md:max-w-[445px]">
            {/* Arrow 1 */}
            <div className="flex items-center justify-end gap-6 mt-5 md:mt-0 text-center md:text-start border-accent border-2 rounded-lg md:border-0">
              <p>Event Details (Date , Time , Location and RSVP’s) </p>
              <div className="text-5xl bg-primary text-transparent bg-clip-text hidden md:flex">
                &#8594;
              </div>
            </div>
            {/* Arrow 2 */}
            <div className="flex items-center justify-end gap-6 mt-5 md:mt-12 text-center md:text-start  border-accent border-2 rounded-lg md:border-0">
              <p>
                Pre-set task list divided into categories, enabling the{" "}
                organizer to assign tasks to guests{" "}
              </p>
              <div className="text-5xl bg-primary text-transparent bg-clip-text hidden md:flex">
                &#8594;
              </div>
            </div>
            {/* Arrow 3 */}
            <div className="flex items-center justify-end gap-6 mt-5 md:mt-12 mb-7 md:mb-0 text-center md:text-start  border-accent border-2 rounded-lg md:border-0">
              <p>
                “My Task” section helps the organizer stay focused on their
                personal responsibilities{" "}
              </p>
              <div className="text-5xl bg-primary text-transparent bg-clip-text hidden md:flex">
                &#8594;
              </div>
            </div>
          </div>
        </div>
        <img
          src={"/assets/project1/prototype/Prototype3.png"}
          alt="Protorype Image"
          height={"80%"}
          className="object-contain mr-10"
        />
      </div>
      {/* Frame 11 - Task List */}
      <div className="flex flex-col md:flex-row md:h-[80vh] md:mb-16 w-full justify-between relative p-10 md:p-0">
        <img
          src={"/assets/project1/prototype/Prototype3.png"}
          alt="Prototype Image"
          className="object-contain md:ml-10 md:relative md:bottom-2 hidden md:flex"
        />
        <img
          src={"/assets/project1/prototype/Prototype4.png"}
          alt="Prototype Image"
          className="object-contain relative md:h-[80%] md:self-end md:right-14"
        />
        <div className="md:py-16 md:pl-12 order-first md:order-none">
          <h2 className="font-medium mb-10">Task List</h2>
          <p className="md:max-w-[80%] md:mb-16">
            For each event Together provides a task list feature that offers
            <strong> pre-set categories </strong> with{" "}
            <strong> suggested tasks </strong> and items to bring. Seamlessly
            add custom tasks if needed, allowing for{" "}
            <strong> comprehensive planning </strong> that covers every detail,
            so you never miss a beat.
          </p>
          <div className="flex md:w-[80%] justify-between  relative">
            <span className="bg-[#FB0160] text-transparent bg-clip-text font-black text-5xl">
              .
            </span>
            <span className="bg-[#FB0160] text-transparent bg-clip-text font-black text-5xl">
              .
            </span>
            <span className="bg-[#FB0160] text-transparent bg-clip-text font-black text-5xl">
              .
            </span>
            <div className="h-[1px] w-[99%] bg-[#FB0160] absolute bottom-3 left-1"></div>
          </div>
          <div className=" flex w-[99vw] md:w-[100%] justify-between relative right-8  md:right-16 mb-10">
            <p className="md:max-w-[25%] text-center">
              Choose a pre-set task list{" "}
            </p>
            <p className="md:max-w-[25%] text-center">
              Choose an existing task or create a new one{" "}
            </p>
            <p className="md:max-w-[25%] text-center">
              Assign the task to someone in the guest list
            </p>
          </div>
        </div>
      </div>
      {/* Frame 12 - Event Schedule */}
      <div className="md:flex md:h-[80vh] md:mb-16 p-10 md:p-0">
        <div className="md:py-16 md:pl-12 md:flex md:flex-col">
          <h2 className="font-medium mb-10">Event Schedule</h2>
          <p className="md:max-w-[70%] mb-10 md:mb-0">
            With the Event Schedule, the host can see a{" "}
            <strong>detailed breakdown</strong> of who is responsible for what
            and when. Keep the event running smoothly by avoiding any
            <strong> last-minute surprises </strong>and ensuring everyone knows
            their role and contributions.
          </p>
        </div>
        <img
          src={"/assets/project1/prototype/Prototype2.png"}
          alt="Protorype Image"
          height={"80%"}
          className="object-contain mr-20"
        />
      </div>
      {/* Frame 13 - Self reflection */}
      <div className="relative md:mb-52 p-10 md:p0 bg-accent-secondary md:bg-transparent">
        <img
          src={"/assets/project1/BackgroundSection.png"}
          alt="Background Section"
          className="md:absolute right-0 object-contain hidden xl:flex"
        ></img>
        <div className="z-10 relative md:pl-36 md:pt-16 md:pr-40 ">
          <h2 className="mb-16">Self relfection</h2>
          <p>
            The idea for this project came from my{" "}
            <strong>personal struggles</strong> with organizing private events.
            I saw a need for a solution that{" "}
            <strong> simplifies planning</strong> and{" "}
            <strong> enhances coordination</strong> between hosts and guests. My
            goal was to create an app that reduces stress , improves task
            management, and ensures a <strong>smoother event experience</strong>{" "}
            for everyone involved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project1;
