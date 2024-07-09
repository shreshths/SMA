import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer bg-black "
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <span className="fw-light small text-light opacity-50">
          Copyright &#169; 2024 - Student Management App. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
