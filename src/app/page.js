import PoweredByTON from "@/components/ui/other/PoweredByTON";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import EssenceBubbles from "@/components/ui/other/EssenceBubbles";
import TransparentButton from "@/components/ui/buttons/TransparentButton";
import MainHeadMenu from "@/components/ui/navigations/MainHeaderMenu";
import Link from "next/link";

export default function Home() {
  return (
      <div className={'container m-auto'}>
          <div className={'absolute top-0 container'}>
              <MainHeadMenu />
          </div>
          <div className={'h-screen w-full flex items-center overflow-hidden gap-20'}>
            <div className={'flex-1 flex flex-col gap-5 z-10'}>

              <PoweredByTON />
              <h1 className={'text-9xl font-bold text-primary'}>Essence</h1>
              <p className={'text-3xl font-bold'}>Play. Own. Use.</p>

              <p>Essence is a token that will become the basis of the ecosystem of games and services. Its value is formed by the community and supported by the real TON pool.</p>

              <div className={'flex gap-5'}>
                <PrimaryButton>Join the community</PrimaryButton>
                  <Link href={"/about"}><TransparentButton>Learn more</TransparentButton></Link>
              </div>
            </div>

            <div className={'flex-1'}>
              <EssenceBubbles />
            </div>
          </div>
      </div>
  );
}
