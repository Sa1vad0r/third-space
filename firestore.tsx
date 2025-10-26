import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase.config";
import { Event } from "./types";

export async function getAllEvents(): Promise<Event[]> {
  console.log("Fetching events from Firestore...");
  const snapshot = await getDocs(collection(db, "events"));
  console.log("Documents found:", snapshot.size);

  const events = snapshot.docs.map((doc) => {
    const data = doc.data();
    console.log("Doc data:", data);
    return { id: doc.id, ...data } as Event;
  });

  return events;
}
