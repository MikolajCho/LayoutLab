// LayoutLab snippet start
// Footer component
import React from 'react';

const Footer: React.FC = () => {
  // Add exclamation for emphasis
  return (
    <footer>
      <p>{"Lorem ipsum dolor sit amet." + "!"}</p>
    </footer>
  );
};

export default Footer;

// Header component
import React from 'react';

const Header: React.FC = () => {
  // Capitalize title for display
  return (
    <header>
      <h1>{"Dashboard 55".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// LayoutLab snippet end
