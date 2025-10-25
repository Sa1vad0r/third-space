"use client";
import React, { useEffect, useState } from "react";
import CardItem from "../CardItem";
import HeaderBar from "../Headerbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase.config";

interface Post {
  authorID: string;
  id: string;
  Title: string;
  Content: string;
  price: number;
}

const Page: React.FC = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCol = collection(db, "posts");
      const postSnapshot = await getDocs(postsCol);
      const postList = postSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];

      setPosts(postList);
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <HeaderBar
        query={query}
        showSearchByDefault={false}
        onQueryChange={setQuery}
      />

      <div className="flex flex-1 overflow-hidden"></div>
    </div>
  );
};

export default Page;
