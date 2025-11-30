"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
// import imdos from "@/lib/imdos";
// import useSWR from "swr";
// import { FILEPATH } from "@/lib/config";
import TeamSkeleton from "./skeletons/TeamSkeleton";

const Team = () => {
  const router = useRouter();

  //   const fetcher = async () => {
  //     const data = await imdos.request("SELECT * FROM team");
  //     return data;
  //   };
  //   const { data: team } = useSWR("/team", fetcher);
  const [team, setTeam] = useState(null);

  return (
    <div
      className="w-full flex flex-col bg-gray-100  px-4 md:px-8 lg:px-[100px] py-9"
      id="educators"
    >
      <div className="flex flex-wrap gap-4 py-5 lg:py-11">
        {team && team.length > 0 ? (
          team?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl py-6 px-6 shadow-lg text-center flex flex-col space-y-4 transition-transform transform hover:-translate-y-3 hover:shadow-2xl hover:bg-gradient-to-r from-blue-50 to-blue-100 duration-300 group"
              style={{ flex: "1 0 calc(25% - 16px)" }}
            >
              <div className="w-full flex items-center justify-center relative">
                <div className="w-32 aspect-square">
                  <img
                    className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-300 border-4 border-green-500 shadow-md"
                    src={FILEPATH + item?.image}
                    alt={item?.alt + "- Arshad and Associates"}
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-green-600 text-white text-xs px-2 py-1 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  {item?.role}
                </div>
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="font-semibold text-[#3B4852] transition-colors duration-300 group-hover:text-blue-700 text-sm lg:text-lg xl:text-xl">
                  {item?.name}
                </h3>
                <span className="text-xs md:text-sm italic">{item?.alt}</span>
              </div>
            </div>
          ))
        ) : (
          <TeamSkeleton />
        )}
      </div>
    </div>
  );
};

export default Team;
