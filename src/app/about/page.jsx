
import MainHeadMenu from "@/components/ui/navigations/MainHeaderMenu";
import GrayBox from "@/components/ui/blocks/GrayBox";
import TransparentButton from "@/components/ui/buttons/TransparentButton";
import Icon from "@/components/ui/icons/Icon";
import {PlugConnectIcon} from "@/components/ui/icons/icons";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import Image from "next/image";
import Link from "next/link";



export default function About() {
    return (
        <div className={'container m-auto'}>
            <MainHeadMenu />

            <div className={'flex flex-col gap-20'}>
                <div className={'flex flex-col items-center gap-10'}>
                    <div className={"flex flex-col gap-2 items-center pt-20"}>
                        <p className={'text-4xl'}>Unleash the</p>
                        <h1 className={'text-9xl text-primary font-bold'}>ESSENCE</h1>
                        <p className={'text-2xl'}>of you </p>
                    </div>
                    <Link href={"/paper"}><PrimaryButton>Read Essence White Paper <i className='bx  bx-arrow-right-stroke'  ></i> </PrimaryButton></Link>
                </div>

                <div className={'flex gap-10'}>
                    <GrayBox className={'flex-1 flex flex-col gap-3'}>
                        <div className={'text-3xl text-primary'}>
                            <i className='bx  bx-gem'  ></i>
                        </div>
                        <h2 className={'text-2xl'}>What is Essence</h2>
                        <div className={'flex flex-col gap-2'}>
                            <p>Essence is a token of the Telegram ecosystem of games and services.
                                Its value is not formed out of thin air: liquidity is provided by TON, which is contributed by users themselves, paying for games and services.</p>

                                <p>Players and users receive Essence for activity and can use it in the future within the ecosystem or exchange it on DEX.</p>
                        </div>

                    </GrayBox>
                    <GrayBox className={'flex-1 flex flex-col gap-3'}>
                        <div className={'text-3xl text-primary'}>
                            <i class='bx  bx-flag-chequered'  ></i>
                        </div>
                        <h2 className={'text-2xl'}>Our milestone</h2>
                        <div className={'flex flex-col gap-2'}>
                            <p>Our goal is to create an ecosystem where digital value is born from community activity.</p>

                                <p>Essence is not just a token, it is the foundation for future games and services, where every player and user becomes a co-author of the economy.</p>
                        </div>
                    </GrayBox>
                </div>

                <h2 className={'text-4xl font-bold'}>Proofs of work</h2>

                <div className={'flex justify-between gap-5'}>
                    <GrayBox className={'flex-1 flex flex-col gap-3'}>
                        <h2 className={'text-2xl flex gap-1 items-center'}><i class='bx  bx-piggy-bank text-primary'  ></i> Real economy</h2>
                        <p>The token is secured by the TON pool, which is formed from income from services</p>
                    </GrayBox>
                    <GrayBox className={'flex-1 flex flex-col gap-3'}>
                        <h2 className={'text-2xl flex gap-1 items-center'}><i class='bx  bx-joystick text-primary'  ></i> Games & Services</h2>
                        <p>Essence does not appear out of thin air, but through activity in Mini Apps</p>
                    </GrayBox>
                    <GrayBox className={'flex-1 flex flex-col gap-3'}>
                        <h2 className={'text-2xl flex gap-1 items-center'}><i class='bx  bx-people-handshake text-primary'  ></i> Transparency</h2>
                        <p>The TON pool and token distribution will be visible in real time</p>
                    </GrayBox>
                    <GrayBox className={'flex-1 flex flex-col gap-3'}>
                        <h2 className={'text-2xl flex gap-1 items-center'}><i class='bx  bx-handshake text-primary'  ></i> Community</h2>
                        <p>It is the users who create the value of Essence</p>
                    </GrayBox>
                </div>

                <div className={'flex items-center justify-between'}>
                    <div className={'flex flex-col gap-2'}>
                        <p className={'text-2xl'}>Wanna know more?</p>
                        <p className={'text-5xl font-bold'}>Read Essence White Paper</p>
                        <p>It's a document where we tell details of project</p>

                        <Link href={"/paper"}><PrimaryButton>Read <i className='bx  bx-arrow-right-stroke'  ></i></PrimaryButton></Link>
                    </div>

<div>
    <Image src={"/imgs/cherry-love.png"} width={400} height={400} layout={'reponsive'} alt={'ff'}/>
</div>
                </div>
            </div>

        </div>
    )
}