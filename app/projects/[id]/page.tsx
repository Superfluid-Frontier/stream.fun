"use client";

import { CardProject } from "@/components/CardProject";
import { CardTrade } from "@/components/CardTrade";
import { Chart } from "@/components/Chart";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { dataHolder } from "@/mocks/holder.mock";
import { projects } from "@/mocks/project.mock";
import { Project as ProjectType } from "@/types/project";
import { ArrowLeft, Globe, Send, Twitter } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Project() {
  const router = useRouter();
  const { id } = useParams();
  const [project, setProject] = useState<ProjectType>();

  const handleProjects = () => {
    router.push("/projects");
  };

  useEffect(() => {
    if (id) {
      const foundProject = projects.find((project) => project.id === id);
      setProject(foundProject);
    }
  }, [id]);

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
      <div className="min-h-screen h-full w-full container rounded-md bg-neutral-950 relative flex flex-col md:px-6 space-y-10 xl:space-y-16  antialiased">
        <div className="flex flex-row space-x-2 mt-12">
          <Button onClick={handleProjects} className=" !p-0 !px-2">
            <ArrowLeft className=" h-5 w-5" />
          </Button>
          <div className="text-3xl font-bold">
            {project?.name ?? "Project Name"}
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
          <div className="col-span-1 md:col-span-2 flex flex-col space-y-3">
            <Chart />
          </div>
          <div className="col-span-1 flex flex-col space-y-2">
            <CardTrade />
            <div className="flex flex-row space-x-2">
              <Button className="bg-gray-600 text-white">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
              <Button className="bg-gray-600 text-white">
                <Send className="mr-2 h-4 w-4" />
                Telegram
              </Button>
              <Button className="bg-gray-600 text-white">
                <Globe className="mr-2 h-4 w-4" />
                Website
              </Button>
            </div>
            {project && <CardProject project={project} />}
            <div className="text-sm">Bonding curve progress: 20%</div>
            <Progress value={20} className="w-full" />
            <div className="text-xs">
              When the market cap reaches $69,975 all the liquidity from the
              bonding curve will be deposited into Raydium and burned.
              progression increases as the price goes up. there are 271,589,090
              tokens still available for sale in the bonding curve and there is
              28.369 SOL in the bonding curve.
            </div>
            <div className="text-sm">King of the hill progress: 78%</div>
            <Progress value={78} className="w-full" />
            <div className="text-base">Holder distribution</div>
            <div className="text-sm">
              {dataHolder.map((item, key) => (
                <div key={key} className="flex flex-row justify-between">
                  <div>
                    {key + 1}. {item.name}
                  </div>
                  <div>{item.percentage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
