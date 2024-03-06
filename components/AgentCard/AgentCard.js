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
            <div className="bg-gray-300 bg-opacity-30 hover:bg-opacity-70 transition-all duration-300 ease-in h-56 w-full overflow-hidden relative rounded-xl">
                {
                    agent.profilePicture
                    ? 
                    <Image 
                        alt="Agent profile picture"
                        src={agent.profilePicture?.sourceUrl}
                        fill 
                        className="object-cover"
                    />
                    :
                    <Image 
                        alt="Agent profile picture"
                        src="/default-profile-picture-600x900.svg"
                        fill 
                        className=" object-cover"
                    />
                }
                
            </div>
            <div className="mx-auto block py-4 px-4 bg-white w-full text-center">           
                <Link href={agent.uri} className="font-semibold text-base hover:underline">{agent.firstName} {agent.lastName}</Link>
                <p className="text-slate-600 uppercase text-xs">Agente Inmobiliario</p>          
            </div>
        </div>
    );

}