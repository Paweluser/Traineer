import type React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-(--black-color) text-(--text-color)">
      <div className="m-3 flex w-full flex-col items-center gap-3 rounded-3xl bg-(--glass-color) p-4 md:w-[75%] xl:w-1/2">
        {children}
      </div>
    </div>
  );
}
