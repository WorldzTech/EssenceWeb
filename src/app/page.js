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
import FeatureCard from "@/components/ui/blocks/FeatureCard";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <div className={'top-0 absolute sticky z-50'}>
        <MainHeadMenu />
    </div>

    <div className={'container m-auto max-lg:overflow-x-hidden space-y-20 p-5'}>

          <section className="relative flex items-center justify-center min-h-screen">
            <div className={'relative flex-1 flex items-center justify-center'}>
              {/* Иллюстрации */}
              {/*<div className={'absolute h-64 bg-[#F6F4EE] aspect-video rounded-full end-0 rotate-[20deg]'}></div>*/}
              {/*<Star className={"absolute end-1/4"} size={50}/>*/}

              <LeftSideHeroSectionBlock />

              {/* Текст */}
              <div className="relative text-center max-w-2xl px-6 text-center flex items-center flex-col gap-5 z-40 p-10 rounded-3xl backdrop-blur-md border border-gray-100 shadow-sm">
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

          <section>
            <h2 className={'text-5xl font-bold text-center'}>Мы настоящие</h2>
            {/*flex gap-5 sm:p-20 z-40 relative max-lg:flex-col max-lg:overflow-hidden 2xl:w-3/4 m-auto p-5*/}
            <div className={'mt-5 space-y-2 flex-1 gap-5 flex max-lg:flex-col'}>
              <FeatureCard image={'/imgs/tonpool.svg'} title={"Реальная экономика"}>Токен обеспечен пулом TON, который формируется благодаря доходам от сервисов</FeatureCard>
              <FeatureCard image={'/imgs/apps.svg'} title={"Экосистема сервисов"}>Essence появляется не из воздуха, а из вашей активности в сервисах экосистемы</FeatureCard>
              <FeatureCard image={'/imgs/check.svg'} title={"Сообщество"}>Сами пользователи создают ценность и определяют будущее Essence</FeatureCard>
              <FeatureCard image={'/imgs/target.svg'} title={"Прозрачность"}>Текущий активный пул ликвидности виден всем и каждый может влиять на него</FeatureCard>
            </div>
          </section>

          <section className={'space-y-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-20'}>
            <div className={'space-y-5'}>
              <p className={'text-blue-400'}>Направление</p>
              <h2 className={'text-4xl'}>Проект с видением</h2>
              <p className={'text-breeze-light-black'}>Essence — это не разовый запуск. Это долгосрочная экосистема, которая будет расти вместе с рынком и комьюнити.</p>

              <div className={'text-blue-400'}>
                <p className={'flex items-center gap-1'}><i className='bx  bx-check' /> Четко прописанный White Paper</p>
                <p className={'flex items-center gap-1'}><i className='bx  bx-check' /> Экономическая модель</p>
                <p className={'flex items-center gap-1'}><i className='bx  bx-check' /> Выстроенная дорожная карта</p>
              </div>
            </div>

            <div className={'space-y-5'}>
              <p className={'text-orange-400'}>Экосистема</p>
              <h2 className={'text-4xl'}>Не пустышка</h2>
              <p className={'text-breeze-light-black'}>Мы активно разрабатываем игры и сервисы для экосистемы Essence. Больше экосистема - больше ценность токена.</p>

              <div className={'text-orange-400'}>
                <p className={'flex items-center gap-1'}><i className='bx  bxs-sparkles' />  Portal</p>
                <p className={'flex items-center gap-1'}><i className='bx  bxs-sparkles' />  Rifts</p>
                <p className={'flex items-center gap-1'}><i className='bx  bxs-sparkles' />  VPN</p>
              </div>
            </div>

          </section>

      </div>
    </>

  );
}
