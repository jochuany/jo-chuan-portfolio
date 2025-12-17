import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="flex w-screen h-[calc(100vh-130px)] justify-center items-center text-[#1a2690] bg-[#f2efdf]">

        <div className="flex w-[90%] justify-between">

          <div className="w-[65%] mb-8">
            <div className="text-[40px] md:text-[64px] font-black">Contact me!</div>
            <div className="text-[12px] md:text-[16px] font-bold leading-6 md:leading-8 mt-6">Email: ruochuanyang@gmail.com<br />Mobile: 0978-193-380</div>
          </div>

        </div>

      </div>
    </>
  );
}
