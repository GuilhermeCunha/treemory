import { Icons } from "@/components/icons";
import React from "react";

export type FamilyNode = {
  id: string;
  name: string;
};
export type FamilyNodeProps = {
  node: FamilyNode;
};

export const FamilyNode = ({ node }: FamilyNodeProps) => {
  return (
    <div className="flex flex-row justify-center items-center cursor-pointer">
      <div className="group flex justify-center items-center border border-gray-200 rounded-sm p-2 hover:bg-primary">
        <Icons.familyMember className="w-8 h-8 rounded-full bg-gray-300 p-2 object-contain group-hover:bg-white" />
        <span className="max-w-32 pl-2  truncate group-hover:text-white">
          {node.name}
        </span>
      </div>
    </div>
  );
};
