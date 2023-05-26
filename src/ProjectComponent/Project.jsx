import React from "react";
// import "./Project.css";

const Project = (props) => {
  const { projectName, image, description, url, github } = props.projectdetails;

  return (
    <div  className="card md:max-lg:w-64 lg:w-84  shadow-xl hover:bg-base-100 bg-base-200 h-96 bg-white">
      <figure style={{ height: "170px" }}>
        <img src={image} className="" style={{ minWidth: "100%" }} />
      </figure>
      <div className="card-body items-center text-start">
        <h2 className="card-title text-lg">{projectName}</h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Github</button>
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">Live Website</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
