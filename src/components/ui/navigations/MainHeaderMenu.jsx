import EssenceLogo from "@/components/ui/other/EssenceLogo";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import TransparentButton from "@/components/ui/buttons/TransparentButton";
import Link from "next/link";

export default function MainHeadMenu() {
    return (
        <div className={'p-5 flex items-center justify-between w-full'}>
            <Link href={"/"}><EssenceLogo size={50} /></Link>

            <div className={'flex items-center gap-5'}>
                <Link href={"/"}><TransparentButton>Home</TransparentButton></Link>
                <Link href={"/about"}><TransparentButton>About</TransparentButton></Link>
                <Link href={"/ecosystem"}><TransparentButton>Ecosystem</TransparentButton></Link>

                <PrimaryButton>Join</PrimaryButton>
            </div>
        </div>
    )
}