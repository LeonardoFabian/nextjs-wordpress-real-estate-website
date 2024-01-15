import Link from "next/link";

export const ButtonLink = ({destination, label}) => {
    return (
        <a href={destination} className='btn inline-block text-center'>
            {label}
        </a>
    );
};