"use client";
import React, { useEffect, useState } from "react";
import CardItem from "../CardItem";
import HeaderBar from "../Headerbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase.config";
import {Card} from "./Card";



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
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <HeaderBar
        query={query}
        showSearchByDefault={false}
        onQueryChange={setQuery}
      />

      
      <div className="CardC">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center space-y-8">
          {numbers.map((number) => (
            <Card key = {number}/>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Page;
/*text-purple-500 border 2px black paddinng 40px border-radius 20px box-shadow 0 4px 8px rgba(0, 0, 0, 0.1); */