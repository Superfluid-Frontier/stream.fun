"use client";

import { CardProject } from "@/components/CardProject";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { projects } from "@/mocks/project.mock";
import { Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Project() {
  const router = useRouter();

  const handleCreateProject = () => {
    router.push("/");
  };

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
      
      <div className="container min-h-screen h-full w-full rounded-md bg-neutral-950 relative flex flex-col md:px-6 space-y-10 xl:space-y-16 antialiased">
        <div className="flex flex-col mt-12">
          <div className="text-3xl font-bold">Projects</div>
          <div className="text-lg font-medium">
            See projects below and create your own project
          </div>
        </div>
        <div className="flex md:flex-row md:space-x-3 flex-col md:space-y-0 space-y-3 justify-between">
          <div className="flex flex-row space-x-3 md:w-3/12 w-full">
            <Input
              type="text"
              placeholder="Search for token"
              className="bg-white text-black"
            />
            <Button className="bg-gray-600 text-white">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <div className="flex flex-row space-x-3">
            <Button
              className="bg-gray-600 text-white w-full md:w-auto"
              onClick={handleCreateProject}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create project
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
          {projects.map((project, index) => (
            <CardProject key={index} project={project} clicked />
          ))}
        </div>
      </div>
    </>
  );
}
