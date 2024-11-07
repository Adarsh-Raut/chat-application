"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import GoogleSVG from "../../public/google-icon.svg";

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username: userName,
        password,
      }),
    });
    console.log(response);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden">
      {/* Stars background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, transparent 0%, transparent 2px, rgba(255,255,255,0.1) 2px, transparent 3px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative w-full max-w-md mx-auto p-6">
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 shadow-xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 text-white rotate-45">✦</div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-white text-2xl font-medium text-center mb-8">
            ChatterBox
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
            </div>
            <div className="relative">
              <input
                type="userName"
                placeholder="User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-gray-900 rounded-lg px-4 py-3 font-medium hover:bg-white/90 transition-colors"
            >
              Sign up
            </button>

            <button
              type="button"
              className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 font-medium hover:bg-gray-700/70 transition-colors flex items-center justify-center gap-2"
            >
              <Image src={GoogleSVG} alt="Google" width={20} height={20} />
              Sign ip with Google
            </button>
          </form>

          {/* Sign up link */}
          {/* <p className="text-gray-400 text-sm text-center mt-6">
            {"Don't have an account? "}
            <Link href="/signup" className="text-white hover:underline">
              Sign up, it's free!
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}
