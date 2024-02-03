"use client";
import React from "react";
import styles from "./ManageFamilyTree.module.css";
import { cn } from "@/lib/utils";

export type TreeRoot = {
  name: string;
  partners?: TreeNode[];
  children?: TreeNode[];
};

export type TreeNode = {
  id: string;
  name: string;
  partners?: TreeNode[];
  children?: TreeNode[];
};

const member: TreeRoot = {
  name: "Family Cunha",
  children: [
    {
      id: "5",
      name: "Dagoberto Gentil Silva da Cunha",
      children: [
        {
          id: "2",
          name: "Guilherme Silva da Cunha",
          partners: [
            {
              id: "22",
              name: "Camila",
            },
            {
              id: "22",
              name: "Camila 2",
            },
          ],
          children: [
            {
              id: "2",
              name: "Tobby",
            },
          ],
        },
        {
          id: "3",
          name: "Gabriel Gentil Silva da Cunha",
          children: [
            {
              id: "4",
              name: "Dog",
            },
          ],
        },
      ],
    },
    {
      id: "6",
      name: "Sidney",
      children: [
        {
          id: "61",
          name: "Zé arlindo",
          children: [
            {
              id: "62",
              name: "Tobby",
            },
          ],
        },
        {
          id: "63",
          name: "Nilza",
          children: [
            {
              id: "64",
              name: "Dog",
            },
          ],
        },
      ],
    },
  ],
};
export type ManageFamilyTreeRecursiveProps = {
  node: TreeRoot | TreeNode;
};

export const ManageFamilyTreeRecursive = ({
  node,
}: ManageFamilyTreeRecursiveProps) => {
  return (
    <li
      className={cn({
        [styles.testNode]: node.name === "Guilherme Silva da Cunha",
      })}
    >
      {/* TODO Implement partners case */}
      {node.partners ? (
        <div className="flex">
          <a className={styles.treeNode}>{node.name}</a>
          {node.partners && (
            <ul className={styles.partnerList}>
              {node.partners.map((partner) => (
                <ManageFamilyTreeRecursive
                  key={`TreeNode_${partner.id}`}
                  node={partner}
                />
              ))}
            </ul>
          )}
        </div>
      ) : (
        <>
          <a className={styles.treeNode}>{node.name}</a>
          {node.children && (
            <ul className={styles.childList}>
              {node.children.map((child) => (
                <ManageFamilyTreeRecursive
                  key={`TreeNode_${child.id}`}
                  node={child}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  );
};

export const ManageFamilyTree: React.FC = () => {
  return (
    <div className="w-screen h-full overflow-auto justify-center items-center">
      <div className={styles.tree}>
        <ul className={styles.childList}>
          <ManageFamilyTreeRecursive node={member} />
        </ul>
      </div>
    </div>
  );
};
