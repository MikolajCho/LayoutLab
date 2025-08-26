// LayoutLab snippet start
// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Services', 'Contact', 'Home', 'Blog', 'About'];
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
