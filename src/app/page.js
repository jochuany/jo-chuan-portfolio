import Image from "next/image";
import RotatingText from "@/components/RotatingText";


export default function Home() {
  return (
    <>
      <div className="flex w-screen h-[calc(100vh-130px)] justify-center items-center text-brand-text bg-brand-bg">

        <div className="flex flex-col w-[90%] mb-6">

          <div className="w-full text-[48px] md:text-[64px] font-black">
            Hello, <br />I'm Jo-Chuan.
          </div>

          <div className="flex flex-col mt-4 md:flex-row justify-center items-start md:justify-start md:items-center">
            <div className="text-[22px] md:text-[28px] font-black mb-2 md:mb-0">
              I have experience in
            </div>

            <RotatingText
              texts={['Digital Storytelling', 'UI/UX Design', 'Frontend Development', 'Media Psychology']}
              mainClassName="md:ml-4 px-6 py-1 text-[28px] md:text-[40px] bg-brand-text text-brand-bg font-black overflow-hidden justify-center"
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 50, stiffness: 800 }}
              rotationInterval={3000}
            />

          </div>

          <div>
            <div className="text-[16px] font-medium leading-8 md:leading-8 my-8">
              會設計、也懂一點程式語言；對新科技有濃厚興趣，也樂於自學技術。<br />期望透過數位設計對社會有所貢獻。
            </div>

            <a href="/projects" className="text-[16px] font-medium border border-brand-text px-4 pt-2 pb-2.5
            hover:bg-brand-text hover:text-brand-bg transition-all duration-300 ease">
              View Projects &#8594;
            </a>
          </div>

        </div>

      </div>
    </>
  );
}
