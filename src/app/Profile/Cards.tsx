import React from "react";

// Define the props type
type CardProps = {
  number: number;
};

export const Card: React.FC<CardProps> = ({ number }) => {
  return (
    <div className="flex-shrink-0 w-1/5 h-40 bg-purple-400 text-white flex items-center justify-center rounded text-xl">
      {number}
    </div>
  );
};

export default function App() {
  const boxes: number[] = Array.from({ length: 10 }, (_, i) => i + 1); // Example: 10 cards

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Horizontally Scrollable Cards</h2>

      <div className="flex overflow-x-auto gap-4 p-2 border border-gray-300 rounded">
        {boxes.map((number) => (
          <Card key={number} number={number} />
        ))}
      </div>
    </div>
  );
}
