import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen w-full relative">
      <div className="absolute inset-0">
        <Image
          src="/images/bg-img.png"
          alt="auth bg"
          fill
          className="object-cover size-full"
        />
      </div>
      {children}
    </main>
  );
};

export default AuthLayout;
