import React from "react";
// import Lottie from "lottie-react";
// import Animation from "../Animation/91382-web-development.json";
import Typewriter from "typewriter-effect";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="bg-base-200 flex items-center justify-center banner"
      style={{ background: "#2D283E" }}
    >
      <div className="grid grid-col-1 md:w-5/6 md:grid-cols-2 md:gap-20 gap-3">
        {/* <div className=" w-{200px}  lg:w-full">
          <Lottie animationData={Animation} loop={true} />;
        </div> */}
        <div className="avatar flex items-center justify-center">
          <div className="avatar-pic rounded-full ring ring-primary  ring-offset-base-100 ring-offset-2">
            <img src="images/Me.jpg" />
          </div>
        </div>

        <div className="w-[300px] lg:w-full flex flex-col justify-center items-center ">
          <div className="md:h-20">
            <h1 className="text-2xl md:text-4xl lg:text-5xl title-color font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Hi! I am Priyanka Kumari",
                    " I build stuff for the web",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <p className="py-6 text-justify  text-sm   banner-text ">
            I am a frontend web developer with passion for creating intutive and
            visually appealing and user-friendly websites. I have experience in
            a wide range of frontend technologies including HTML, CSS,
            JavaScript, React, Redux etc. and am skilled at using these tools to
            bring design mockups to life.
            <br></br>I am a strong problem-solver and can to quickly learn new
            technologies as needed. Hit me up if you want to build some
            beautiful aplications.
            <br></br>
            <br></br>
            <div>
              <div className="badge mr-2 banner-badge ">Javascript</div>
              <div className="badge mr-2 banner-badge ">HTML/CSS</div>
              <div className="badge mr-2 banner-badge ">React</div>
              <div className="badge mr-2 banner-badge ">Tailwind</div>
              <div className="badge banner-badge ">Redux</div>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
