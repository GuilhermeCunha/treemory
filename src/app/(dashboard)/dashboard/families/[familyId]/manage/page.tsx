import { Metadata } from "next";
import { DashboardPageTitle } from "../../../components/dashboard-page-title";
import { ManageFamilyTree } from "./components/ManageFamilyTree/ManageFamilyTree";

export const metadata: Metadata = {
  title: "Dashboard",
};

const families = [
  {
    id: "1",
    label: "Cunha",
    members: 12,
    updatedAt: new Date(),
  },
];

export default async function ManageFamily() {
  return (
    <main>
      <DashboardPageTitle title="Manage Family" />
      <ManageFamilyTree />
    </main>
  );
}
