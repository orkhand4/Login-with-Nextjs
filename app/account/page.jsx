import React from "react";
import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/auth";

export default async function AccountPage() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return <p>You must be logged in to view this page.</p>;
  }

  try {
    const { payload } = await verifyJWT(token);
    return <h1>Welcome, {payload.username}</h1>;
  } catch (error) {
    return <p>Invalid or expired token. Please Log in again.</p>;
  }
}
