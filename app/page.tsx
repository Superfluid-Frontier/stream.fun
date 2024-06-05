"use client";

import * as React from 'react';
import LandingPage from "@/components/LandingPage";
import { BackgroundBeams } from "@/components/background-beams";
import Link from 'next/link';

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
      <div className="min-h-screen h-full w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
        <BackgroundBeams />
        <div className="p-4">
          <LandingPage />
        </div>
      </div>

    </>
  );
}