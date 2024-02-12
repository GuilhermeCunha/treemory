import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Eternalize your family
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create your family tree and eternalize memories
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link href="/dashboard">Get started</Link>
            </Button>

            <Button variant="ghost">
              <Link
                href="/dashboard"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
