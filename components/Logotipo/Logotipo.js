import Image from "next/image";
import logotipo from '../../public/logotipo.svg';

export const Logotipo = ({width, height, classes}) => {
    return (
        <Image
            src={logotipo}
            alt="Logotipo"
            height={height || "40"}
            width={width || "250"}
            className={`object-contain ${classes} h-[40px] lg:h-[48px]`}
        />
    )
}