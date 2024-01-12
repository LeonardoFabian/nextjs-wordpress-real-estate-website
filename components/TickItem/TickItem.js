import { faCheckCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const TickItem = ({children}) => {
    return (
        <div className="max-w-5xl mx-auto grid grid-cols-[50px_1fr] gap-4 my-6">
            <div className="flex items-center justify-center text-3xl text-green-500">
                {<FontAwesomeIcon icon={faCircleCheck} />}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}