import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050B16] text-white text-center px-6">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-8">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
