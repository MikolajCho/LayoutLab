// LayoutLab snippet start
// Header component // Minor adjustment
import React from 'react';

const Header = () => {
  // Capitalize title for display // Minor adjustment
  return (
    <header>
      <h1>{"Kontakty 24".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// Sidebar component // Minor adjustment
import React from 'react';

const Sidebar = () => {
  const links = ['Blog', 'About', 'Services', 'Home', 'Contact'];
  return (
    <aside>
      <ul>
        {links.map(link => <li key={link}>{link}</li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;

// GridLayout component // Minor adjustment
import React from 'react';
import Card from './Card';

const GridLayout = () => {
  const cards = [{'title': 'Welcome 96', 'content': 'Lorem ipsum dolor sit amet.'}, {'title': 'Dashboard 79', 'content': 'Treść przykładowa.'}, {'title': 'Welcome 98', 'content': 'Random content inside.'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;
// LayoutLab snippet end
