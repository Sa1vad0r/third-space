"use client";
import React, { useEffect, useState } from "react";
import CardItem from "../CardItem";
import HeaderBar from "../Headerbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase.config";
import { Card } from "./Card";
import { getAllEvents } from "../../../firestore";
import { Event } from "../../../types";

const Page: React.FC = () => {
  const [query, setQuery] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getAllEvents();
      setEvents(result);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col  min-h-screen bg-gray-200">
      <HeaderBar query={query} onQueryChange={setQuery} />

      <div className="CardC">
        <div className="container mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center space-y-8 max-w-6xl">
          <button
            onClick={() => (window.location.href = "/createGroup")}
            className="border-[1px] border-dashed border-gray-600 hover:bg-gray-300 transition-all  bg-gray-200 w-4/6 text-black px-4 py-2 rounded"
          >
            Add Event
          </button>
          {events.length === 0 ? (
            <p className="text-gray-500">No events found.</p>
          ) : (
            events.map((event) => (
              <div key={event.id}>
                <Card post={event} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
