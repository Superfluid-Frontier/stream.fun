"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import IconSearch from "@/components/IconSearch";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "./hover-border-gradient";

const SearchProfile = ({
  val,
  classname,
}: {
  val?: string;
  classname?: string;
}) => {
  const [searchQuery, setSearchQuery] = useState(val ?? "");
  const router = useRouter();

  return (
    <div
      className={cn(
        "z-50 flex justify-center items-center gap-2 flex-col w-full",
        classname
      )}
    >
      <Input
        type="text"
        placeholder="ERC20 Token address"
        className="rounded-xl w-[85%] md:w-[30rem] h-[2.5rem]"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
        <br/>
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        onClick={() => {
          router.push("/create-profile");
        }}
      >
        <IconSearch /> Create super token
      </HoverBorderGradient>
    </div>
  );
};

export default SearchProfile;
