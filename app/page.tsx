import Image from "next/image";

export default function Home() {
  return (
    <div className="max-h-svh min-h-svh w-full grid place-items-center px-4 py-16 md:py-24">
      <Image
        src="/tdc_informal.svg"
        alt="TheDevRelCamp logo"
        width="600"
        height="600"
        className="w-80 md:w-[600px]"
      />
    </div>
  );
}
