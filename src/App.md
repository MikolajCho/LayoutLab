// LayoutLab snippet start
// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Dashboard 47', 'content': 'Witaj świecie!'}, {'title': 'Profile 23', 'content': 'This is a test.'}, {'title': 'Welcome 24', 'content': 'Random content inside.'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;

// Header component
import React from 'react';

const Header: React.FC = () => {
  // Capitalize title for display
  return (
    <header>
      <h1>{"Profile 24".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Services', 'Contact', 'Home', 'About', 'Blog'];
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
