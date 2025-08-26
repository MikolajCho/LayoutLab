// LayoutLab snippet start
// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Blog', 'Contact', 'Services', 'Home', 'About'];
  return (
    <aside>
      <ul>
        {links.map(link => <li key={link}>{link}</li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;

// Card component
import React from 'react';

const Card: React.FC = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Profile 48")}</h3>
      <p>{"Random content inside."}</p>
    </div>
  );
};

export default Card;

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
  const links = ['Blog', 'About', 'Home', 'Services', 'Contact'];
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
