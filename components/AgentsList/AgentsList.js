import { AgentCard } from "components/AgentCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import queryString from 'query-string'
import { AgentSearch } from "components/AgentSearch";
import { Heading } from "components/Heading";

export const AgentsList = () => {

    const [agents, setAgents] = useState([]);
    // const router = useRouter();

    const getAllUsers = async () => {

        // const {firstName, lastName, userAddress} = queryString.parse(window.location.search);

        // const agentFilters = {};

        // if(firstName) {
        //     agentFilters.firstName = firstName;
        // }

        // if(lastName) {
        //     agentFilters.lastName = lastName;
        // }

        // if(userAddress) {
        //     agentFilters.userAddress = userAddress;
        // }

        // const responseOptions = {
        //     method: "POST",
        //     body: JSON.stringify({
        //         ...agentFilters,
        //     }),
        // };
            
        const response = await fetch(`/api/users`);
        // const response = await fetch(`/api/users`, responseOptions);
        const data = await response.json();
        // console.log("USERS FETCH DATA: ", data);

        setAgents(data.users);
    }

    useEffect(() => {  
        getAllUsers();
    }, []);

    // const handleSearch = async ({firstName, lastName, userAddress}) => {
    //     if(router.query.uri) {
    //         await router.push(
    //             `${router.query.uri.join("/")}?firstName=${firstName}&lastName=${lastName}&userAddress=${userAddress}`,
    //             null,
    //             {shallow: true}
    //         );
    //     } else {
    //         await router.push(
    //             `/agents?firstName=${firstName}&lastName=${lastName}&userAddress=${userAddress}`,
    //             null,
    //             {shallow: true}
    //         );
    //     }
    //     getAllUsers();
    // }

    return (
        <div className="component-agent-list py-5 max-w-full mx-auto text-gray-800 relative">
        <header className="flex flex-col py-2 px-4">
                        <Heading level="5" content="Agentes" textAlign="left" className="font-semibold" />   
                        <div className="flex items-center justify-between">
                            {/* <span className="text-xs">{totalResults} Agentes encontrados</span> */}
                            {/* <span className="text-xs">Ordenar por Más Recientes</span> */}
                        </div>
                    </header>
            <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-4">
                {/* <div className="col-span-1">
                    <AgentSearch onSearch={handleSearch} />
                </div> */}
                {/* <div className="col-span-1 lg:col-span-4"> */}
                    
                    <div className="agents-list col-span-1 md:col-span-4 lg:col-span-6">
                        <div className="px-4 grid grid-flow-row grid-cols-1 md:grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 items-stretch gap-x-10 lg:gap-x-8 2xl:gap-x-6 gap-y-4">
                            {agents.map(agent => (
                                <AgentCard key={agent.id} user={agent} />
                            ))}
                        </div>
                    </div>
                {/* </div> */}
            </div>            
        </div>
    )
}