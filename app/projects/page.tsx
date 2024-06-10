'use client';

import { CardProject } from '@/components/CardProject';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { projects } from '@/mocks/project.mock';
import { Plus, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useChainId } from 'wagmi';
import { Spinner } from '@/components/ui/spinner'; // Assuming you have a Spinner component

export async function fetchSuperfluidTokens(chainId: number) {
  const response = await fetch(`/api/subgraph?chainId=${chainId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export default function Project() {
  const router = useRouter();
  const chainId = useChainId();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetchSuperfluidTokens(chainId)
      .then((res) => {
        setProjects(res.tokens);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [chainId]);

  const handleCreateProject = () => {
    router.push('/');
  };

  return (
    <>
      <head>
        <title>Stream Fun</title>
        <meta name="description" content="Your super token creation community" key="desc" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <div className="container relative flex h-full min-h-screen w-full flex-col space-y-10 rounded-md bg-neutral-950 antialiased md:px-6 xl:space-y-16">
        <div className="mt-12 flex flex-col">
          <div className="text-3xl font-bold">Projects</div>
          <div className="text-lg font-medium">See projects below and create your own project</div>
        </div>
        <div className="flex flex-col justify-between space-y-3 md:flex-row md:space-x-3 md:space-y-0">
          <div className="flex w-full flex-row space-x-3 md:w-3/12">
            <Input type="text" placeholder="Search for token" className="bg-white text-black" />
            <Button className="bg-gray-600 text-white">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <div className="flex flex-row space-x-3">
            <Button
              className="w-full bg-gray-600 text-white md:w-auto"
              onClick={handleCreateProject}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create project
            </Button>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <CardProject key={index} project={project} clicked />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
