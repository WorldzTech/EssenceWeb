import EssenceLogo from "@/components/ui/other/EssenceLogo";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import TransparentButton from "@/components/ui/buttons/TransparentButton";

export default function MainHeadMenu() {
    return (
        <div className={'p-5 flex items-center justify-between w-full'}>
            <EssenceLogo size={50} />

            <div className={'flex items-center gap-5'}>
                <TransparentButton>About</TransparentButton>
                <TransparentButton>Ecosystem</TransparentButton>
                <TransparentButton>News</TransparentButton>

                <PrimaryButton>Join</PrimaryButton>
            </div>
        </div>
    )
}