import React, { useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import addToProfile from "../utils/button-add-to-profile";
import handleDownload from "../utils/button-download";
import { LinkedinIcon } from "react-share";

const Certificate = () => {
  const [isHovered, setIsHovered] = useState(false);

  const MouseEnter = () => {
    setIsHovered(true);
  };

  const MouseLeave = () => {
    setIsHovered(false);
  };

  const bgStyle = isHovered ? { fill: "#007FB1" } : { fill: "white" };
  const iconFillColor = isHovered ? "white" : "#007FB1";
  const newClass = isHovered
    ? "btn btn-transparent-hover"
    : "btn btn-transparent";

  let { id } = useParams();

  return (
    <div className="cert">
      {/* Testing purpose */}
      Now showing post {id}
      <div className="grid-container">
        <h1 className="cert-header">
          Name of Event for which certificate is generated
        </h1>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--HIr7O5M4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z84rx7n3lfrcq62aesg0.png"
            alt="Your Cert"
          />
        </div>

        <div class="button-container">
          <button className="btn btn-green" onClick={handleDownload}>
            Download
          </button>
          <button
            className={newClass}
            onClick={addToProfile}
            onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}
          >
            <LinkedinIcon
              size={32}
              bgStyle={bgStyle}
              iconFillColor={iconFillColor}
            />
            Add to profile
          </button>
          <div className="separator-line"></div>
          <div className="copy-textbox">
            <div className="textbox">
              <span className="text">{window.location.href}</span>
            </div>
            <button className="copy-btn">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certificate;
