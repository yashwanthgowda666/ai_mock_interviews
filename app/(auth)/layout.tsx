import { ReactNode } from "react";
import { Toaster } from "sonner";


const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
