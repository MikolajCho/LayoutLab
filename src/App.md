// LayoutLab snippet start
// GridLayout component // Minor adjustment
import React from 'react';
import Card from './Card';

const GridLayout = () => {
  const cards = [{'title': 'Panel 74', 'content': 'Lorem ipsum dolor sit amet.'}, {'title': 'Dashboard 59', 'content': 'Random content inside.'}, {'title': 'Welcome 51', 'content': 'Click here to continue.'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;

// Card component // Minor adjustment
import React from 'react';

const Card = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Welcome 65")}</h3>
      <p>{"Witaj świecie!"}</p>
    </div>
  );
};

export default Card;

// Header component // Minor adjustment
import React from 'react';

const Header = () => {
  // Capitalize title for display // Minor adjustment
  return (
    <header>
      <h1>{"Dashboard 81".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// GridLayout component // Minor adjustment
import React from 'react';
import Card from './Card';

const GridLayout = () => {
  const cards = [{'title': 'Kontakty 13', 'content': 'Random content inside.'}, {'title': 'Welcome 79', 'content': 'Click here to continue.'}, {'title': 'Kontakty 85', 'content': 'Click here to continue.'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;

// Footer component // Minor adjustment
import React from 'react';

const Footer = () => {
  // Add exclamation for emphasis // Minor adjustment
  return (
    <footer>
      <p>{"This is a test." + "!"}</p>
    </footer>
  );
};

export default Footer;

// Header component // Minor adjustment
import React from 'react';

const Header = () => {
  // Capitalize title for display // Minor adjustment
  return (
    <header>
      <h1>{"Dashboard 93".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// Card component // Minor adjustment
import React from 'react';

const Card = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Welcome 83")}</h3>
      <p>{"Lorem ipsum dolor sit amet."}</p>
    </div>
  );
};

export default Card;

// Header component // Minor adjustment
import React from 'react';

const Header = () => {
  // Capitalize title for display // Minor adjustment
  return (
    <header>
      <h1>{"Dashboard 35".toUpperCase()}</h1>
    </header>
  );
};

export default Header;
// LayoutLab snippet end
