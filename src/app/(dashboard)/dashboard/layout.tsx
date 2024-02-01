import { DashboardTopbar } from "./components/dashboard-topbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full h-full">
      <DashboardTopbar />
      <div className="p-4">{children}</div>
    </div>
  );
}
