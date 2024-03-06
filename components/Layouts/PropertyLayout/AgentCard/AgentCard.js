import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faGlobe, faMapMarkerAlt, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Heading } from "components/Heading"
import Image from "next/image"
import Link from "next/link"

export const AgentCard = ({user}) => {

    console.log("AGENT CARD USER: ", user);

    const hasJobTitle = Boolean(user.node.userMetadata.jobTitle);
    const hasEmail = Boolean(user.node.userMetadata.contactInformation.userEmail);
    const hasPhone = Boolean(user.node.userMetadata.contactInformation.userPhone);
    const hasWhatsapp = Boolean(user.node.userMetadata.contactInformation.userWhatsapp);
    const hasAddress = Boolean(user.node.userMetadata.contactInformation.userAddress);
    const hasWebsite = Boolean(user.node.userMetadata.contactInformation.userWebsite);
    const hasLinkedin = Boolean(user.node.userMetadata.contactInformation.userLinkedin);

    return (
        <section className="property-agent-card bg-white border border-1 border-slate-300 rounded-lg p-4">
            <Heading level="5" content="Agentes de la propiedad" className="my-0" />
            <div className="flex items-center space-x-4 py-3">
                <Link href={user.node.uri} className="c-agent-card__agent-photo h-20 w-20 overflow-hidden bg-slate-100 rounded-lg">
                    {
                        user.node.userMetadata.profilePicture 
                        ? 
                        <Image 
                            alt="Agent Image"
                            src={user.node?.userMetadata?.profilePicture?.sourceUrl}
                            width="250"
                            height="250"
                            className="h-20 w-20 object-cover"
                        />
                        : 
                        <Image 
                            alt="Agent Image"
                            src="/default-profile-picture-600x900.svg"
                            width="250"
                            height="250"
                            className="h-20 w-20  object-cover"
                        />
                    }  
                </Link>
                <div className="flex flex-1 flex-col gap-3">
                    <div className="flex flex-col">
                        <Link href={user.node.uri} className="hover:underline">
                            <span className="c-agent-card__agent-name font-semibold text-slate-800">{user.node.firstName + " " + user.node.lastName}</span>
                        </Link>
                        {hasJobTitle && ( <span className="c-agent-card__agent-job-title text-slate-600">{user.node.userMetadata.jobTitle}</span>)}
                    </div>                    
                </div>
            </div>
            <div>
                {hasAddress && (
                    <div className="flex items-start gap-3 py-3 text-sm">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="xl" />
                        {user.node.userMetadata.contactInformation.userAddress}
                    </div>
                )}
                <ul className="flex items-center gap-3 py-4">
                    {hasEmail && (
                        <li>
                            <Link 
                                href={`mailto:${user.node.userMetadata.contactInformation.userEmail}`}
                                className="hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 px-2.5 py-2 border border-slate-500 rounded-lg"
                                title="Email"
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="xl" />
                            </Link>
                        </li>
                    )}
                    {hasPhone && (
                        <li>
                            <Link 
                                href={`tel:${user.node.userMetadata.contactInformation.userPhone}`}
                                className="hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 px-2.5 py-2 border border-slate-500 rounded-lg"
                                title="Teléfono"
                            >
                                <FontAwesomeIcon icon={faPhone} size="xl" />
                            </Link>
                        </li>
                    )}
                    {hasWhatsapp && (
                        <li>
                            <Link 
                                href={`https://wa.me/${user.node.userMetadata.contactInformation.userWhatsapp}`}
                                className="hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 px-2.5 py-2 border border-slate-500 rounded-lg"
                                title="WhatsApp"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                            </Link>
                        </li>
                    )}
                    {hasWebsite && (
                        <li>
                            <Link 
                                href={user.node.userMetadata.contactInformation.userWebsite}
                                className="hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 px-2.5 py-2 border border-slate-500 rounded-lg"
                                title="Sitio Web"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faGlobe} size="xl" />
                            </Link>
                        </li>
                    )}
                    {hasLinkedin && (
                        <li>
                            <Link 
                                href={`https://www.linkedin.com/in/${user.node.userMetadata.contactInformation.userLinkedin}`}
                                className="hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 px-2.5 py-2 border border-slate-500 rounded-lg"
                                title="LinkedIn"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="xl" />
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
}