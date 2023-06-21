import React from 'react';
import '../index.css';
import { useParams } from 'react-router-dom';
import addToProfile from '../utils/button-add-to-profile';


const Certificate = () => {

  const certPath = '../../public/certificate/dummy.jpeg';
  const certName = 'certificate.jpeg';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certPath;
    link.download = certName;
    link.click();
  };

  let { id } = useParams();
      return (
        <>
          {/* Testing purpose */}
          Now showing post {id}

          <div className="flex flex-col items-center justify-center min-h-screen m-0 mx-6">
            <div className="title text-3xl my-8 font-medium">Unlocking DSA</div>
            <div className="lg:flex lg:justify-start lg:space-x-4">
              <img
                src="../../certificate/dummy.jpeg"
                alt="Certificate"
                className="w-full h-full lg:w-auto lg:h-auto mb-8"
              />
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
