
'use client';
import pfp from './pfp.png';
import Dance from './danceParty.jpg';
import Run from './runClub.jpg';
import Chess from './chess.jpeg';
import Concert from './concert.jpg';
import Bar from './diveBar.jpg';
import Knit from './knitting.jpg';
import Art from './art.jpg';
import Hike from './hike.jpg';
import Image from "next/image";
import { Card } from "./Cards";
import HeaderBar from '../Headerbar';
import { useState } from 'react';


export default function Profile() {
  const [query, setQuery] = useState('');

  return(
    <div className="bg-white min-h-screen">
      <HeaderBar query={query} onQueryChange={setQuery} showSearchByDefault={false} />
      <div className="flex justify-center mt-4">
      <div className="rounded-full  mt-5 overflow-hidden w-[150px] h-[150px]">
        <Image src={pfp} alt="Profile Picture" width={150} height={150} />
      </div>
      </div>

      <div className="flex justify-center mt-4 flex-col items-center">
      <h1 className="text-blue-700 font-bold text-xl">Name</h1>
      <h1 className="text-blue-700 text-lg">Bio</h1>
      </div>
      
      <div className="px-10">
      <h1 className="text-blue-700 mt-12 mb-4 font-semibold">Groups</h1>
      <div className="flex justify-center overflow-x-auto gap-8 max-w-6xl mx-auto">
        <Card name="Hiking"/>
        <Card name="Book Club"/>
        <Card name="Biking"/>
        <Card name="Car Meet"/>
      </div>
      </div>

      <div className="px-10">
      <h1 className="text-blue-700 mt-12 mb-4 font-semibold">Photo Albums</h1>
      </div>
      
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {[
        "Dance Party",
        "Run Club",
        "Chess Tournament",
        "Concert Night",
        "Dive Bar",
        "Knitting Event",
        "Art Exhibition",
        "Hiking Trip",
        "+",
        ].map((label, i) => (
        <div
          key={i}
          className="relative bg-gray-500/50 aspect-square rounded-lg flex items-center justify-center text-purple text-2xl font-semibold"
        >
          {label === "Dance Party" && (
        <Image src={Dance} alt="Dance Party" layout="fill" className="absolute inset-0 object-cover rounded-lg" />
          )}
          {label === "Run Club" && (
        <Image src={Run} alt="Run Club" layout="fill" className="absolute inset-0 object-cover rounded-lg" />
          )}
          {label === "Chess Tournament" && (
        <Image src={Chess} alt="Chess Tournament" layout="fill" className="absolute inset-0 object-cover rounded-lg" />
          )}
          {label === "Concert Night" && (
        <Image src={Concert} alt="Concert Night" layout="fill" className="absolute inset-0 object-cover rounded-lg" />
          )}
          {label === "Dive Bar" && (
        <Image src={Bar} alt="Dive Bar" layout="fill" className="absolute inset-0 object-cover rounded-lg" />
          )}
          {label === "Knitting Event" && (
        <Image src={Knit} alt="Knitting Event" layout="fill" className="absolute inset-0 object-cover rounded-lg" />
          )}
          {label === "Art Exhibition" && (
        <Image src={Art} alt="Art Exhibition" layout="fill" className="absolute inset-0 object-cover rounded-lg" />
          )}
          {label === "Hiking Trip" && (
        <Image src={Hike} alt="Hiking Trip" layout="fill" className="absolute inset-0 object-cover rounded-lg" />
          )}
          <span className="relative z-10">{label}</span>
        </div>
        ))}
      </div>
    </div>
  );
}

