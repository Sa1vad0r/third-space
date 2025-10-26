import React from "react";

interface CardProps {
  number: number;
}

const Card: React.FC<CardProps> = ({ number }) => {
  return (
    <div className="bg-white border rounded-lg shadow flex items-center justify-center text-xl font-semibold aspect-square">
      {number}
    </div>
  );
};

const Grid: React.FC = () => {
  const cardNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="w-full max-w-5xl mx-auto p-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {cardNumbers.map((num) => (
          <Card key={num} number={num} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
