import MainHeadMenu from "@/components/ui/navigations/MainHeaderMenu";
import EssenceLogo from "@/components/ui/other/EssenceLogo";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/badges/Badge";


export default function Page() {
    return (
        <>
            <div className={'container m-auto'}>
                <div className={'absolute top-0 container'}>
                    <MainHeadMenu/>
                </div>

                <div className={'h-screen flex items-center justify-center overflow-hidden'}>
                    <div
                        className={'bg-white shadow-2xl text-center p-50 aspect-square flex items-center rounded-full shadow-[#0098EA]'}>
                        <div>
                            <p className={'text-4xl'}>Welcome to the Essence</p>
                            <h1 className={'text-9xl font-bold text-primary'}>ECOSYSTEM</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'bg-[#F7F9FB] pt-20 pb-20'}>
                <div className={'container m-auto'}>
                    <h2 className={'text-2xl font-bold'}>Games & Services</h2>

                    <div className={'grid grid-cols-3 mt-10 gap-10'}>
                        <div className={'p-10 rounded-3xl bg-white text-black flex flex-col'}>
                            <Image src={'/imgs/essence-ma-logo.svg'} alt={'ma logo'} width={100} height={100}
                                   layout={"responsive"}/>

                            <div className={'flex flex-col gap-3'}>
                                <Badge>Coming September 2025</Badge>
                                <h3 className={'text-2xl font-bold'}>Essence Master App</h3>
                                <p>The central application of the ecosystem. In it, you can track your balance, receive
                                    news about new games and services, participate in community events and stay up to
                                    date with the development of the Essence token.</p>
                            </div>
                        </div>

                        <div className={'p-10 rounded-3xl bg-white text-black flex flex-col'}>
                            <Image src={'/imgs/essence-rift-logo.svg'} alt={'ma logo'} width={100} height={100}
                                   layout={"responsive"}/>

                            <div className={'flex flex-col gap-3'}>
                                <Badge>Coming October 2025</Badge>
                                <h3 className={'text-2xl font-bold'}>Essence Rifts</h3>
                                <p>The first game in the Essence ecosystem. Energy gaps appear on the real world map. If
                                    you are near such a gap, you can absorb its energy and replenish your balance.</p>
                            </div>
                        </div>

                        <div className={'p-10 rounded-3xl bg-white text-black flex flex-col'}>
                            <Image src={'/imgs/essence-vpn-logo.svg'} alt={'ma logo'} width={100} height={100}
                                   layout={"responsive"}/>

                            <div className={'flex flex-col gap-3'}>
                                <Badge>Coming November 2025</Badge>
                                <h3 className={'text-2xl font-bold'}>Essence VPN</h3>
                                <p>A fast and secure VPN service within the Essence ecosystem. It allows you to use an
                                    open connection, bypass blocking and maintain anonymity on the network.</p>
                            </div>
                        </div>

                        <div className={'p-10 rounded-3xl bg-white text-black flex flex-col'}>
                            <Image src={'/imgs/essence-heroes-logo.svg'} alt={'ma logo'} width={100} height={100}
                                   layout={"responsive"}/>

                            <div className={'flex flex-col gap-3'}>
                                <Badge>Coming January 2026</Badge>
                                <h3 className={'text-2xl font-bold'}>Essence Heroes</h3>
                                <p>This is an IDLE RPG in the Essence ecosystem.
                                    Create and develop your hero, upgrade skills and equipment, and then fight other
                                    players.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}