
// LayoutLab snippet start
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

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '10px', backgroundColor: '#eee' }}>
      <p>LayoutLab Footer</p>
    </footer>
  );
};

export default Footer;

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

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '10px', backgroundColor: '#eee' }}>
      <p>LayoutLab Footer</p>
    </footer>
  );
};

export default Footer;

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

// LayoutLab snippet end
