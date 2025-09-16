"use client";

export default function PrimaryButton({children}) {
    return (
        <button className={'cursor-pointer flex items-center gap-1 bg-primary text-breeze-white ps-5 pe-5 pt-2 pb-2 font-medium rounded-full w-fit hover:bg-[var(--primary-color-faded)] transition-all'}>
            {children}
        </button>
    )
}