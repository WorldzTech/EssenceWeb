"use client";

export default function TransparentButton({children}) {
    return (
        <button className={'cursor-pointer font-bold text-back ps-5 pe-5 pt-2 pb-2 rounded-full w-fit hover:underline transition-all'}>
            {children}
        </button>
    )
}