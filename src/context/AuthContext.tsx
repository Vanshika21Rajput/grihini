import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient } from '@/lib/api';

interface User {
  id: string;
  name: string;
  email: string;
  type: 'customer' | 'seller';
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('gruhini_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Check if user is authenticated on the backend
      checkBackendAuth();
    }
  }, []);

  const checkBackendAuth = async () => {
    try {
      const authStatus = await apiClient.checkAuth();
      if (authStatus.authenticated && authStatus.user) {
        setUser(authStatus.user);
        localStorage.setItem('gruhini_user', JSON.stringify(authStatus.user));
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    }
  };

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('gruhini_user', JSON.stringify(userData));
  };

  const logout = async () => {
    try {
      await apiClient.logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
    setUser(null);
    localStorage.removeItem('gruhini_user');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};