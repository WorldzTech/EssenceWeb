export default function Badge({children, type="primary"}) {

    let bgClass = "bg-[#C7ECFF]"
    let textClass = "text-[#0093E2]"

    return (
        <div className={`w-fit ${bgClass} ${textClass} rounded-full text-xs pt-1 pb-1 ps-5 pe-5 font-medium`}>
            {children}
        </div>
    )
}