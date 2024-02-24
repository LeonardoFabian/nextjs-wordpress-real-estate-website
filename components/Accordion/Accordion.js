import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

export const Accordion = ({children, label}) => {

    const filterSection = `filter-section-${label}`;
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <h3 className="-my-3 flow-root">
                {/* Expand/collapse section button */}
                <button onClick={handleClick} type="button" className="relative flex w-full items-center justify-between bg-white py-3 text-base text-gray-800 hover:text-gray-500 transition-all ease-in duration-300 border-b border-solid cursor-pointer border-slate-100 group" aria-controls={filterSection} aria-expanded="false">
                    <span className="font-semibold text-gray-900">{label}</span>
                    <span className="ml-6 flex items-center">

                        {isOpen ? (
                            <>
                                <FontAwesomeIcon icon={faMinus} size="xl" />
                                {/* Collapse icon, show/hide based on section open state. */}
                                {/* <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                                </svg> */}
                            </>
                        ) : (
                            <>
                                <FontAwesomeIcon icon={faPlus} size="xl"/>
                                {/* Expand icon, show/hide based on section open state. */}
                                {/* <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                </svg> */}
                            </>
                        )}

                        
                    </span>
                </button>
            </h3>
            {/* Filter section, show/hide based on section state. */}
            <div 
                id={filterSection}
                className={
                    isOpen
                    ? 'h-auto ease-in transition-all duration-300 pt-4'
                    : 'h-0 py-0 overflow-hidden transition-all duration-300 ease-in-out'
                } 
            >
                <div className="space-y-3 mt-4">
                    {children}
                </div>
            </div>
        </>
    )
}