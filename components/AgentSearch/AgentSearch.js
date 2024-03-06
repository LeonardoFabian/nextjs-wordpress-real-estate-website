import { useEffect, useState } from "react";
import queryString from 'query-string'
import { Heading } from "components/Heading";
import { Input } from "components/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faSearch } from "@fortawesome/free-solid-svg-icons";

export const AgentSearch = ({onSearch}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userAddress, setUserAddress] = useState("");

    const handleOnSearch = () => {
        onSearch({firstName, lastName, userAddress});
    }

    const clearFields = () => {
        const {
            firstName: firstNameInitial,
            lastName: lastNameInitial,
            userAddress: userAddressInitial
        } = queryString.parse(window.location.users);

        setFirstName(firstNameInitial || "");
        setLastName(lastNameInitial || "");
        setUserAddress(userAddressInitial || "");
    }

    const handleOnClear = () => {
        clearFields();
    }

    useEffect(() => {
        clearFields();
    }, []); 

    return (
         <aside className="flex flex-col bg-white h-screen lg:h-full overflow-hidden divide-y">
            <header className="flex items-center text-left py-2 px-4">
              <Heading level="5" content="Buscar agente" textAlign="left" className="font-semibold" />          
            </header>
            <div className="lg:overflow-hidden">
                <div className="relative py-3">
                    <span className="font-semibold text-gray-900">Nombre</span>
                    <Input type="text" placeholder="Nombre" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="relative py-3">
                    <span className="font-semibold text-gray-900">Apellido</span>
                    <Input type="text" placeholder="Apellido" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>          
            </div>
            <div className="flex lg:flex-col items-center justify-between gap-x-5 bottom-0 w-ful px-2 lg:w-auto h-[80px] lg:h-auto lg:space-x-0 py-2 lg:py-5">
            <button 
                    type="button"
                    className="btn btn-primary inline-block lg:!block lg:w-full text-sm" 
                    onClick={handleOnSearch}
                >
                    <FontAwesomeIcon icon={faSearch} className="mr-2" />Buscar
                </button>
                <button 
                    type="button"
                    className="btn btn-default inline-block lg:!block lg:w-full text-sm"
                    onClick={handleOnClear}
                >
                    <FontAwesomeIcon icon={faEraser} className="mr-2" />Limpiar
                </button>
            </div>
        </aside>
    );
}