import React from 'react';
import '../index.css';
import { useParams } from 'react-router-dom';
import addToProfile from '../utils/button-add-to-profile';


const Certificate = () => {

  const certPath = '../../public/certificate/dummy.pdf';
  const certName = 'certificate.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certPath;
    link.download = certName;
    link.click();
  };

  let { id } = useParams();
      return (
    <div className='cert'>
      {/* Testing purpose */}
      Now showing post {id}
      
      <h1 className='cert-header'>Name of Event for which certificate is generated</h1>
      <div className="grid-container">
        <div className="image-container">
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--HIr7O5M4--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z84rx7n3lfrcq62aesg0.png" alt="Your Cert" />
        </div>
        <div class="button-container">
          <div className="button" onClick={handleDownload} >Download Certificate</div>
          <div className="button">Share Via LinkedIn</div>
          <div className="button" onClick={addToProfile}>Add to LinkedIn Profile</div>
          <div className="button">Copy Link</div>
        </div>
      </div>
    </div>
  );

  }
  export default Certificate;
    

  