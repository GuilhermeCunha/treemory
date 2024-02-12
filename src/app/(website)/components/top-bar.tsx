import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./treemory-logo";
import { cn } from "@/lib/utils";

export type TopbarProps = {
  className?: string;
};
export const Topbar = ({ className }: TopbarProps) => {
  return (
    <div className={cn("flex w-full px-10 py-6 bg-white shadow-sm", className)}>
      <Link href="/" className="flex justify-center items-center">
        <Logo className="w-28 h-auto" />
      </Link>
      <div className="flex w-full justify-end items-center space-x-2">
        <Button asChild className="bg-primary rounded-full px-8 text-white">
          <Link href="/dashboard">Login</Link>
        </Button>
      </div>
    </div>
  );
};
