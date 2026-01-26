import Image from "next/image";
import DecryptedText from "@/components/DecryptedText";

export default function Contact() {
  return (
    <>
      <div className="flex w-screen h-[calc(100vh-110px)] mt-[60px] justify-center items-center text-brand-text bg-brand-bg">

        <div className="flex w-[70%] justify-between">

          <div className="w-full md:w-[65%]">

            <DecryptedText
              speed={150}
              text="Contact me!"
              animateOn="view"
              revealDirection="start"
              className="text-[40px] md:text-[64px] font-black mb-10"
              parentClassName="all-letters text-[40px] md:text-[64px] mb-10"
              encryptedClassName="encrypted text-[40px] md:text-[64px] font-medium mb-10"
              sequential="true"
            />

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
