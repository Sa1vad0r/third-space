import Image from "next/image";
import Login from './Login/Page';
import LoginC from './Login/Page';
import Signup from "./Signup/page";

export default function Home() {
  return (
    <div>
      <Login />
      <Signup/>
    </div>
  );
}
