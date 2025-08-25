x
// LayoutLab snippet start
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '10px', backgroundColor: '#eee' }}>
      <h1>LayoutLab Header</h1>
    </header>
  );
};

export default Header;

import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [
    { title: 'Card 1', content: 'Content 1' },
    { title: 'Card 2', content: 'Content 2' },
    { title: 'Card 3', content: 'Content 3' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
      {cards.map((c, i) => <Card key={i} title={c.title} content={c.content} />)}
    </div>
  );
};

export default GridLayout;

// LayoutLab snippet end
