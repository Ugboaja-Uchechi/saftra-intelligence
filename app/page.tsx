//import HeroVideo from "../public/assets/hero-video.mp4"

import Industries from "./_components/Industries";
import ProblemSolve from "./_components/ProblemSolve";

export default function Home() {
  return (
    <>
      <div className="h-screen hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          {/* Hero Section Start */}
          <video width="320" height="240" autoPlay muted loop>
            <source src="/assets/hero-video.mp4" type="video/mp4" />
            <source src="/assets/Hero-Video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          <div className="h-full flex flex-col justify-center pt-52">
            <h1 className="max-w-3xl mb-10 text-white text-[calc(1rem+1.5vw)]">
              AI-Driven RFID Infrastructure for Real-Time Identification, Tracking & Operational Intelligence
            </h1>

            <p className="text-[calc(.55rem+.75vw)] text-white max-w-2xl ">
              We build secure, high-accuracy RFID + AI systems that deliver end-to-end visibility, automated compliance, and operational efficiency across transportation, logistics, healthcare, cities, and mission-critical environments.
            </p>
          </div>

          {/* Hero Section End */}

        </div>


        {/* <div className="h-full flex justify-between">
        <p className="text-xl text-white flex ml-38 justify-center flex-col  max-w-md">
          We build secure, high-accuracy RFID + AI systems that deliver end-to-end visibility, automated compliance, and operational efficiency across transportation, logistics, healthcare, cities, and mission-critical environments.
        </p>
        <h1 className="max-w-2xl mb-12  text-white text-5xl p-6 flex mr-38 items-end justify-center flex-col ">
          AI-Driven RFID Infrastructure for Real-Time Identification, Tracking & Operational Intelligence
        </h1>
      </div> */}
      </div>
      <Industries />
      <ProblemSolve />
    </>

  );
}
