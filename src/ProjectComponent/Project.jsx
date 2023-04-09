import React from "react";

const Project = (props) => {
  const { id, projectName, image, description, url, github } =
    props.projectdetails;

  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:border-2 hover:border-red-600">
      <figure className=" ">
        <img src={image} className="rounded-xl" style={{ height: "200px" }} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{projectName}</h2>
        <p>{description}</p>
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
