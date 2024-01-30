export const Textarea = ({...rest}) => {
    return (
        <textarea {...rest} className="block w-full rounded bg-slate-200 border-slate-400 border-2 p-4 hover:border-slate-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"></textarea>
    )
}