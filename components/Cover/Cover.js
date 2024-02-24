import Image from "next/image"

export const Cover = ({children, background}) => {
    return (
        <div className="max-w-full h-screen lg:h-full bg-slate-800 text-white relative min-h-[450px] flex justify-center items-center">
            {
                background 
                ? <Image 
                    alt="Cover" 
                    src={background} 
                    fill 
                    className="mix-blend-soft-light object-cover" 
                    placeholder="blur"
                    blurDataURL={background}
                />
                : null
            }            
            <div className="container z-10 lg:relative top-[75px] lg:top-0 bottom-0 left-0 right-0">
                {children}
            </div>
        </div>
    )
}