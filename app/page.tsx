"use client";

import * as React from 'react';
import LandingPage from "@/components/LandingPage";
import { BackgroundBeams } from "@/components/background-beams";

export default function Home() {
  return (
    <>
      <head>
        <title>Stream Fun</title>
        <meta
          name="description"
          content="Your Web3 Link-in-Bio Tool"
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className="min-h-screen h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-4xl mx-auto p-4">
         <LandingPage />
        </div>
      </div>
      <BackgroundBeams />
    </>
  );
}