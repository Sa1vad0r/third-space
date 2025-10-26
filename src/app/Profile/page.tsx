import pfp from './pfp.png';
import Image from "next/image";
import { Card } from "./Cards";


export default function Profile() {
  return(
    <div className="bg-white min-h-screen">
      <div className="flex justify-center mt-4">
        <div className="rounded-full overflow-hidden w-[150px] h-[150px]">
          <Image src={pfp} alt="Profile Picture" width={150} height={150} />
        </div>
      </div>

      <div className="flex justify-center mt-4 flex-col items-center">
        <h1 className="text-blue-700 font-bold text-xl">Name</h1>
        <h1 className="text-blue-700 text-lg">Bio</h1>
      </div>
      
      <div className="px-10">
        <h1 className="text-blue-700 mt-12 mb-4 font-semibold">Groups</h1>
        <div className="flex overflow-x-auto gap-4">
          <Card number={1}/>
          <Card number={2}/>
          <Card number={3}/>
          <Card number={4}/>
          
        </div>
      </div>

      


      <div className= "px-10">
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
      className="bg-blue-400 aspect-square rounded-lg flex items-center justify-center text-white text-2xl font-semibold"
    >
      {label}
    </div>
  ))}
</div>


    </div>
  );
}

