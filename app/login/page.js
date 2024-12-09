"use client";
import Login from "../components/Login";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center text-black">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <Login />
      </div>
    </div>
  );
}
