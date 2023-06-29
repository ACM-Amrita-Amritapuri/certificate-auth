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
        <>
          Now showing post {id}
          <div className="flex flex-col items-center justify-center min-h-screen m-0 mx-6">
            <div className="title text-3xl my-8 font-medium">Unlocking DSA</div>
            <div className="lg:flex lg:justify-start lg:space-x-4">
              <div className="image-container">
          {loading ? (
            <p>Loading...</p>
          ) : imageUrl ? (
            <img src={imageUrl} alt="Certificate" />
          ) : (
            <p>Not found...</p>
          )}
        </div>
              <div className="flex flex-col space-y-4 items-center lg:my-36 lg:space-y-6">
                <button className="download-btn px-4 py-2 text-white rounded-lg w-52 md:w-64 whitespace-nowrap" onClick={handleDownload}>
                  Download Certificate
                </button>
                <button className="share-btn px-4 py-2 text-white rounded-lg w-52 md:w-64 whitespace-nowrap	">
                  Share Via LinkedIn
                </button>
                <button className="add-btn px-4 py-2 text-white rounded-lg w-52 md:w-64 whitespace-nowrap" onClick={addToProfile}>
                  Add to LinkedIn Profile
                </button>
                <button className="copy-btn px-4 py-2 text-white rounded-lg w-52 md:w-64 whitespace-nowrap	">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </>
      );
}
export default Certificate;
