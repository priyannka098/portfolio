import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../BannerComponent/Banner";
import WorkExperience from "../WorkExperienceComponent/WorkExperience";
import ProjectCount from "../ProjectComponent/ProjectCount";
// import Contact from "../ContactComponent/Contact";
import Cnt from "../ContactComponent/Cnt";
import Footer from "../FooterComponent/Footer";

const HomeComponent = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <Navbar />
      <Banner />
      <ProjectCount />
      <WorkExperience />
      <Cnt />
      <Footer />

      {/* <div className="btn-btn-secondary">Priyanka kumari</div>
      <h1 className="text-4xl font-bold"></h1>
      <p className="text-xl">Full Stack Developer</p>
      <p className="text-lg">Welcome to my personal website!</p>
      <div className="mt-10">
        <p>Here's a little about me:</p>
        <ul className="list-disc">
          <li>I love building things with code.</li>
          <li>I'm proficient in ReactJS, Tailwind, and CSS.</li>
          <li>
            I enjoy learning new technologies and staying up-to-date with
            industry trends.
          </li>
        </ul>
      </div>
      <p className="mt-10">
        Feel free to contact me for any projects or opportunities!
      </p> */}
    </div>
  );
};
export default HomeComponent;
