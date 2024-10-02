import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src="src/images/BrutusBuilds Logo.png"
        alt="BB Logo"
        className="footer-logo"
        style={{ height: "16px", width: "16px" }}
      />
      <p>
        &copy; {new Date().getFullYear()} Brutus Builds Company. All rights
        reserved.
      </p>
      <p>Contact: no-reply@bbcompany.com | (123) 456-7890</p>
    </div>
  );
};
export default Footer;
