import Image from "next/image"

export const Cover = ({children, background}) => {
    return (
        <div className="h-screen bg-slate-800 text-white relative min-h-[400px] flex justify-center items-center relative">
            {
                background 
                ? <Image 
                    alt="Cover" 
                    src={background} 
                    fill 
                    priority
                    className="mix-blend-soft-light object-cover" 
                />
                : null
            }            
            <div className="max-w-5xl z-10">
                {children}
            </div>
        </div>
    )
}