import { Metadata } from "next";
import { UserAuthForm } from "./user-auth-form";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function AuthenticationPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <div className="flex w-full h-full justify-center items-center">
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
