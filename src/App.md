// LayoutLab snippet start
// Header component
import React from 'react';

const Header: React.FC = () => {
  // Capitalize title for display
  return (
    <header>
      <h1>{"Welcome 48".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Profile 91', 'content': 'Witaj świecie!'}, {'title': 'Kontakty 59', 'content': 'Treść przykładowa.'}, {'title': 'Kontakty 63', 'content': 'Random content inside.'}];
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
  const links = ['About', 'Services', 'Home', 'Contact', 'Blog'];
  return (
    <aside>
      <ul>
        {links.map(link => <li key={link}>{link}</li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;

// Card component
import React from 'react';

const Card: React.FC = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Hello World 77")}</h3>
      <p>{"Random content inside."}</p>
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
      <h1>{"Welcome 53".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Welcome 33', 'content': 'Treść przykładowa.'}, {'title': 'Panel 75', 'content': 'Witaj świecie!'}, {'title': 'Hello World 52', 'content': 'This is a test.'}];
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

// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Services', 'Home', 'Contact', 'About', 'Blog'];
  return (
    <aside>
      <ul>
        {links.map(link => <li key={link}>{link}</li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;

// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Services', 'About', 'Blog', 'Home', 'Contact'];
  return (
    <aside>
      <ul>
        {links.map(link => <li key={link}>{link}</li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;

// Card component
import React from 'react';

const Card: React.FC = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Hello World 29")}</h3>
      <p>{"Random content inside."}</p>
    </div>
  );
};

export default Card;

// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Blog', 'Contact', 'Home', 'Services', 'About'];
  return (
    <aside>
      <ul>
        {links.map(link => <li key={link}>{link}</li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;

// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Services', 'Home', 'About', 'Blog', 'Contact'];
  return (
    <aside>
      <ul>
        {links.map(link => <li key={link}>{link}</li>)}
      </ul>
    </aside>
  );
};

export default Sidebar;

// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Welcome 82', 'content': 'Lorem ipsum dolor sit amet.'}, {'title': 'Welcome 92', 'content': 'This is a test.'}, {'title': 'Informacje 52', 'content': 'Click here to continue.'}];
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
      <p>{"Treść przykładowa." + "!"}</p>
    </footer>
  );
};

export default Footer;

// LayoutLab snippet end
