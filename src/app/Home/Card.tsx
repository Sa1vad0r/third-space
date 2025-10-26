import Link from "next/link";
import { Event } from "../../../types";

export const Card = ({ post }: { post: Event }) => {
  return (
    <div className="min-w-screen flex justify-center">
      <div className="w-3/6 p-7 bg-gray-100 rounded-lg shadow-lg text-black">
        <div className="flex flex-row items-start">
          <Link
            href={"Groups"}
            className="font-bold w-1/2 hover:text-blue-500 text-left font-serif text-3xl"
          >
            {post.event_title}
          </Link>
          <h1 className="font-bold w-1/2 text-right font-serif text-xl">
            {post.owner}
          </h1>
        </div>
        <div className="bg-black w-full h-px my-1"></div>
        <div>
          {post.event_desc ? (
            <p className="text-left">{post.event_desc}</p>
          ) : (
            <h1 className="text-left font-bold font-serif">Description:</h1>
          )}
        </div>
        <img
          src="/images/runClub.jpg"
          alt={post.event_title}
          className=" overflow-hidden mx-auto rounded mt-4" // Adjusted width here
        />
      </div>
    </div>
  );
};
