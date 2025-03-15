import Header from "@/components/header";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center py-[100px]">
        <h1 className="text-3xl font-bold tracking-wider">Home Page</h1>
      </div>
    </>
  );
}
