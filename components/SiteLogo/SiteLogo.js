import Image from "next/image";

export const SiteLogo = ({width, height, url, isLink, alt}) => {
    return (
        <Image
            src={url}
            alt={alt || "Site Logo"}
            height={height || "35"}
            width={width || "250"}
            className="object-contain"
        />
    )
}