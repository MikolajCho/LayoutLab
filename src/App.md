// LayoutLab snippet start
// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Hello World 59', 'content': 'Witaj świecie!'}, {'title': 'Panel 26', 'content': 'Treść przykładowa.'}, {'title': 'Kontakty 15', 'content': 'Click here to continue.'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;

// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Services', 'Blog', 'Contact', 'Home', 'About'];
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
