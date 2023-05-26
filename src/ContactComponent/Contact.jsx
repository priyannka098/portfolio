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
    <div id="contactme" className="container">
      <div className="contact-form grid w-full gap-8 grid-cols-1 md:grid-cols-2 md:gap-5">
        <div className="md:pl-28" id="contact-text">
          Get In Touch!
        </div>
        <div className="md:pt-16  md:pl-32  md:flex md:justify-center w-3/4 ">
          <ul>
            <li>
              <FaMailBulk className="icons gmail" />
              <a href="mailto:priyanka.1711kumari@gmail.com">
                priyanka.1711kumari@gmail.com
              </a>
            </li>
            <li>
              {/* <i class="fa fa-phone"></i> */}
              <FaPhoneAlt className="icons phone" />
              <a href="tel:+918789072816"> +91-8789072816</a>
            </li>
            <li>
              {/* <i class="fa fa-github"></i> */}
              <FaGithub className="icons github" />
              <a href="https://github.com/priyannka098?tab=repositories">
                Github
              </a>
            </li>
            <li>
              <FaLinkedin className="icons linkedIn" />
              {/* <i class="fa fa-linkedin"></i> */}

              <a href="https://www.linkedin.com/in/priyak1711/">LinkedIn</a>
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
