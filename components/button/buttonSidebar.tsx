import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface SidebarButtonProps {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const ButtonSidebar = ({ icon, label, path }: SidebarButtonProps) => {
  const router = useRouter();

  return (
    <Link
      href={path}
      className={`flex h-10 items-center justify-between rounded-xl px-3 py-2 ${
        router.pathname.includes(path)
          ? "bg-primary hover:bg-primary/90 text-white"
          : "bg-transparent text-gray-600 hover:bg-gray-200"
      }`}
    >
      <div className="flex flex-1 items-center gap-2">
        <>{icon}</>
        <div className="text-sm font-semibold">{label}</div>
      </div>
    </Link>
  );
};

export default ButtonSidebar;
