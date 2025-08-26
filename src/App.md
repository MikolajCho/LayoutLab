// LayoutLab snippet start
// Footer component
import React from 'react';

const Footer: React.FC = () => {
  // Add exclamation for emphasis
  return (
    <footer>
      <p>{"This is a test." + "!"}</p>
    </footer>
  );
};

export default Footer;

// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['About', 'Contact', 'Services', 'Home', 'Blog'];
  return (
    <aside>
      <ul>
        {links.map(link => <li key={link}>{link}</li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;

// LayoutLab snippet end
