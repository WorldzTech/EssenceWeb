import EssenceLogo from "@/components/ui/other/EssenceLogo";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import TransparentButton from "@/components/ui/buttons/TransparentButton";
import Link from "next/link";
import Spark from "@/components/ui/icons/vector/spark";
import WhiteButton from "@/components/ui/buttons/TransparentButton";

export default function MainHeadMenu() {
    return (
        <div className={'p-5 flex items-center justify-between w-full bg-white border-b border-gray-200 z-50 sticky'}>
            <Link href={"/"}><Spark size={50} /></Link>

            <div className={'flex items-center gap-5 max-lg:hidden'}>
                <Link href={"/"}><p>О проекте</p></Link>
                <Link href={"/about"}><p>Экосистема</p></Link>
                <Link href={"/ecosystem"}><p>Новости</p></Link>

                <PrimaryButton>Присоединиться</PrimaryButton>
            </div>

            <div className={'hidden max-lg:block'}>
                <WhiteButton><i className='bx  bx-dots-horizontal-rounded'></i></WhiteButton>
            </div>
        </div>
    )
}