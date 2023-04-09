import React from "react";
import "./Contact.css";
import { falocation } from "react-icons";
const Contact = () => {
  return (
    // <div className=" min-h-screen bg-base-200 p-10">
    //   <div className="contactbox">
    //     <h1 className="text-lg lg:text-3xl font-extrabold text-secondary text-center py-10">
    //       Contact Me!!!
    //     </h1>
    //   </div>

    //   <div className="hero-content flex-col lg:flex-row">
    //     <div>
    //       <img
    //         src="/images/contact-images.png"
    //         className="max-w-md h-[280px] rounded-lg shadow-2xl image place-content-center"
    //       />
    //     </div>

    //     <div>
    //       <p className="py-6">jgfskjfjsdfcsdjcksjdbfsidkgfsdbcmzxczgjhcdssb</p>
    //     </div>
    //   </div>
    // </div>

    <div className="container">
      <div className="flex flex-row justify-center ">
        <div className="image-box  justify-center">
          <img src="/images/contact-images.png" />
        </div>
        <div className="contact-box"></div>
      </div>
    </div>
  );
};
export default Contact;
