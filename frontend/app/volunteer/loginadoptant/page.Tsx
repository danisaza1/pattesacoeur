"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/adoptant/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setLoginError("");
    } else {
      setLoginError("Échec de la connexion. Vérifie tes identifiants.");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full border-2 border-gray-100">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Je me connecte
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium" htmlFor="password">
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password" // <-- ici !
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-2 text-sm text-blue-600 hover:underline"
                  >
                    {showPassword ? "Cacher" : "Voir"}
                  </button>
                </div>
              </div>

              {loginError && (
                <p className="text-red-500 text-sm text-center">{loginError}</p>
              )}

              <div className="flex justify-center mt-4">
                <Link href="/dashboardadoptant">
                  <button
                    type="submit"
                    className="px-6 py-2 text-lg font-bold text-white bg-[#324960] rounded-lg hover:bg-[#4682a9] transition-all duration-200"
                  >
                    Je me connecte
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
