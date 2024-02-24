import { AgentCard } from "components/AgentCard";
import { useEffect, useState } from "react"

export const AgentsList = () => {

    const [agents, setAgents] = useState([]);

    useEffect(() => {

        const getAllUsers = async () => {
            const response = await fetch(`/api/users`);
            const data = await response.json();
            console.log("USERS FETCH DATA: ", data);

            setAgents(data.users);
        }

        getAllUsers();

    }, []);

    return (
        <div className="component-agent-list max-w-full lg:max-w-5xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 px-4">
            {agents.map(agent => (
                <AgentCard key={agent.id} agent={agent} />
            ))}
        </div>
    )
}