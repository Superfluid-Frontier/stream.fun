"use client";

import * as React from 'react';
import LandingPage from "@/components/LandingPage";
import { BackgroundBeams } from "@/components/background-beams";
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <head>
        <title>Stream Fun</title>
        <meta
          name="description"
          content="Your super token creation community"
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className="min-h-screen h-full w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
        <div className="p-4">
          <LandingPage />
        </div>
      </div>

    </>
  );
}