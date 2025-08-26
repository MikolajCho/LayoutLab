// LayoutLab snippet start
// Header component
import React from 'react';

const Header: React.FC = () => {
  // Capitalize title for display
  return (
    <header>
      <h1>{"Kontakty 61".toUpperCase()}</h1>
    </header>
  );
};

export default Header;

// Header component
import React from 'react';

const Header: React.FC = () => {
  // Capitalize title for display
  return (
    <header>
      <h1>{"Informacje 60".toUpperCase()}</h1>
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
      <h3>{capitalize("Dashboard 58")}</h3>
      <p>{"Click here to continue."}</p>
    </div>
  );
};

export default Card;

// LayoutLab snippet end
