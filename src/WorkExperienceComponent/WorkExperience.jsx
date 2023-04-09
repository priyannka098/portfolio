import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <div className="outerbox">
      <h1 className="text-lg lg:text-3xl  text-secondary text-center py-10 heading-styling ">
        Work Experience
      </h1>
      <div className="container-div grid grid-cols-1 lg:grid-cols-2 lg:gap-5 ">
        <div className="flex flex-col leftbox-div pt-12 pl-10 pr-4 items-left p">
          <div>
            <img
              src="images/speakfy-logo.png"
              style={{ height: "50px", width: "180px" }}
            ></img>
          </div>
          <div className="mt-4">
            <p className="font-bold"> React Developer Intern</p>
            <p> Speakify.ai</p>
            <br></br>
            <p className="italic"> August 2022-November 2022</p>
            <p>Bangalore</p>
          </div>
        </div>

        <div className=" rightbox-div w-full">
          {/* <div className="hero-content flex-col lg:flex-row grid grid-col-1 lg:grid-cols-2 lg:gap-5gap-3">
            <img
              src="/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold"></h1> */}
          <p className="py-6">
            <ul>
              <li>
                Redesigned and migrated the existing multi-page NinjaStudy
                website experience into a brand new SPA built using including
                creating the layout and visual elements of a website using HTML,
                CSS, and JavaScript,ReactJS, Bootstrap.
              </li>
              <li>
                Collaborated with the UX team to gather requirements, and
                coordinated with the stakeholders for iterative user experience
                improvements. Website optimization, including minimizing load
                times, ensuring the website is responsive, and optimizing the
                user experience for different devices and platforms.
              </li>
              <li>
                Made the website responsive for cross-platform, that work well
                on different screen sizes and devices, including desktops,
                laptops, tablets, and smartphones and improved the overall SEO
                score by 20%. Collaborating with other team members, such as
                designers to ensure that the website meets the client's goals
                and objectives. Regenerate response
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
