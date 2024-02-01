import { Metadata } from "next";
import { UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
