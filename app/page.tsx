"use client";
import React from "react";
import { Crowd, DevRelH1, Logistics, TheDevRelcamp } from "../components/assets";
import { LiquidButton } from "../components/ui/liquid-glass-component";
import Link from "next/link";

export default function Home() { 
  return (
    <main className="overflow-hidden">
      {/* <div className="fixed bg-[url('/meadow.jpg')] bg-cover bg-center bg-no-repeat min-h-screen h-screen w-full inset-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60"></div> */}
      <section className="relative container mx-auto z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:gap-y-6 lg:gap-y-4 pt-16 sm:pt-24 lg:pt-36">
          <div aria-label="The DevRelcamp" className="flex items-center justify-center w-10/12 sm:w-4/12 md:w-6/12 lg:w-11/12">
            <TheDevRelcamp className="w-10/12 sm:w-4/12 md:w-6/12 lg:w-11/1" />
          </div>
          <div
            className="flex flex-col items-center"
            aria-label="DevRel Meetup + UnConference"
          >
            <DevRelH1 className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-11/12 h-full" />
          </div>
          <div className="flex items-center justify-center">
            <Logistics className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-11/12" />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col items-center gap-y-4">
            <Link href="https://tix.africa/discover/the-devrel-meetup">
              <LiquidButton 
              size="xxl"
              className="text-white font-inter text-lg sm:text-xl lg:text-2xl px-6 sm:px-8 lg:px-10">
                Register to attend
              </LiquidButton>
            </Link>
            <Link href="/speakers" className="text-white underline text-sm sm:text-base lg:text-lg">
              The Speakers
            </Link>
          </div>
        </div>
        <div className="mt-10 sm:mt-4 lg:mt-6">
          <Crowd className="w-full text-white h-full" />
        </div>
      </section>
    </main>
  );
}
