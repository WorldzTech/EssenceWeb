import MainHeadMenu from "@/components/ui/navigations/MainHeaderMenu";
import EssenceLogo from "@/components/ui/other/EssenceLogo";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import Link from "next/link";

export default function Page() {
    return (
        <div className={'container m-auto'}>
            <div className={'absolute top-0 container'}>
                <MainHeadMenu />
            </div>

            <div className={'h-screen flex items-center pb-20 justify-between'}>
                <div className={'flex flex-col gap-2 flex-1'}>
                    <EssenceLogo size={16} labeled={true} />
                    <h1 className={'text-7xl font-bold'}>White Paper</h1>
                    <p>White Paper is the official document of the Essence project, in which we describe in detail the idea, tokenomics and development plans.</p>

                    <div className={'flex gap-5 mt-5'}>
                        <Link href={"/docs/white-paper-ess-en.pdf"} target={"_blank"}><PrimaryButton>Read in EN</PrimaryButton></Link>
                        <Link href={"/docs/white-paper-ess-ru.pdf"} target={"_blank"}><PrimaryButton>Read in RU</PrimaryButton></Link>
                    </div>
                </div>
                <i className='bx bx-file-report text-[300px] text-primary text-center flex-1'></i>
            </div>
        </div>
    )
}