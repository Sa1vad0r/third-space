"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Firebase.config";
import { Post } from "../Groups/PostInt";
import HeaderBar from "../Headerbar";

export default function Page() {
  const params = useParams();
  const [query, setQuery] = useState("");
  const [Groups, setGroups] = useState<Post | null>(null);

  // piggy/goal state
  const [goal, setGoal] = useState<number>(100);
  const [saved, setSaved] = useState<number>(0);
  const [contribution, setContribution] = useState<string>("");

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

  // initialize piggy state from Groups when loaded
  useEffect(() => {
    if (!Groups) return;
    // assume Groups may have numeric fields `goal` and `saved` (fallbacks provided)
    const g =
      typeof (Groups as any).goal === "number" ? (Groups as any).goal : 100;
    const s =
      typeof (Groups as any).saved === "number" ? (Groups as any).saved : 0;
    setGoal(g);
    setSaved(s);
  }, [Groups]);

  const addContribution = () => {
    const amt = parseFloat(contribution);
    if (Number.isNaN(amt) || amt <= 0) return;
    setSaved((prev) => prev + amt);
    setContribution("");
    // optionally: persist to Firestore here
  };

  const pct = goal > 0 ? Math.min(100, Math.round((saved / goal) * 100)) : 0;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <HeaderBar
        query={query}
        onQueryChange={setQuery}
        showSearchByDefault={false}
      />
      <div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg bg-white/10 flex items-center justify-center text-2xl font-semibold">
              {Groups?.Title ? Groups.Title.charAt(0).toUpperCase() : "G"}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                {Groups?.Title ?? "Group Title"}
              </h1>
              <p className="text-sm text-white/80 mt-1">
                Organized by{" "}
                <span className="font-semibold">
                  {Groups?.owner ?? "Organizer"}
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 bg-white/10 px-3 py-2 rounded-md">
              <span className="text-xs text-white/90 font-medium mr-2">
                Location
              </span>
              <span className="whitespace-nowrap">
                {Groups?.Content ?? "Unknown"}
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 bg-white/10 px-3 py-2 rounded-md">
              <span className="text-xs text-white/90 font-medium mr-2">
                Date
              </span>
              <span>{Groups?.Content ?? "TBD"}</span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-1 bg-white/10 px-3 py-2 rounded-md">
              <span className="text-xs text-white/90 font-medium mr-2">
                Time
              </span>
              <span>{Groups?.Content ?? "TBD"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-1 overflow-hidden">
        {/* Main content area */}
        <main className="flex-1 overflow-auto bg-gray-50 min-h-screen p-6">
          <div className="max-w-4xl mx-auto">
            {/* Placeholder for main content */}
            <div className="flex flex-col p-9 space-y-5 h-96 rounded-md border-2 border-dashed border-gray-200  items-center justify-center text-gray-400">
              Main group content goes here
            </div>
          </div>
        </main>

        {/* Sidebar with piggy bank / goal meter */}
        <aside className="w-80 bg-white border-l p-6 flex-shrink-0">
          <div className="flex items-center gap-3">
            {/* simple piggy SVG */}
            <div className="w-14 h-14 bg-pink-50 rounded-full flex items-center justify-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12a2 2 0 00-2-2h-1.26a6 6 0 10-9.48 0H6a2 2 0 000 4h12a2 2 0 002-2z"
                  stroke="#DB2777"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8.5" cy="10.5" r="0.5" fill="#DB2777" />
                <path
                  d="M11 6h.01"
                  stroke="#DB2777"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Group Piggy Bank</h3>
              <p className="text-sm text-gray-500">
                Help reach the group's goal
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm text-gray-600 mb-2">Progress</div>
            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-pink-500 to-rose-500 h-full"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex items-baseline justify-between mt-3">
              <div className="text-sm text-gray-700 font-medium">
                ${saved.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">
                of ${goal.toLocaleString()}
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs text-gray-800">Add contribution</label>
              <div className="flex gap-2 mt-2">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={contribution}
                  onChange={(e) => setContribution(e.target.value)}
                  className="flex-1 px-3 text-black py-2 border rounded-md text-sm"
                  placeholder="Amount"
                />
                <button
                  onClick={addContribution}
                  className="px-3 py-2 bg-pink-500 text-white rounded-md text-sm"
                >
                  Add
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Contributions here are local-only. Persist to Firestore if you
                want to save them.
              </p>
            </div>

            <div className="text-black mt-6">
              <label className="text-xs text-gray-600">Set goal</label>
              <div className="flex gap-2 mt-2">
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={goal}
                  onChange={(e) => setGoal(Number(e.target.value || 0))}
                  className="flex-1 px-3 py-2 border rounded-md text-sm"
                />
                <button
                  onClick={() => {}}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm"
                  title="Saving is local only. Add persistence if needed."
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
