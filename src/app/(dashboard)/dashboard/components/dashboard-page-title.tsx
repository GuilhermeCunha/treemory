import { cn } from "@/lib/utils";
import React from "react";

export type DashboardPageTitleProps = {
  title: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const DashboardPageTitle = ({
  title,
  ...props
}: DashboardPageTitleProps) => {
  return (
    <h2
      className={cn("text-3xl font-bold tracking-tight mb-4", props.className)}
      {...props}
    >
      {title}
    </h2>
  );
};
