export default function GrayBox({children, className}) {
    return (
        <div className={'p-10 bg-[#F7F9FB] rounded-4xl ' + className}>
            
            {children}
        </div>
    )
}