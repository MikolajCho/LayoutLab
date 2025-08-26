// LayoutLab snippet start
// Card component // Minor adjustment
import React from 'react';

const Card = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Welcome 78")}</h3>
      <p>{"Click here to continue."}</p>
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
      <h1>{"Panel 32".toUpperCase()}</h1>
    </header>
  );
};

export default Header;
// LayoutLab snippet end
