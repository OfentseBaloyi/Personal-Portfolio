import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-600 text-white py-4 text-center mt-auto">
      <p>© {new Date().getFullYear()} Ofentse. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
