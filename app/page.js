import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Welcome to my App</h1>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded hover:bg-blue-600 cursor-pointer p-4 bg-black text-white"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
