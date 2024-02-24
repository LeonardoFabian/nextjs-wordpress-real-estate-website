import { ButtonLink } from "components/ButtonLink";
import { Heading } from "components/Heading";
import Image from "next/image";
import Link from "next/link";

export const AgentCard = ({agent}) => {
    
    return (
        <div className={`component-agent-card card w-full mx-auto`}>
            <div className="h-64 max-w-md overflow-hidden relative bg-blue-100">
                <Image 
                    alt="Agent Image"
                    src={agent.avatar.url}
                    fill 
                    className="object-cover"
                />
            </div>
            <footer className="mx-auto block lg:flex justify-between items-center py-4 px-4">
                <div className="text-sm lg:text-xs text-center lg:text-left py-4 lg:py-0">
                    <p><strong>{agent.name}</strong></p>
                    <p>Agente Inmobiliario</p>
                </div>
                <ButtonLink label="Ver Perfil" destination={agent.uri} className="text-xs" />
                {/* <Link href={agent.uri} className="text-xs cursor-pointer text-yellow-500 hover:text-yellow-600">
                    Ver Perfil
                </Link> */}
            </footer>
        </div>
    );

}