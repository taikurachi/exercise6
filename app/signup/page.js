"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CreateUser from "../components/CreateUser";
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      router.push("/dashboard"); // Redirect to dashboard after successful signup
    } catch (error) {
      setError("Failed to create an account");
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow text-black">
        <h1 className="text-2xl font-bold text-center">Create Account</h1>

        <CreateUser />
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:text-blue-600">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
