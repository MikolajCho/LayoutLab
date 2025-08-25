x
// LayoutLab snippet start
import React from 'react';

interface CardProps { title: string; content: string; }

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;

import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Home', 'About', 'Contact'];
  return (
    <aside style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px' }}>
      <ul>
        {links.map(link => <li key={link}>{link}</li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '10px', backgroundColor: '#eee' }}>
      <p>LayoutLab Footer</p>
    </footer>
  );
};

export default Footer;

// LayoutLab snippet end
