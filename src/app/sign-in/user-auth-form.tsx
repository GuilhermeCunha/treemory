"use client";

import { signIn } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export type UserAuthFormProps = {
  className?: string;
};

export function UserAuthForm({ className }: UserAuthFormProps) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const [isSignIn, setIsSignIn] = useState(false);

  async function signInWithGoogle() {
    setIsSignIn(true);

    const signInResult = await signIn("google", {
      callbackUrl: callbackUrl,
      redirect: true,
    });

    setIsSignIn(false);

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className={cn("mt-10 w-full px-2 sm:max-w-[480px]", className)}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        className="w-full mt-2"
        size="lg"
        type="button"
        onClick={() => {
          signInWithGoogle();
        }}
        disabled={isSignIn}
      >
        {isSignIn ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}
