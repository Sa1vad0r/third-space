"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../Firebase.config";
import { Post } from "../PostInt";
import HeaderBar from "../../Headerbar";

export default function Page() {
  const params = useParams();
  const [query, setQuery] = useState("");
  const [Groups, setGroups] = useState<Post | null>(null);

  const id = params?.id as string;

  useEffect(() => {
    const fetchSinglePost = async () => {
      const postRef = doc(db, "Groups", id);
      const postSnap = await getDoc(postRef);

      if (postSnap.exists()) {
        setGroups(postSnap.data() as Post);
      } else {
        throw new Error("Post not found");
      }
    };

    if (id) {
      fetchSinglePost();
    }
  }, [id]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <HeaderBar
        query={query}
        onQueryChange={setQuery}
        showSearchByDefault={false}
      />
      <div className="flex flex-col w-screen p-6 bg-blue-800 h-1/6">
        <h1>TITLE</h1>
        <div className="w-full"></div>
        <h1>Organizer</h1>
        <div className="flex space-x- flex-row">
          <div className="justify-center w-1/4">Location</div>
          <div className="w-1/4">Time</div>
          <div className="w-1/4">attending</div>
          <div className="w-1/4">Date</div>
        </div>
      </div>
      <div className="flex flex-row flex-1 overflow-hidden">
        <div className="w-4/5 mx-auto bg-gray-50 min-h-screen"></div>
      </div>
    </div>
  );
}
