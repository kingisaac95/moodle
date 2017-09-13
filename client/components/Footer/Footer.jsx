import React from 'react';

// get the current year for footer
function getCurrentYear () {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <div className="footer theme-background center-align">
      <p>&copy;{getCurrentYear()}. React Starter Kit</p>
    </div>
  );
};

export default Footer;
