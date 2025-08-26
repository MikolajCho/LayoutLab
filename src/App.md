// LayoutLab snippet start
// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Panel 74', 'content': 'Lorem ipsum dolor sit amet.'}, {'title': 'Dashboard 59', 'content': 'Random content inside.'}, {'title': 'Welcome 51', 'content': 'Click here to continue.'}];
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
      <h3>{capitalize("Welcome 65")}</h3>
      <p>{"Witaj świecie!"}</p>
    </div>
  );
};

export default Card;

// Header component
import React from 'react';

const Header: React.FC = () => {
  // Capitalize title for display
  return (
    <header>
      <h1>{"Dashboard 81".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Kontakty 13', 'content': 'Random content inside.'}, {'title': 'Welcome 79', 'content': 'Click here to continue.'}, {'title': 'Kontakty 85', 'content': 'Click here to continue.'}];
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
      <p>{"This is a test." + "!"}</p>
    </footer>
  );
};

export default Footer;

// Header component
import React from 'react';

const Header: React.FC = () => {
  // Capitalize title for display
  return (
    <header>
      <h1>{"Dashboard 93".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// Card component
import React from 'react';

const Card: React.FC = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Welcome 83")}</h3>
      <p>{"Lorem ipsum dolor sit amet."}</p>
    </div>
  );
};

export default Card;

// Header component
import React from 'react';

const Header: React.FC = () => {
  // Capitalize title for display
  return (
    <header>
      <h1>{"Dashboard 35".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// LayoutLab snippet end
