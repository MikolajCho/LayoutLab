// LayoutLab snippet start
// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['About', 'Home', 'Services', 'Contact', 'Blog'];
  return (
    <aside>
      <ul>
        {links.map(link => <li key={link}>{link}</li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;

// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Blog', 'Services', 'Home', 'About', 'Contact'];
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
