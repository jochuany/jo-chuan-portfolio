import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex w-screen h-[calc(100vh-150px)] justify-center items-center text-[#1a2690] bg-[#f2efdf]">

        <div className="flex w-[90%] justify-between">

          <div className="w-[65%] mb-[100px]">
            <div className="text-[40px] md:text-[64px] font-black">Hello, <br />I'm Jo-Chuan.</div>
            <div className="text-[12px] md:text-[16px] font-medium leading-6 md:leading-8 mt-6">會設計、也懂一點程式語言；<br />對新科技有濃厚興趣，也樂於自學技術。<br />期望透過數位設計對社會有所貢獻。</div>
          </div>

        </div>

      </div>
    </>
  );
}
