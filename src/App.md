// LayoutLab snippet start
// Card component // Minor adjustment
import React from 'react';

const Card = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Welcome 4")}</h3>
      <p>{"Random content inside."}</p>
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
      <h1>{"Kontakty 28".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// Header component // Minor adjustment
import React from 'react';

const Header = () => {
  // Capitalize title for display // Minor adjustment
  return (
    <header>
      <h1>{"Dashboard 95".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// Sidebar component // Minor adjustment
import React from 'react';

const Sidebar = () => {
  const links = ['Services', 'About', 'Contact', 'Blog', 'Home'];
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
  const cards = [{'title': 'Profile 47', 'content': 'Random content inside.'}, {'title': 'Informacje 50', 'content': 'Random content inside.'}, {'title': 'Profile 10', 'content': 'Treść przykładowa.'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;

// Sidebar component // Minor adjustment
import React from 'react';

const Sidebar = () => {
  const links = ['Services', 'Blog', 'About', 'Contact', 'Home'];
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
  const cards = [{'title': 'Welcome 62', 'content': 'Random content inside.'}, {'title': 'Panel 7', 'content': 'Random content inside.'}, {'title': 'Kontakty 31', 'content': 'Witaj świecie!'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;

// Header component // Minor adjustment
import React from 'react';

const Header = () => {
  // Capitalize title for display // Minor adjustment
  return (
    <header>
      <h1>{"Hello World 55".toUpperCase()}</h1>
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
      <h3>{capitalize("Profile 18")}</h3>
      <p>{"Lorem ipsum dolor sit amet."}</p>
    </div>
  );
};

export default Card;

// Card component // Minor adjustment
import React from 'react';

const Card = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Hello World 83")}</h3>
      <p>{"Lorem ipsum dolor sit amet."}</p>
    </div>
  );
};

export default Card;

// Card component // Minor adjustment
import React from 'react';

const Card = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Kontakty 85")}</h3>
      <p>{"Treść przykładowa."}</p>
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
      <h1>{"Hello World 69".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// Header component // Minor adjustment
import React from 'react';

const Header = () => {
  // Capitalize title for display // Minor adjustment
  return (
    <header>
      <h1>{"Dashboard 50".toUpperCase()}</h1>
    </header>
  );
};

export default Header;
// LayoutLab snippet end
