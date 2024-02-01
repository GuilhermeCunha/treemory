import { Metadata } from "next";
import { UserButton } from "@clerk/nextjs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DashboardPageTitle } from "./components/dashboard-page-title";
import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

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
export default async function Home() {
  return (
    <main>
      <DashboardPageTitle title="Families" />
      <div className="grid grid-cols-4 gap-2">
        {families.map((family) => (
          <Card key={family.id}>
            <CardHeader>
              <CardTitle>{family.label}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col">
              <ul>
                <li>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center">
                          <Icons.familyMember className="h-4 w-4" />
                          <span>: {family.members}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{family.members} members</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
                <li>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center">
                          <Icons.lastUpdate className="h-4 w-4" />
                          <span>: {family.updatedAt.toLocaleString()}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Last update at {family.updatedAt.toLocaleString()}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              </ul>
              <Button className="mt-2">Manage</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
