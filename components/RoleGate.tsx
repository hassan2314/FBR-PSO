import { useAuth } from '@/lib/auth-context';

export function RoleGate({ allow, children }: { allow: string[]; children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user || !allow.includes(user.role)) return null;
  return <>{children}</>;
}
