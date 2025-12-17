import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="flex w-screen h-[calc(100vh-130px)] justify-center items-center text-brand-text bg-brand-bg">

        <div className="flex w-[90%] justify-between">

          <div className="w-full md:w-[65%] mb-8">
            <div className="text-[48px] md:text-[64px] font-black">Hello, <br />I'm Jo-Chuan.</div>
            <div className="text-[16px] md:text-[18px] font-medium leading-8 md:leading-8 mt-6">會設計、也懂一點程式語言；<br />對新科技有濃厚興趣，也樂於自學技術。<br />期望透過數位設計對社會有所貢獻。</div>
          </div>

        </div>

      </div>
    </>
  );
}
