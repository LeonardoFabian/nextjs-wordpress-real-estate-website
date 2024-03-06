import Image from "next/image"

export const Cover = ({children, background, className}) => {
    return (
        <div className="max-w-full h-full lg:h-full bg-slate-800 text-white relative min-h-[450px] flex flex-1 justify-center items-center">
            {
                background 
                ? 
                <Image 
                    alt="Cover image" 
                    src={background} 
                    fill 
                    className={`mix-blend-soft-light object-cover h-auto ${className ? className : ''}`} 
                />
                : 
                <Image 
                    alt="Cover image"
                    src="/default-featured-image.jpg"
                    fill
                    className={`mix-blend-soft-light object-cover h-auto ${className ? className : ''}`} 
                />
            }            
            <div className="container z-10 lg:relative top-[75px] lg:top-0 bottom-0 left-0 right-0 my-20 lg:my-12">
                {children}
            </div>
        </div>
    )
}