"use client";
import { useState } from "react";
import "./LoginC.css";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase.config";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      router.push("/Home");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h1 className="text-2xl font-bold text-black mb-4">Log In</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black mb-1">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded w-full p-2"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                signInWithEmailAndPassword(auth, email, password);
              }}
              type="submit"
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Dont Have an Account? Sign Up{" "}
          <Link href="/SignUp" className="text-blue-500">
            here
          </Link>
        </p>
      </div>
    </div>
  );
}
