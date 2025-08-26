// LayoutLab snippet start
// Sidebar component
import React from 'react';

const Sidebar: React.FC = () => {
  const links = ['Contact', 'Blog', 'Services', 'About', 'Home'];
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
  const cards = [{'title': 'Informacje 80', 'content': 'Treść przykładowa.'}, {'title': 'Panel 38', 'content': 'This is a test.'}, {'title': 'Profile 53', 'content': 'Click here to continue.'}];
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
  const links = ['Home', 'Services', 'About', 'Contact', 'Blog'];
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
      <h3>{capitalize("Profile 89")}</h3>
      <p>{"This is a test."}</p>
    </div>
  );
};

export default Card;

// Card component
import React from 'react';

const Card: React.FC = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Informacje 44")}</h3>
      <p>{"Lorem ipsum dolor sit amet."}</p>
    </div>
  );
};

export default Card;

// Card component
import React from 'react';

const Card: React.FC = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Kontakty 32")}</h3>
      <p>{"This is a test."}</p>
    </div>
  );
};

export default Card;

// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Panel 86', 'content': 'Random content inside.'}, {'title': 'Informacje 39', 'content': 'Random content inside.'}, {'title': 'Dashboard 15', 'content': 'Treść przykładowa.'}];
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
  const links = ['Blog', 'About', 'Home', 'Contact', 'Services'];
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
      <h3>{capitalize("Kontakty 70")}</h3>
      <p>{"Random content inside."}</p>
    </div>
  );
};

export default Card;

// GridLayout component
import React from 'react';
import Card from './Card';

const GridLayout: React.FC = () => {
  const cards = [{'title': 'Dashboard 31', 'content': 'This is a test.'}, {'title': 'Panel 83', 'content': 'Witaj świecie!'}, {'title': 'Profile 58', 'content': 'Click here to continue.'}];
  return (
    <div>
      {cards.map((c, i) => <Card key={i} title={c['title']} content={c['content']} />)}
    </div>
  );
};

export default GridLayout;

// LayoutLab snippet end
