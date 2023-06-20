import React from 'react';
import '../index.css';
import { useParams } from 'react-router-dom';

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
      <button className='download-btn' onClick={handleDownload}>
        Download Certificate
      </button>
    </div>
  );

  }
  export default Certificate;
    

  