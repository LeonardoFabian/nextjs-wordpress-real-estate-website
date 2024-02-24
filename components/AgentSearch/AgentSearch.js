import { useEffect } from "react";

export const AgentSearch = () => {

    useEffect(() => {
        const agents = async () => {
            const response = await fetch(`/api/users`);
            const data = await response.json();
            console.log("AGENT SEARCH FETCH DATA: ", data);
        }
        agents();
    }, []);

    return (
        <div>Buscador de Agentes</div>
    )
}