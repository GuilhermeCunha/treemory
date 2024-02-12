import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const features = [
  {
    name: "Create your family tree",
    description: "Create your family tree by adding all the members.",
    icon: Icons.contact,
  },
  {
    name: "Add the date of birth to your family members",
    description:
      "Never forget a family member's birthday again. We'll notify you when this important date is coming up.",
    icon: Icons.cake,
  },
  {
    name: "Add important memories",
    description:
      "Eternalize important family memories and make sure they are never forgotten.",
    icon: Icons.memory,
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to use Treemory
          </p>
          <p className="mt-6 text-md text-gray-600">
            Here&apos;s how you can use Treemory to create your family tree,
            eternalize memories and make your life easier.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary">
                    <feature.icon
                      className="h-6 w-6 bg-primary text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <Button asChild variant="link">
              <Link href="/dashboard">
                Are you looking for a feature we don&apos;t have yet? Get
                started now and contact us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
