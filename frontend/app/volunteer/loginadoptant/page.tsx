"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface UserInfo {
  nom?: string;
  email?: string;
  telephone?: string;
  token?: string;
  [key: string]: string | undefined;
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const animauxFavoris = [
    { nom: "Nala", type: "Chat" },
    { nom: "Coco", type: "Perroquet" },
  ];
  const animauxRencontres = [
    { nom: "Rex", type: "Chien" },
    { nom: "Tigrou", type: "Chat" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    
    const response = await fetch(`${API_BASE_URL}/api/adoptant/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data: UserInfo = await response.json();

    if (response.ok) {
      setUserInfo(data);
      setLoginError("");
      localStorage.setItem("token", data.token || "");
      // Redirection vers le tableau de bord
    } else {
      setLoginError("Échec de la connexion. Vérifie tes identifiants.");
    }
  };

  const handleUserInfoChange = (field: string, value: string) => {
    setUserInfo((prev) => ({
      ...(prev || {}),
      [field]: value,
    }));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow flex flex-col items-center justify-center p-6">
          {!userInfo ? (
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
                      autoComplete="current-password"
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
                  <p className="text-red-500 text-sm text-center">
                    {loginError}
                  </p>
                )}

                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="px-6 py-2 text-lg font-bold text-white bg-[#324960] rounded-lg hover:bg-[#4682a9] transition-all duration-200"
                  >
                    Je me connecte
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex w-full max-w-6xl gap-10">
              {/* Colonne gauche : infos utilisateur */}
              <div className="w-1/2 bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold mb-4">Mes informations</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={userInfo.nom || ""}
                      onChange={(e) =>
                        handleUserInfoChange("nom", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={userInfo.email || email}
                      onChange={(e) =>
                        handleUserInfoChange("email", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={userInfo.telephone || ""}
                      onChange={(e) =>
                        handleUserInfoChange("telephone", e.target.value)
                      }
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Colonne droite : favoris + rencontres */}
              <div className="w-1/2 flex flex-col gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Animaux favoris
                  </h3>
                  <ul className="space-y-2">
                    {animauxFavoris.map((a, i) => (
                      <li key={i} className="bg-gray-100 rounded px-4 py-2">
                        {a.nom} ({a.type})
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Animaux rencontrés
                  </h3>
                  <ul className="space-y-2">
                    {animauxRencontres.map((a, i) => (
                      <li key={i} className="bg-gray-100 rounded px-4 py-2">
                        {a.nom} ({a.type})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
