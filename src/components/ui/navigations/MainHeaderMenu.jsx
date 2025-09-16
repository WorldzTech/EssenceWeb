import EssenceLogo from "@/components/ui/other/EssenceLogo";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import TransparentButton from "@/components/ui/buttons/TransparentButton";
import Link from "next/link";
import Spark from "@/components/ui/icons/vector/spark";
import WhiteButton from "@/components/ui/buttons/TransparentButton";

export default function MainHeadMenu() {
    return (
        <div className={'p-5 flex items-center justify-between w-full bg-primary rounded-full mt-5'}>
            <Link href={"/"}><Spark size={50} /></Link>

            <div className={'flex items-center gap-5 max-lg:hidden'}>
                <Link href={"/"}><p className={'text-breeze-white'}>О проекте</p></Link>
                <Link href={"/about"}><p className={'text-breeze-white'}>Экосистема</p></Link>
                <Link href={"/ecosystem"}><p className={'text-breeze-white'}>Новости</p></Link>

                <WhiteButton>Join</WhiteButton>
            </div>

            <div className={'hidden max-lg:block'}>
                <WhiteButton>---</WhiteButton>
            </div>
        </div>
    )
}