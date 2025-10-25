
import "./SignupC.css";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase.config";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h1 className="text-2xl font-bold text-black mb-4">Sign Up</h1>
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
                router.push("/Login");
                createUserWithEmailAndPassword(auth, email, password);
              }}
              type="submit"
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >
              SignUp
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Have an Account? Login{" "}
          <Link href="/Login" className="text-blue-500">
            here
          </Link>
        </p>
      </div>
        </div>
    );
}

export default Signup