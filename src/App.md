// LayoutLab snippet start
// Footer component
import React from 'react';

const Footer: React.FC = () => {
  // Add exclamation for emphasis
  return (
    <footer>
      <p>{"Random content inside." + "!"}</p>
    </footer>
  );
};

export default Footer;

// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Hello World 64', 'content': 'Witaj świecie!'}, {'title': 'Dashboard 68', 'content': 'Click here to continue.'}, {'title': 'Hello World 74', 'content': 'Random content inside.'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;

// Footer component
import React from 'react';

const Footer: React.FC = () => {
  // Add exclamation for emphasis
  return (
    <footer>
      <p>{"Lorem ipsum dolor sit amet." + "!"}</p>
    </footer>
  );
};

export default Footer;

// LayoutLab snippet end
