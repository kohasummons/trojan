"use client";
import React, { useEffect, useState } from "react";
import { DevRelGroup } from "../../components/assets";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { useGetSchedule } from "@/hooks/useSchedule";
import { Icon } from "@iconify/react";

interface ScheduleItem {
  ID: string;
  Activity: string;
  Duration: string;
  Topic: string;
  "Speaker/Facilitator": string;
  "Start Time": string;
  "End Time": string;
  Notes: string;
  IsActive: string;
}

const SchedulePage = () => {
  const schedule: ScheduleItem[] = useGetSchedule();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <main className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full p-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg text-white bg-black/60 p-2 rounded-md w-fit backdrop-blur-sm"
        >
          <ArrowLeft className="text-white" />
        </Link>
      </div>

      <section className="pt-20 pb-8 px-4">
        <div className="flex justify-center items-center mb-12">
          <DevRelGroup className="text-white sm:w-[1000px] sm:h-[100px] w-[500px] h-[50px]" />
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {isLoading ? (
            <>
              <SkeletonContainer />
              <SkeletonContainer />
            </>
          ) : (
            schedule.map((item) => {
            if (item.Activity.toLowerCase() === "registration") {
              return <CheckInCard key={item.ID} item={item} />;
            } else {
                return <SessionCard key={item.ID} item={item} />;
              }
            })
          )}
        </div>
      </section>
    </main>
  );
};

// const SessionCard = ({ item }: { item: ScheduleItem }) => {
//   return (
//     <div
//       key={item.ID}
//       className={`relative bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white border border-gray-800 transition-all duration-300 hover:bg-black/95 hover:border-gray-600 hover:scale-[1.02] ${
//         item.IsActive === "TRUE" ? "ring-2 ring-green-400 bg-black/95" : ""
//       }`}
//     >
//       {item.IsActive === "TRUE" && (
//         <div className="absolute top-2 right-2">
//           <div className="bg-green-400 text-black text-xs font-bold px-2 py-1 rounded-full">
//             LIVE
//           </div>
//         </div>
//       )}

//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div className="flex-1">
//           <div className="flex items-center gap-3 mb-2">
//             <Calendar className="w-4 h-4 text-gray-400" />
//             <span className="text-sm text-gray-400 font-medium">
//               {item.Activity}
//             </span>
//             {item.Duration !== "—" && (
//               <>
//                 <Clock className="w-4 h-4 text-gray-400 ml-2" />
//                 <span className="text-sm text-gray-400">{item.Duration}</span>
//               </>
//             )}
//           </div>

//           <h3 className="text-xl font-bold mb-2 text-white leading-tight">
//             {item.Topic}
//           </h3>

//           {item["Speaker/Facilitator"] !== "—" && (
//             <div className="flex items-center gap-2 mb-2">
//               <User className="w-4 h-4 text-gray-400" />
//               <span className="text-gray-300">
//                 {item["Speaker/Facilitator"]}
//               </span>
//             </div>
//           )}

//           {item.Notes !== "—" && (
//             <p className="text-gray-400 text-sm">{item.Notes}</p>
//           )}
//         </div>

//         <div className="flex flex-col items-end text-right">
//           <div className="bg-gray-800/50 rounded-lg px-3 py-2 mb-1">
//             <div className="text-white font-semibold text-lg">
//               {item["Start Time"]}
//             </div>
//             <div className="text-gray-400 text-sm">to {item["End Time"]}</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const CheckInCard = ({ item }: { item: ScheduleItem }) => {
  return (
    <div
      key={item.ID}
      className={`relative bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white border border-gray-800 transition-all duration-300 hover:bg-black/95 hover:border-gray-600 hover:scale-[1.02] ${
        item.IsActive === "TRUE" ? "ring-2 ring-green-400 bg-black/95" : ""
      }`}
    >
      {item.IsActive === "TRUE" && (
        <div className="absolute top-2 right-2">
          <div className="bg-green-400 text-black text-xs font-bold px-2 py-1 rounded-full">
            LIVE
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center gap-1">
              <Icon icon="mdi:check-circle" className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400 font-medium">
                {item.Activity}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {item.Duration !== "—" && (
                <>
                  <Clock className="w-4 h-4 text-gray-400 ml-2" />
                  <span className="text-sm text-gray-400">{item.Duration}</span>
                </>
              )}
            </div>
            <div className="flex ml-auto gap-1">
              <div className="bg-black/10 flex items-center gap-1 rounded-lg px-3 py-2 mb-1">
                <span className="">{item["Start Time"]}</span>
                <span className="text-gray-400 text-sm">
                  to {item["End Time"]}
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-geist-sans font-bold text-justify sm:text-start sm:text-xl tracking-tight mb-2 text-white leading-tight">
            {item.Topic}
          </h3>
        </div>
      </div>
    </div>
  );
};

const SessionCard = ({ item }: { item: ScheduleItem }) => {
  return (
    <div
      key={item.ID}
      className={`relative bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white border border-gray-800 transition-all duration-300 hover:bg-black/95 hover:border-gray-600 hover:scale-[1.02] ${
        item.IsActive === "TRUE" ? "ring-2 ring-green-400 bg-black/95" : ""
      }`}
    >
      {item.IsActive === "TRUE" && (
        <div className="absolute top-2 right-2">
          <div className="bg-green-400 text-black text-xs font-bold px-2 py-1 rounded-full">
            LIVE
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center gap-1">
              <Icon icon="mdi:check-circle" className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400 font-medium">
                {item.Activity}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {item.Duration !== "—" && (
                <>
                  <Clock className="w-4 h-4 text-gray-400 ml-2" />
                  <span className="text-sm text-gray-400">{item.Duration}</span>
                </>
              )}
            </div>
            <div className="flex ml-auto gap-1">
              <div className="bg-black/10 flex items-center gap-1 rounded-lg px-3 py-2 mb-1">
                <span className="">{item["Start Time"]}</span>
                <span className="text-gray-400 text-sm">
                  to {item["End Time"]}
                </span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-geist-sans font-bold text-justify sm:text-start sm:text-xl tracking-tight mb-2 text-white leading-tight">
            {item.Topic}
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-start text-left">
        {item["Speaker/Facilitator"] !== "—" && (
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300">{item["Speaker/Facilitator"]}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const SkeletonContainer = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black/70 backdrop-blur-sm rounded-xl p-6 text-white border border-gray-800 transition-all duration-300 hover:bg-black/95 hover:border-gray-600 hover:scale-[1.02]">
      <div className="flex-1">
        <div className="skeleton w-full h-10" />
      </div>
      <div className="flex-1">
        <div className="skeleton w-full h-10" />
      </div>
    </div>
  );
};

export default SchedulePage;
