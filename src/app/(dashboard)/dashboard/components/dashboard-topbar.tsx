"use client";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

const items = [
  {
    label: "Families",
    pathname: "/dashboard",
  },
];
export const DashboardTopbar = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const itemsWithActive = useMemo(() => {
    return items.map((item) => ({
      ...item,
      active: pathname === item.pathname,
    }));
  }, [pathname]);

  return (
    <div className={cn("flex w-full py-4 px-6 border-b", className)}>
      <nav
        className="flex items-center space-x-4 lg:space-x-6 flex-1"
        {...props}
      >
        {itemsWithActive.map((item) => (
          <Link
            key={`DashboardTopbar_Item_${item.pathname}`}
            href={item.pathname}
            className={cn(
              "text-sm transition-colors hover:text-primary hover:opacity-100",
              item.active
                ? "text-primary font-semibold"
                : "text-primary opacity-90 font-medium"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
