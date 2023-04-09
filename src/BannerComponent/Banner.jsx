import React from "react";
import Lottie from "lottie-react";
import Animation from "../Animation/91382-web-development.json";
import Typewriter from "typewriter-effect";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-base-200 p-60">
      <div className="grid grid-col-1 lg:grid-cols-2 lg:gap-5 gap-3">
        {/* <div className=" w-{200px}  lg:w-full">
          <Lottie animationData={Animation} loop={true} />;
        </div> */}
        <div className="avatar pl-10">
          <div className="avatar-pic pt-10 rounded-full ring ring-primary  ring-offset-base-100 ring-offset-2">
            <img src="images/Me.jpg" />
          </div>
        </div>

        <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
          <h1 className=" lg:text-5xl text-secondary font-bold">
            <Typewriter
              options={{
                strings: ["I am Priyanka Kumari", " A Frontend Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-6 lg:text-lg text-sm text-left">
            I am a front-end web developer with expertise in creating visually
            appealing and user-friendly websites. Have experience in the
            industry, have a solid understanding of HTML, CSS, JavaScript,
            React,Redux, and various web development frameworks. I am passionate
            about creating innovative and engaging websites that help businesses
            and individuals establish their online presence. attention to
            detail, creativity, and commitment to delivering high-quality work
            make her a valuable asset to any web development team.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
