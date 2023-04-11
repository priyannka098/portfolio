import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";

const Cnt = () => {
  return (
    <div className="container">
      <div className="contact-form grid w-full gap-8 grid-cols-1 md:grid-cols-2 md:gap-5">
        <div className="flex justify-center items-center">
          <span>Get In Touch!</span>
        </div>
        <div className="md:pt-16  md:pl-32  md:flex md:justify-center ">
          <ul>
            <li>
              <FaMailBulk className="icons gmail" />
              <a href="mailto:priyanka.1711@email.com">
                priyanka.1711Kumari@gmail.com
              </a>
            </li>
            <li>
              {/* <i class="fa fa-phone"></i> */}
              <FaPhoneAlt className="icons phone" />
              <a href="tel:+8789072816">8789072816</a>
            </li>
            <li>
              {/* <i class="fa fa-github"></i> */}
              <FaGithub className="icons github" />
              <a href="https://github.com/">github.com/yourusername</a>
            </li>
            <li>
              <FaLinkedin className="icons linkedIn" />
              {/* <i class="fa fa-linkedin"></i> */}

              <a href="https://www.linkedin.com/in/">
                linkedin.com/in/yourname
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="icons location" />
              <p> Bangalore, India</p>
            </li>
          </ul>
        </div>
      </div>
      {/* <div class="contact-image"></div> */}
    </div>
  );
};
export default Cnt;
