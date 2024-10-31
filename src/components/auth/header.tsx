"use client";

import { cn } from "@/lib/utils";
import { Josefin_Sans } from "next/font/google";

const font = Josefin_Sans({
  subsets: ["latin"],
});

interface AuthHeaderProps {
  label: string;
}

const AuthHeader = ({ label }: AuthHeaderProps) => {
  return (
    <div className="flex flex-col w-full gap-y-4 justify-center items-center">
      <h1 className={cn("font-bold text-3xl", font.className)}>
        Belajar NextJS
      </h1>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
};

export default AuthHeader;
