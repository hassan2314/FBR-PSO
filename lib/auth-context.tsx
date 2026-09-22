'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Role = 'SUPER_ADMIN' | 'OWNER' | 'BRANCH_MANAGER' | 'CASHIER';
type User = { id: string; email: string; role: Role; tenantId?: string };

const AuthContext = createContext<{
  user: User | null;
  setUser: (u: User | null) => void;
}>({ user: null, setUser: () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
