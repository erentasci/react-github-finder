import React from "react";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-5 footer-center text-primary-content bg-gray-700 font-bold">
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
