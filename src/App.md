// LayoutLab snippet start
// Sidebar component // Minor adjustment // Minor adjustment // Minor adjustment
import React from 'react';

const Sidebar = () => {
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

// Card component // Minor adjustment // Minor adjustment // Minor adjustment
import React from 'react';

const Card = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Profile 48")}</h3>
      <p>{"Random content inside."}</p>
    </div>
  );
};

export default Card;

// Footer component // Minor adjustment // Minor adjustment // Minor adjustment
import React from 'react';

const Footer = () => {
  // Add exclamation for emphasis // Minor adjustment // Minor adjustment // Minor adjustment
  return (
    <footer>
      <p>{"This is a test." + "!"}</p>
    </footer>
  );
};

export default Footer;

// Sidebar component // Minor adjustment // Minor adjustment // Minor adjustment
import React from 'react';

const Sidebar = () => {
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
