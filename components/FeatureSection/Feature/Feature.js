import Image from "next/image"

export const Feature = ({title, content, imageId, imageUrl, imageAlt = "", foregroundColor, backgroundColor, children}) => {

    const colorStyle = foregroundColor ? {color: foregroundColor} : {};
    const backgroundColorStyle = backgroundColor ? {backgroundColor: backgroundColor} : {};

    return (
        <div className="w-full mx-auto p-8 rounded-lg border border-indigo-50 shadow-lg shadow-indigo-200/40 text-center sm:text-left" style={{ 
            ...backgroundColorStyle
         }}>
            <div className="flex items-center sm:items-start justify-center sm:justify-start w-14 h-14 mb-4 rounded-full bg-transparent mx-auto sm:mx-0 sm:w-16 sm:h-16 relative">
                <Image 
                    src={imageUrl} 
                    alt={imageAlt || "Feature image"}
                    fill 
                    className={`wp-image-${imageId} w-12 h-12 text-deep-purple-accent-400 sm:w-14 sm:h-14`}
                />
            </div>
            <div className="py-3">
            <h6 className="mb-3 text-xl font-bold leading-5" style={{ ...colorStyle }}>{title}</h6>
            <p className="mb-3 text-sm text-gray-900">{content}</p>
            </div>
            {children}
        </div>
    )
}