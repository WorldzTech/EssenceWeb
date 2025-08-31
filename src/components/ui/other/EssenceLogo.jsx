import Image from "next/image";


export default function EssenceLogo({size, labeled=false}) {
    return (
        <div className={'flex gap-1 items-center'}>
            <Image src={"/imgs/EssenceLogo.svg"} alt={"essence logo"} width={size} height={size}/>
            {
                labeled && (
                    <p>Essence</p>
                )
            }
        </div>
    )
}