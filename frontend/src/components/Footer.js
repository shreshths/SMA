import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer bg-dark"
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <span className="text-light">
          SMA &#169; 2024. All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
