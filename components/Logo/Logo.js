import Image from "next/image";
import logo from '../../public/logo.svg';

export const Logo = ({width, height, classes}) => {
    return (
        <Image
            src={logo}
            alt="Logo"
            height={height || "100"}
            width={width || "100"}
            className={`object-contain ${classes} h-[35px] lg:h-[50px]`}
        />
    )
}