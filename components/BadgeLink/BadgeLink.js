import Link from "next/link"

export const BadgeLink = ({children, uri, className}) => {
    return (
        <Link href={uri}>
            <div className={`${className} absolute left-4 transition-all duration-300 bg-slate-800 text-white hover:bg-yellow-400 hover:text-slate-700 bg-opacity-20 px-3 py-1 rounded-full`}>
                {children}
            </div>
        </Link>
    )
}