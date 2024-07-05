import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <div id="experience" className="outerbox flex flex-col items-center justify-center lg:justify-start lg:pt-8">
      <h1 className="text-3xl text-center md:text-5xl  title-style text-center py-10"style={{fontFamily:"Monoton-Regular"}}>
        Work Experience
      </h1>
      <div className="container-div grid gap-8 grid-cols-1 md:grid-cols-2 md:gap-5 mt-0 ">
        <div className="flex flex-col leftbox-div items-center justify-center md:justify-start md:pt-20">
          <div className="left-img-div p-4">
            <div>
              <img src={process.env.PUBLIC_URL+'/images/company.png'} style={{ height: "40px", width: "155px" }}></img>
            </div>
            <div className="mt-4">
              <p className="font-bold"> React Developer Intern</p>
              <p> Speakify.ai</p>
              <br></br>
              <p className="italic">May 2023-August 2023</p>
              <p>Bangalore</p>
            </div>
          </div>
        </div>

        <div className=" rightbox-div mb-12 justify-center w-full md:justify-start lg:pt-8 text-styling">
          <ul className="list-disc">
            <li>
              Redesigned and migrated the existing multi-page NinjaStudy website
              experience into a brand new SPA.
            </li>
            <br />
            <li>
              Collaborated with the UX team to gather requirements, and
              coordinated with the stakeholders for iterative user experience
              improvements.
            </li>
            <br />
            <li>
              Worked on Website optimization, including minimizing load times,
              ensuring the website is responsive, and optimizing the user
              experience for different devices and platforms.
            </li>
            <br />
            <li>
              Made the website responsive for cross-platform devices and
              improved the overall SEO score by 20%.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
