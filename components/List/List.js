export const List = ({children}) => {
    return (
        <div className="container max-w-5xl my-5 flex flex-col">
            <ul className="list-disc">
                {children}
            </ul>
        </div>
    )
}