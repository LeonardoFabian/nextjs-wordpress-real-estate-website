export const Label = ({children, ...rest}) => {
    return <label {...rest} className="text-slate-600 mb-2">
        {children}
    </label>
}