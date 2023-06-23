const addToProfile = () => {
  const url = new URL("https://www.linkedin.com/profile/add");
  const params = new URLSearchParams();

  const name = "";
  const organizationName = "ACM Student Chapter , Amrita Amritapuri";
  const issueYear = "";
  const issueMonth = "";
  const expirationYear = "";
  const expirationMonth = "";
  const certUrl = "";
  const certId = "";

  params.append("startTask", "CERTIFICATION_NAME");
  params.append("name", name);
  params.append("organizationName", organizationName);
  params.append("issueYear", issueYear);
  params.append("issueMonth", issueMonth);
  params.append("expirationYear", expirationYear);
  params.append("expirationMonth", expirationMonth);
  params.append("certUrl", certUrl);
  params.append("certId", certId);

  url.search = params.toString();
  window.open(url, "_blank");
};
export default addToProfile;
