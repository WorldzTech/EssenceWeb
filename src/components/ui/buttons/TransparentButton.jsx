"use client";

export default function WhiteButton({children}) {
    return (
        <button className={'bg-breeze-white cursor-pointer font-medium ps-5 pe-5 pt-2 pb-2 rounded-full w-fit transition-all'}>
            {children}
        </button>
    )
}