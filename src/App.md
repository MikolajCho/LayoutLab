// LayoutLab snippet start
// Card component
import React from 'react';

const Card: React.FC = () => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <div>
      <h3>{capitalize("Welcome 21")}</h3>
      <p>{"Lorem ipsum dolor sit amet."}</p>
    </div>
  );
};

export default Card;

// LayoutLab snippet end
