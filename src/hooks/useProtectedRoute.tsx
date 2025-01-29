"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";

export const useProtectedRoute = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login page if not authenticated
    }
  }, [user, router]);
};
