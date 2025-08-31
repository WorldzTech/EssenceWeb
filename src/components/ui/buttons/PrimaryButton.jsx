"use client";

export default function PrimaryButton({children}) {
    return (
        <button className={'cursor-pointer flex items-center gap-1 bg-[var(--primary-color)] text-white ps-5 pe-5 pt-2 pb-2 rounded-full w-fit hover:bg-[var(--primary-color-faded)] transition-all'}>
            {children}
        </button>
    )
}