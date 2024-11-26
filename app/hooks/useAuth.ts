"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string;
  email: string;
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    try {
      const token = localStorage.getItem('authToken');
      const userData = localStorage.getItem('userData');
      
      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error al verificar autenticación:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // Simulación de autenticación exitosa
      const mockUser = {
        id: '1',
        name: 'Usuario Prueba',
        email: email
      };
      
      localStorage.setItem('authToken', 'token-de-prueba');
      localStorage.setItem('userData', JSON.stringify(mockUser));
      setIsAuthenticated(true);
      setUser(mockUser);
      router.push('/dashboard');
      
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUser(null);
    router.push('/');
  };

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  };
}