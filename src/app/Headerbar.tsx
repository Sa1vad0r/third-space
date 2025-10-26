"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./useAuth";
import { auth } from "../../Firebase.config";

interface HeaderBarProps {
  showSearchByDefault?: boolean;
  query: string;
  onQueryChange: (val: string) => void;
  pageChange?: boolean;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  showSearchByDefault = true,
  query,
  onQueryChange,
  pageChange = true,
}) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const router = useRouter();
  const user = useAuth();

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center bg-blue-900 p-4 w-full flex-shrink-0 gap-2 md:gap-0">
      {/* Top Row: Logo and Mobile Profile Button */}
      <div className="flex justify-between items-center w-full md:w-1/5 md:justify-start md:gap-4">
        {/* Logo */}
        <button
          className="font-bold text-xl sm:text-2xl font-serif text-white"
          onClick={() => router.push("/Home")}
          aria-label="Go to home page"
        >
          Third ~ Space
        </button>

        {/* Profile Button on mobile (visible below md) */}
        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden relative">
          <button
            className="w-10 h-10 rounded-full bg-white text-gray-900 font-bold flex items-center justify-center hover:bg-gray-200 transition"
            onClick={() => setShowMenu((prev) => !prev)}
            title="Menu"
          >
            ☰
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white hover:bg-blue-500 shadow-lg rounded-lg z-50">
              <button
                onClick={() => router.push("/Profile")}
                className="w-full text-left px-4 py-2 "
              >
                Profile
              </button>
              <button
                onClick={() => router.push("/Settings")}
                className="w-full text-left px-4 py-2 "
              >
                Settings
              </button>
              <button
                onClick={() => {
                  auth.signOut();
                  router.push("/SignIn");
                }}
                className="w-full text-left px-4 py-2 text-red-600"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar if enabled (centered) */}
      {showSearchByDefault && (
        <div className="w-full md:w-3/5 flex justify-center">
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && pageChange) {
                router.push("/Search");
              }
            }}
            placeholder="Search"
            autoComplete="off"
            className="w-full max-w-2xl h-10 p-3 rounded-full placeholder:text-white placeholder:font-semibold bg-blue-950 shadow-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
          />
        </div>
      )}

      {/* Profile Button on desktop (always visible on md+) */}
      {/* Hamburger Menu - Desktop */}
      <div
        className={`hidden md:flex relative justify-end items-center ${
          showSearchByDefault ? "w-1/5" : "w-full"
        } pr-2`}
      >
        {user ? (
          <button
            className="w-10 h-10 rounded-full bg-white text-blue-900 font-bold flex items-center justify-center hover:bg-gray-200 transition"
            onClick={() => setShowMenu((prev) => !prev)}
            title="Menu"
          >
            ☰
          </button>
        ) : (
          <button
            onClick={() => {
              auth.signOut();
              router.push("/Login");
            }}
            className=" px-4 py-2 text-center text-blue-400 hover:text-blue-200"
          >
            Log In
          </button>
        )}

        {showMenu && (
          <div className="absolute right-0 top-12 w-40 bg-white shadow-lg rounded-lg z-50">
            <button
              onClick={() => router.push("/Profile")}
              className="w-full px-4 py-2 text-black text-center rounded-t-lg hover:bg-emerald-100"
            >
              Profile
            </button>
            <button
              onClick={() => router.push("/Settings")}
              className="w-full px-4 py-2 text-black text-center hover:bg-emerald-100"
            >
              Settings
            </button>
            <button
              onClick={() => {
                auth.signOut();
                router.push("/Home");
              }}
              className="w-full px-4 py-2 hover:bg-emerald-100 rounded-b-lg text-center text-red-600"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
