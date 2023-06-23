const certPath = "../../public/certificate/dummy.pdf";
const certName = "certificate.pdf";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = certPath;
  link.download = certName;
  link.click();
};
export default handleDownload;
