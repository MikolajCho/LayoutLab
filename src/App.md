// LayoutLab snippet start
// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Kontakty 85', 'content': 'Click here to continue.'}, {'title': 'Dashboard 69', 'content': 'Witaj świecie!'}, {'title': 'Dashboard 56', 'content': 'This is a test.'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;

// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Hello World 95', 'content': 'Click here to continue.'}, {'title': 'Hello World 30', 'content': 'Treść przykładowa.'}, {'title': 'Informacje 36', 'content': 'Random content inside.'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;

// Card component
import React from 'react';

const Card: React.FC = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Panel 67")}</h3>
      <p>{"Lorem ipsum dolor sit amet."}</p>
    </div>
  );
};

export default Card;

// LayoutLab snippet end
