export const Badge = ({children, className}) => {
    return (
        <div className={`${className} text-xs lg:text-base font-medium transition-all duration-300 bg-slate-800 text-slate-600 hover:text-slate-800 bg-opacity-20 hover:bg-opacity-30 inline-flex items-center justify-center px-3 py-1 rounded-md`}>
            {children}
        </div>
    )
}