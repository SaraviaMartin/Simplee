"use client";
import Link from "next/link";
import Logo from "./logo";
import { useAuth } from "@/app/hooks/useAuth"; // Necesitarás crear este hook

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {isAuthenticated ? (
            <ul className="flex flex-1 items-center justify-end gap-3">
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Perfil
                </Link>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="btn-sm bg-gray-800 text-gray-200 hover:bg-gray-900"
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-1 items-center justify-end gap-3">
              <li>
                <Link
                  href="/signin"
                  className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
                >
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}