// LayoutLab snippet start
// Sidebar component // Minor adjustment // Minor adjustment // Minor adjustment // Minor adjustment
import React from 'react';

const Sidebar = () => {
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
