import React from "react";
// import Lottie from "lottie-react";
// import Animation from "../Animation/91382-web-development.json";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import me from "./port_img1.jpg";

const Banner = () => {
  return (
    <div  id="about"
      className="bg-base-200 flex items-center justify-center banner w-full max-md:mt-4"
      
      style={{ background: "#2D283E" }}
    >
      <div className="banner-div grid grid-col-1 md:grid-cols-2 md:gap-20 gap-3">
        {/* <div className=" w-{200px}  lg:w-full">
          <Lottie animationData={Animation} loop={true} />;
        </div> */}
        <div className="avatar flex items-center justify-center">
          <div className="avatar-pic rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
           
           {/* <img src= {process.env.PUBLIC_URL+'/images/me.jpg'} alt="imge"/> ' */}
            {/* this way we can also import images */}'
            <img src={me}/>
          
          </div>
        </div>

        <div className="md:w-5/6 w-full flex flex-col justify-center items-center ">
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
          <p className="py-6  text-justify md:text-left text-base banner-text ">
            I am a frontend web developer with passion for creating intutive and
            visually appealing and user-friendly websites. I have experience in
            a wide range of frontend technologies including HTML, CSS,
            JavaScript, React, Redux etc. and am skilled at using these tools to
            bring design mockups to life.
            <br />
            <br />I am a strong problem-solver and can to quickly learn new
            technologies as needed. Hit me up if you want to build some
            beautiful aplications.
            <br></br>
          </p>
          <div className="mb-8">
            <div className="badge mr-2 banner-badge ">Javascript</div>
            <div className="badge mr-2 banner-badge ">HTML/CSS</div>
            <div className="badge mr-2 banner-badge ">React</div>
            <div className="badge mr-2 banner-badge ">Tailwind</div>
            <div className="badge banner-badge ">Redux</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
