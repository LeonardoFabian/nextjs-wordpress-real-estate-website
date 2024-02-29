import { ButtonLink } from "components/ButtonLink";
import { Heading } from "components/Heading";
import Image from "next/image";
import Link from "next/link";
import { mapAgent } from "utils/mapAgent";

export const AgentCard = ({user}) => {

    const agent = mapAgent(user);

    console.log("AGENT: ", agent);
    
    return (
        <div className={`component-agent-card card w-full flex flex-col justify-between items-stretch`}>
            <div className="bg-gray-300 bg-opacity-30 hover:bg-opacity-70 transition-all duration-300 ease-in h-96 w-full overflow-hidden relative rounded-xl">
                {
                    agent.profilePicture
                    ? 
                    <Image 
                        alt="Agent Image"
                        src={agent.profilePicture}
                        fill 
                        className="object-cover px-2"
                    />
                    :
                    <Image 
                        alt="Agent Image"
                        src="/default-profile-picture-2-600x900.svg"
                        fill 
                        className=" object-cover px-2"
                    />
                }
                
            </div>
            <div className="mx-auto block lg:flex justify-between items-center py-4 px-4 bg-white w-full">
                <div className="text-base text-center lg:text-left py-4 lg:py-0">
                    <p className="font-semibold text-lg">{agent.firstName} {agent.lastName}</p>
                    <p className="text-slate-600 uppercase text-xs">Agente Inmobiliario</p>
                </div>
                <ButtonLink destination={agent.uri} className="text-xs">Ver Perfil</ButtonLink>
                {/* <Link href={agent.uri} className="text-xs cursor-pointer text-yellow-500 hover:text-yellow-600">
                    Ver Perfil
                </Link> */}
            </div>
        </div>
    );

}