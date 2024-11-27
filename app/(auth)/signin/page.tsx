'use client';
import { useAuth } from '@/app/providers/AuthProvider';
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function SignIn() {
  const { user, login, logout } = useAuth()
  const { user: userAuth0, isLoading, error } = useUser();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Iniciar sesión en tu cuenta</h1>
      </div>
      
      {/* Botones de autenticación */}
      <div className="space-y-4">
        <a
          href="/api/auth/login"
          className="btn block w-full text-center bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
        >
          Iniciar sesión con Auth0
        </a>
        
        <div className="text-center text-sm italic text-gray-400"></div>
        
        <button
          onClick={() => window.location.href = '/api/auth/login?connection=github'}
          className="btn w-full bg-gradient-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%]"
        >
          Continuar con GitHub
        </button>
      </div>

      {/* Bottom link */}
      <div className="mt-6 text-center">
        <Link
          className="text-sm text-gray-700 underline hover:no-underline"
          href="/reset-password"
        >
          ¿Olvidaste tu contraseña?
        </Link>
      </div>
    </>
  );
}
