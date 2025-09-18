import PoweredByTON from "@/components/ui/other/PoweredByTON";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import EssenceBubbles from "@/components/ui/other/EssenceBubbles";
import TransparentButton from "@/components/ui/buttons/TransparentButton";
import MainHeadMenu from "@/components/ui/navigations/MainHeaderMenu";
import Link from "next/link";
import Spark from "@/components/ui/icons/vector/spark";
import Star from "@/components/ui/icons/vector/star";
import Cubo from "@/components/ui/icons/vector/cubo";
import SpinningStar from "@/components/ui/icons/animated/SpinningStar";
import LeftSideHeroSectionBlock from "@/components/extra/index/leftSideHeroSectionBlock";
import RightSideHeroSectionBlock from "@/components/extra/index/rightSizeHeroSectionBlock";

export default function Home() {
  return (
      <div className={'container m-auto'}>
          <div className={'absolute top-0 container'}>
              <MainHeadMenu />
          </div>
          <section className="relative flex items-center justify-center min-h-screen max-lg:p-5">
            <div className={'relative flex-1 flex items-center justify-center'}>
              {/* Иллюстрации */}
              {/*<div className={'absolute h-64 bg-[#F6F4EE] aspect-video rounded-full end-0 rotate-[20deg]'}></div>*/}
              {/*<Star className={"absolute end-1/4"} size={50}/>*/}

              <LeftSideHeroSectionBlock />

              {/* Текст */}
              <div className="relative text-center max-w-2xl px-6 text-center flex items-center flex-col gap-5 z-50 bg-white/30 p-10 rounded-3xl backdrop-blur-md border border-gray-100 shadow-sm">
                <Spark size={100} />
                <h1 className={'text-9xl font-bold max-lg:text-7xl'}>Essence</h1>
                <p className={'text-3xl font-bold max-lg:text-xl'}>Токен нового поколения</p>
                <PoweredByTON />


                <p>Essence — это токен, который станет основой экосистемы игр и сервисов. Его стоимость формируется сообществом и поддерживается реальным пулом TON.</p>

                <div className={'flex gap-5'}>
                  <PrimaryButton>Присоединиться</PrimaryButton>
                    <Link href={"/about"}><TransparentButton>Узнать больше</TransparentButton></Link>
                </div>
              </div>

              <RightSideHeroSectionBlock />
            </div>

          </section>

      </div>
  );
}
