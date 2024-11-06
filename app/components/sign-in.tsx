"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import GoogleSVG from "../../public/google-icon.svg";

export default function Component() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
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
              Sign in
            </button>

            <button
              type="button"
              className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-3 font-medium hover:bg-gray-700/70 transition-colors flex items-center justify-center gap-2"
            >
              <Image src={GoogleSVG} alt="Google" width={20} height={20} />
              Sign in with Google
            </button>
          </form>

          {/* Sign up link */}
          <p className="text-gray-400 text-sm text-center mt-6">
            {"Don't have an account? "}
            <Link href="/signup" className="text-white hover:underline">
              Sign up, it's free!
            </Link>
          </p>

          {/* User count */}
          {/* <div className="mt-12 text-center">
            <div className="flex justify-center -space-x-2 mb-3">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-700"
                  style={{
                    backgroundImage: `url(/placeholder.svg?height=32&width=32)`,
                    backgroundSize: "cover",
                  }}
                />
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Join over <span className="text-white font-medium">2M</span>{" "}
              global social media users
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
