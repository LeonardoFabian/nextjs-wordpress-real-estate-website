import Link from "next/link";

export const ButtonLink = ({destination, label}) => {
    return (
        <Link href={destination} className='btn inline-block text-center'>
            {label}
        </Link>
    );
};