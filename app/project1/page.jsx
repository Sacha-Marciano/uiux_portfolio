import DoughnutChart from "@/components/DoughnutChart";

const Project1 = () => {
  return (
    <section className="container relative">
      {/* Frame 1 - Title */}
      <div className="md:h-[33%] md:flex md:justify-end">
        <div className=" md:absolute md:max-w-[45%] text-center top-24 left-24">
          <h1 className=" bg-primary text-transparent bg-clip-text mb-8 font-medium">
            Together
          </h1>
          <p>
            The app that make hosting events stress-free by bringing everyone{" "}
            <br></br>
            together to plan organize and contribute.
          </p>
        </div>
        <img src={"/assets/project1/Frame1.png"} />
      </div>
      {/* Frame 1 - Description */}
      <div className="flex flex-col md:flex-row justify-around text-center md:items-center py-4 md:py-28">
        <div className="md:px-12 md:border-l-8 border-[#FB0160] md:h-[120px]">
          <h2 className="font-bold md:w-[20%] mb-7">Role</h2>
          <p>UX/UI Designer</p>
        </div>
        <div className="md:px-12 md:border-l-8 border-[#FB0160] md:h-[120px]">
          <h2 className="font-bold md:w-[20%] mb-7">What</h2>
          <p>Final Project</p>
          <p>Netcraft Academy</p>
        </div>
        <div className="md:px-12 md:border-l-8 border-[#FB0160] md:h-[120px]">
          <h2 className="font-bold md:w-[20%] mb-7">When</h2>
          <p>2024</p>
        </div>
      </div>
      {/* Frame 1 - Overview */}
      <div className="flex-col h-[33vh] justify-center items-center text-center px-6">
        <h2 className="md:mb-16 md:mt-10 font-medium">Overview</h2>
        <p>
          You've always wanted to host a perfect event , but the effort involved
          can feel <strong>time-consuming</strong> and{" "}
          <strong>complicated</strong>. Together helps you streamline event
          planning by <strong>connecting participants</strong> to share tasks
          and information effortlessly. With everyone working together,{" "}
          <strong>planning becomes smoother</strong> and more{" "}
          <strong>enjoyable</strong> for everyone involved.
        </p>
      </div>
      {/* Frame 2 - Problem */}
      <div className="container h-full px-20 py-20 bg-accent-secondary flex">
        {/* title and description 1 */}
        <div className="md:max-w-[70%] h-full">
          <h2 className="bg-primary text-transparent bg-clip-text pb-4 border-b-2 border-black/50 font-medium">
            Problem
          </h2>
          <p className="relative top-16">
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
          className="object-contain max-h-[50%]"
        />
      </div>
      {/* Frame 2 - Solution */}
      <div className="container h-full px-20 py-20 bg-accent-secondary">
        <div className="flex mb-10">
          <img
            src={"/assets/project1/Frame2_1.png"}
            alt="Solution icon"
            className="object-contain max-h-[50%]"
          />
          <h2 className="bg-primary text-transparent bg-clip-text border-b-2 border-black/50 font-medium w-[100%] flex justify-end items-end py-10 px-20">
            Solution
          </h2>
        </div>
        <p className="mb-24">
          Together revolutionizes private event planning by streamlining
          organization and enhancing coordination. Our app provides:{" "}
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
        <h2 className="mt-28 mb-16"> Competitors Analysis</h2>
        <p className="max-w-[1250px]">
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
        <div className="flex gap-16 justify-center my-24">
          <div>
            <img src={"/assets/project1/competitors/Competitors1.png"} />
            <p className="text-center mt-5">Bring it</p>
          </div>
          <div>
            <img src={"/assets/project1/competitors/Competitors2.png"} />
            <p className="text-center mt-5">Evite</p>
          </div>
          <div>
            <img
              src={"/assets/project1/competitors/Competitors3.png"}
              className="ml-3"
            />
            <p className="text-center mt-5">Pro Party Planner</p>
          </div>
        </div>
      </div>
      {/* Frame 4 - User Research */}
      <div className="md:pt-16 md:pb-14 md:pr-52 ">
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
      <div className="md:grid grid-cols-3 mb-60">
        {/* Chart 1 */}
        <div className="flex flex-col items-center text-center">
          <p className="font-bold">
            When you are hosting,<br></br> what are the most challenging part ?
          </p>
          <div className="border-r-black-100 border-r-2 w-[100%] p-28 flex justify-center">
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
        <div className="flex flex-col items-center text-center">
          <p className="font-bold px-3">
            When you are hosting, who helps you with planning and organizing
            private events?
          </p>
          <div className="border-r-black-100 border-r-2 w-[100%] p-28 flex justify-center">
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
        <div className="flex flex-col items-center text-center gap-28">
          <p className="font-bold">
            As an organizer/guest,how do you ensure you don’t forget important
            details about the event?
          </p>
          <div>
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
        <h2 className="mb-11">Personas</h2>
        <p className="mb-16 text-center">
          This research helped me to establish two main personas, each
          highlighting <br></br> unique aspects of the event planning
          experience.
        </p>
        <div className="flex justify-between gap-x-[12px] object-contain mb-28">
          <img
            src={"/assets/project1/personas/Personas1.png"}
            alt="Personas 1"
            width={"50%"}
          />
          <img
            src={"/assets/project1/personas/Personas2.png"}
            alt="Personas 2"
            width={"50%"}
          />
        </div>
      </div>
      {/* Frame 6  - Userflow*/}
      <div>
        <img src={"/assets/project1/Frame6.png"} alt="Userflow diagram" />
      </div>
      {/* Frame 7 - Key Features */}
      <div className="pt-16 pb-32 flex flex-col items-center">
        <h2 className="font-medium">Key Features</h2>
        <div className="w-full md:flex justify-around">
          {/* Icon 1 */}
          <div className="text-center w-[20%]">
            <div className="flex flex-col items-center p-16 border-b-[#FB0160] border-b-4">
              <img
                src={"/assets/project1/features/Feature1.png"}
                alt="Feature icon"
              />
            </div>
            <h2 className="font-bold my-7">My Tasks</h2>
            <p>Keep track of personal responsibilities</p>
          </div>
          {/* Icon 2 */}
          <div className="text-center w-[20%]">
            <div className="flex flex-col items-center p-16 border-b-[#FB0160] border-b-4">
              <img
                src={"/assets/project1/features/Feature2.png"}
                alt="Feature icon"
              />
            </div>
            <h2 className="font-bold my-7">Reminders</h2>
            <p>Send reminders to guests about their assigned tasks</p>
          </div>
          {/* Icon 3 */}
          <div className="text-center w-[20%]">
            <div className="flex flex-col items-center p-16 border-b-[#FB0160] border-b-4">
              <img
                src={"/assets/project1/features/Feature3.png"}
                alt="Feature icon"
              />
            </div>
            <h2 className="font-bold my-7">Event Schedule</h2>
            <p>Track the event timeline and guest contributions</p>
          </div>
        </div>
      </div>
      {/* Prototype */}
      {/* Frame 8 - Events */}
      <div className="flex flex-col items-center">
        <h2 className="bg-primary text-transparent bg-clip-text font-medium mb-14">
          Prototype
        </h2>
        <div className="md:flex md:h-[80vh] mb-16">
          <div className="md:py-16 md:pl-12">
            <h2 className="font-medium mb-10">Events</h2>
            <p className="md:max-w-[70%]">
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
      <div className="md:flex md:h-[80vh] mb-16 justify-between">
        <img
          src={"/assets/project1/prototype/Prototype1.png"}
          alt="Protorype Image"
          height={"80%"}
          className="object-contain ml-10"
        />
        <div className="md:py-10 md:pl-12">
          <h2 className="font-medium mb-10">Create a new event</h2>
          <p className="md:max-w-[70%] mb-20">
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
          <div className="flex gap-6">
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
      <div className="md:flex md:h-[80vh] mb-16">
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
            <div className="flex items-center justify-end gap-6">
              <p>Event Details (Date , Time , Location and RSVP’s) </p>
              <div className="text-5xl bg-primary text-transparent bg-clip-text">
                &#8594;
              </div>
            </div>
            {/* Arrow 2 */}
            <div className="flex items-center justify-end gap-6  md:mt-12">
              <p>
                Pre-set task list divided into categories, enabling the{" "}
                organizer to assign tasks to guests{" "}
              </p>
              <div className="text-5xl bg-primary text-transparent bg-clip-text">
                &#8594;
              </div>
            </div>
            {/* Arrow 3 */}
            <div className="flex items-center justify-end gap-6 mt-12">
              <p>
                “My Task” section helps the organizer stay focused on their
                personal responsibilities{" "}
              </p>
              <div className="text-5xl bg-primary text-transparent bg-clip-text">
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
      <div className="md:flex md:h-[80vh] mb-16 w-full justify-between relative">
        <img
          src={"/assets/project1/prototype/Prototype3.png"}
          alt="Protorype Image"
          className="object-contain ml-10 relative bottom-2"
        />
        <img
          src={"/assets/project1/prototype/Prototype4.png"}
          alt="Protorype Image"
          className="object-contain relative h-[80%] self-end right-14"
        />
        <div className="md:py-16 md:pl-12">
          <h2 className="font-medium mb-10">Task List</h2>
          <p className="md:max-w-[80%] md:mb-16">
            For each event Together provides a task list feature that offers
            <strong> pre-set categories </strong> with{" "}
            <strong> suggested tasks </strong> and items to bring. Seamlessly
            add custom tasks if needed, allowing for{" "}
            <strong> comprehensive planning </strong> that covers every detail,
            so you never miss a beat.
          </p>
          <div className="flex w-[80%] justify-between  relative">
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
          <div className=" flex justify-between relative right-16">
            <p className="max-w-[25%] text-center">
              Choose a pre-set task list{" "}
            </p>
            <p className="max-w-[25%] text-center">
              Choose an existing task or create a new one{" "}
            </p>
            <p className="max-w-[25%] text-center">
              Assign the task to someone in the guest list
            </p>
          </div>
        </div>
      </div>
      {/* Frame 12 - Event Schedule */}
      <div className="md:flex md:h-[80vh] mb-16">
        <div className="md:py-16 md:pl-12 md:flex md:flex-col">
          <h2 className="font-medium mb-10">Event Schedule</h2>
          <p className="md:max-w-[70%]">
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
      <div className="relative md:mb-52">
        <img
          src={"/assets/project1/BackgroundSection.png"}
          alt="Background Section"
          className="absolute object-contain"
        ></img>
        <div className="z-10 relative md:pl-36 md:pt-16 md:pr-40">
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
