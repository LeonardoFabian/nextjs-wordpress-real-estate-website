import Image from "next/image";
import logotipo from '../../public/logotipo.svg';

export const Logotipo = ({width, height, classes}) => {
    return (
        <Image
            src={logotipo}
            alt="Logotipo"
            height={height || "35"}
            width={width || "250"}
            className={`object-contain ${classes}`}
        />
    )
}