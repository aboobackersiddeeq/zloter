// isAuth.tsx
"use client";
import { isAuthenticated } from "@/utils/Auth";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const { data: session } = useSession();
    const auth =  session;

    useEffect(() => {
      if (!auth) {
        return redirect("/login");
      }
    }, []);

    if (!auth) {
      return null;
    }

    return <Component {...props} />;
  };
}
