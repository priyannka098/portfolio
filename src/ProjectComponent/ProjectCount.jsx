import React, { useState } from "react";
import Project from "./Project";

const ProjectCount = () => {
  const data = [
    {
      id: 1,
      projectName: "Spin Wheel Game",
      image: "images/Spin-Wheel-Game.jpg",
      description:
        "Spin Wheel Game is a ReactJS application, where users can spin the wheel and get rewarded with coupon codes for sitewide offers.",
      url: " https://priyannka098.github.io/Spin-wheel-Game/",
      github: " https://github.com/priyannka098/Spin-wheel-Game",
    },
    {
      id: 2,
      projectName: "Food Ranking App",
      image: "images/Food-Ranking-System.JPG",
      description:
        " This is a dish ranking app based on React JS, allowing users to login and vote for their favourite dishes and then see the results of the poll.",
      url: " https://priyannka098.github.io/Food-Ranking-System/",
      github: "  https://github.com/priyannka098/Food-Ranking-System",
    },
    {
      id: 3,
      projectName: "Mobile Login Page",
      image: "images/react-login.jpg",
      description:
        "React-Login is a simple React login Page,where user can enter the email id and password.",
      url: "https://priyannka098.github.io/react-login/",
      github: "https://github.com/priyannka098/react-login",
    },
  ];
  return (
    <div
      className="w-full flex flex-col items-center min-h-fit"
      style={{ backgroundColor: "#D1D7E0" }}
    >
      <h1 className="text-3xl md:text-5xl font-bold title-style text-center py-10">
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
