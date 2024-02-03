"use client";
import React from "react";
import styles from "./ManageFamilyTree.module.css";
import { v4 as uuid } from "uuid";
import { Icons } from "@/components/icons";

export type TreeRoot = {
  name: string;
  partners?: TreeNode[];
  children?: TreeNode[];
  isPartner?: boolean;
};

export type TreeNode = {
  id: string;
  name: string;
  partners?: TreeNode[];
  parents?: TreeNode[];
  siblings?: TreeNode[];
  children?: TreeNode[];
  isPartner?: boolean;
};

const generateID = () => uuid();

const member: TreeRoot = {
  name: "Family Cunha",
  children: [
    {
      id: generateID(),
      name: "Dagoberto Gentil Silva da Cunha",
      partners: [
        {
          id: generateID(),
          name: "Alba",
          isPartner: true,
          children: [
            { id: generateID(), name: "Higor" },
            { id: generateID(), name: "Marcela" },
          ],
        },
        {
          id: generateID(),
          name: "Lidice",
          isPartner: true,
          children: [
            {
              id: generateID(),
              name: "Guilherme",
              partners: [
                {
                  id: generateID(),
                  name: "Camila",
                  isPartner: true,
                  children: [
                    {
                      id: generateID(),
                      name: "Tobby",
                    },
                  ],
                },
              ],
            },
            { id: generateID(), name: "Gabriel" },
          ],
        },
        {
          id: generateID(),
          name: "Joaquina",
          isPartner: true,
        },
      ],
    },
    {
      id: generateID(),
      name: "Sidney",
      children: [
        {
          id: generateID(),
          name: "Zé arlindo",
          children: [
            {
              id: generateID(),
              name: "Tobby",
            },
          ],
        },
        {
          id: generateID(),
          name: "Nilza",
          children: [
            {
              id: generateID(),
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
    <li className={node.isPartner ? styles.partnerItem : styles.childItem}>
      {/* TODO Implement partners case */}
      {node.partners ? (
        <div className="flex flex-col relative">
          <div>
            <a className={styles.treeNode}>{node.name}</a>
          </div>
          <div className="flex w-full justify-center items-center p-2">
            <Icons.weddingIcon className="w-6 h-6" />
          </div>
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
