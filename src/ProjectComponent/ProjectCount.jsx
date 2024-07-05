import React, { useState } from "react";
import Project from "./Project";
import "./Project.css";
// import Spin from "./Spin-Wheel-Game.jpg";
// import Food from "./Food-Ranking-System.JPG";
// import todo from "./to-do-app.JPG";



const ProjectCount = () => {
  const data = [
    {
      id: 1,
      projectName: "Spin Wheel Game",
      image:process.env.PUBLIC_URL+'/images/Spin-Wheel-Game.jpg',
      description:
        "Spin Wheel Game is a ReactJS application, where users can spin the wheel and get rewarded with coupon codes for sitewide offers.",
      url: " https://priyannka098.github.io/Spin-wheel-Game/",
      github: " https://github.com/priyannka098/Spin-wheel-Game",
    },
    {
      id: 2,
      projectName: "Food Ranking App",
      image: process.env.PUBLIC_URL+'/images/Food-Ranking-System.jpg' ,
      description:
        " This is a dish ranking app based on React JS, allowing users to login and vote for their favourite dishes and then see the results of the poll.",
      url: " https://priyannka098.github.io/Food-Ranking-System/",
      github: "  https://github.com/priyannka098/Food-Ranking-System",
    },
    {
      id: 3,
      projectName: "To-do App",
      image: process.env.PUBLIC_URL+'/images/to-do-app.jpg' ,
      description:
        " This is a dynamic To-Do List application built using React. It enables users to efficiently create, update, and delete to-do tasks.",
      url: " https://priyannka098.github.io/To-Do-List-App/",
      github: "https://github.com/priyannka098/To-Do-List-App.git",
    },
  ];
  return (
    <div
      id="projects"
      className="w-full flex flex-col items-center banner"
      style={{ backgroundColor:"#ADC2A9" }}
    >
      <h1 className="text-3xl md:text-5xl  title-style text-center py-10 prostyle" style={{fontFamily:"Monoton-Regular"}}>
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:max-md:grid-cols-2 md:grid-cols-3 gap-10 py-10 w-5/6">
        {data.map((n, i) => {
          //   console.log("abc");
          return <Project projectdetails={data[i]} key={"project" + i} />;
        })}
      </div>
    </div>
  );
};
export default ProjectCount;
