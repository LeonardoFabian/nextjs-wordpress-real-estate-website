export const CheckBox = ({ ...rest }) => {
    return (
        <input 
            type="checkbox" 
            {...rest}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
    )
}