import { Heading } from "components/Heading"
import Image from "next/image"

export const AgentCard = ({name, image, phone, email}) => {
    return (
        <section className="property-agent-card bg-white border border-1 border-slate-300 rounded-lg p-4 space-y-3">
            <Heading level="5" content="Agentes de la propiedad" className="my-0" />
            <div className="flex items-center space-x-4">
                <div className="h-16 w-16 overflow-hidden bg-slate-100 rounded-lg">
                    {
                        image 
                        ? <Image 
                            alt="Agent Image"
                            src={image}
                            width="16"
                            height="16"
                            className="h-16 w-16 object-cover"
                        />
                        : null
                    }  
                </div>
                <div className="flex-1">
                    <p className="font-medium text-slate-800">{name}</p>
                </div>
            </div>
        </section>
    )
}