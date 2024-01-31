import { getServerAuthSessionOrRedirect } from "@/server/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Home() {
  const session = await getServerAuthSessionOrRedirect();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>Logged User: {session.user.email}</span>
    </main>
  );
}
