import React, { useState, useEffect } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import { storage } from "../firebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";
import addToProfile from "../utils/button-add-to-profile";
import handleDownload from "../utils/button-download";
import { LinkedinIcon } from "react-share";

const Certificate = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        setLoading(true);
        const url = await getDownloadURL(ref(storage, `/${id}.png`));
        setImageUrl(url);
        setLoading(false);
      } catch (error) {
        setImageUrl(null);
        setLoading(false);
      }
    };

    fetchImageUrl();
  }, [id]);

  return (
    <div className="cert">
      {/* Testing purpose */}
      Now showing post {id}
      <div className="grid-container">
        <h1 className="cert-header">
          Name of Event for which certificate is generated
        </h1>
        <div className="image-container">
          {loading ? (
            <p>Loading...</p>
          ) : imageUrl ? (
            <img src={imageUrl} alt="Your Cert" />
          ) : (
            <div>Not found...</div>
          )}
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
