import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { storage } from '../firebaseConfig';
import { ref, getDownloadURL } from "firebase/storage";
import addToProfile from '../utils/button-add-to-profile';

const Certificate = () => {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = "certificate";
    link.click();
  };

  return (
    <div className='cert'>
      {/* Testing purpose */}
      Now showing post {id}

      <h1 className='cert-header'>Name of Event for which certificate is generated</h1>
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
          <div className="button" onClick={handleDownload}>
            Download Certificate
          </div>
          <div className="button">Share Via LinkedIn</div>
          <div className="button" onClick={addToProfile}>
            Add to LinkedIn Profile
          </div>
          <div className="button">Copy Link</div>
        </div>
      </div>
    </div>
  );
};
export default Certificate;
