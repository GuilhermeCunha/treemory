import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const Topbar = () => {
  return (
    <div className="flex w-full px-10 py-8">
      <Link href="/">
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

export default Topbar;
