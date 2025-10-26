import React from "react";

// Define the props type
type CardProps = {
  name: string;
};

export const Card: React.FC<CardProps> = ({ name }) => {
  return (
    <div className="flex-shrink-0 w-40 h-40 bg-purple-400 text-white flex items-center justify-center rounded text-xl">
      {name}
    </div>
  );
};

export default function App() {
  const cardNames = ["Hiking", "Hiking", "Hiking", "Hiking"]; // all 4 the same

  return (
    <div className="px-10">
      <h1 className="text-blue-700 mt-12 mb-4 font-semibold">Groups</h1>
      <div className="flex justify-center overflow-x-auto gap-8 max-w-6xl mx-auto">
        {cardNames.map((name, index) => (
          <Card key={index} name={name} />
        ))}
      </div>
    </div>
  );
}
