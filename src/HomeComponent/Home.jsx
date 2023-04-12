import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../BannerComponent/Banner";
import WorkExperience from "../WorkExperienceComponent/WorkExperience";
import ProjectCount from "../ProjectComponent/ProjectCount";
// import Contact from "../ContactComponent/Contact";
import Contact from "../ContactComponent/Contact";
import Foot from "../FooterComponent/Foot";

const HomeComponent = () => {
  return (
    <div
      className="flex flex-col items-center "
      style={{ backgroundColor: "#2D283E" }}
    >
      <Navbar />
      <Banner />
      <ProjectCount />
      <WorkExperience />
      <Contact />
      <Foot />
    </div>
  );
};
export default HomeComponent;
