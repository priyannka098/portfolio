import React from "react";
import "./Footer.css";

const Foot = () => {
  return (
    <footer className="w-full h-12 flex justify-center items-center">
      <div className="flex justify-between w-full px-8">
        <div className=" flex items-center">
          <p className="text-white text-sm max-sm:text-xs">
            Copyright @ 2023- All rights reserved
          </p>
        </div>
        <div class="flex items-center">
          <a href="https://www.facebook.com/profile.php?id=100077142781926">
            <img className="fb-icon mr-2" src="images/facebook-icons.png" />
          </a>
          <a href="https://www.linkedin.com/in/priyak1711/">
            <img className="ln-icon mr-2" src="images/linkedin-new.svg" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Foot;
