import Image from "next/image";

export default function FeatureCard({image, imageSize, title, children}) {
    return (
        <div className={'bg-breeze-light-white text-breeze-light-black p-5 rounded-xl flex items-center gap-5 max-sm:grow lg:flex-col'}>
            {
                image && (
                    <img className={"h-16 md:h-32 xl:h-48 aspect-square"} src={image} alt={"tonpool"}/>
                )
            }

            <div>
                <p className={'text-blue-400'}>{title}</p>
                <p>{children}</p>
            </div>

        </div>
    )
}