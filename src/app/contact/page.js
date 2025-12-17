import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="flex w-screen h-[calc(100vh-130px)] justify-center items-center text-[#1a2690] bg-[#f2efdf]">

        <div className="flex w-[90%] justify-between">

          <div className="w-full md:w-[65%]">
            <div className="text-[40px] md:text-[64px] font-black mb-10">Contact me!</div>

            <div className="text-[16px]">

              <div className="mb-8">
                <div className="font-medium">
                  Email
                </div>
                <div className="font-bold">
                  ruochuanyang@gmail.com
                </div>
              </div>

              <div className="mb-8">
                <div className="font-medium">
                  Mobile
                </div>
                <div className="font-bold">
                  0978-193-380
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}
