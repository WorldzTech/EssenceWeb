import Image from "next/image";


export default function EssenceLogo({size}) {
    return (
        <Image src={"/imgs/EssenceLogo.svg"} alt={"essence logo"} width={size} height={size}/>
    )
}