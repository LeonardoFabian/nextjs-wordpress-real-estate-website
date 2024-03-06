import { useContentType } from "context/ContentTypeContext";
import Layout from "../Layout";
import { Heading } from "components/Heading";
import { Cover } from "components/Cover";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Properties } from "components/PropertiesList/Properties";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const UserLayout = ({user}) => {
    console.log("USER LAYOUT: ", user);

    const {firstName, lastName, description, properties, userMetadata} = user;

    const hasFirstName = Boolean(firstName);
    const hasLastName = Boolean(lastName);
    const hasDescription = Boolean(description);
    const hasProperties = Boolean(properties);
    const hasJobTitle = Boolean(userMetadata.jobTitle);
    const hasEmail = Boolean(userMetadata.contactInformation.userEmail);
    const hasPhone = Boolean(userMetadata.contactInformation.userPhone);
    const hasAddress = Boolean(userMetadata.contactInformation.userAddress);
    const hasProfilePicture = Boolean(userMetadata.profilePicture);
    const hasWhatsapp = Boolean(userMetadata.contactInformation.userWhatsapp);
    const hasWebsite = Boolean(userMetadata.contactInformation.userWebsite);
    const hasLinkedin = Boolean(userMetadata.contactInformation.userLinkedin);




    return (
        <Layout title={`User Layout`}>
            <section className={`user`}>
                <Cover className="h-screen lg:h-60">
                    <div className="w-full lg:max-w-5xl mx-auto block lg:flex items-center gap-6">
                        <div className="bg-gray-300 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 ease-in h-64 lg:h-60 w-56 lg:w-60 mx-auto overflow-hidden relative rounded-xl text-center">
                            {hasProfilePicture 
                            ?
                            <Image 
                                alt="Agent profile picture"
                                src={userMetadata.profilePicture.sourceUrl}
                                fill
                                className="object-cover w-full"
                            />
                            :
                            <Image 
                                alt="Agent profile picture"
                                src="/default-profile-picture-600x900.png"
                                fill
                                className="object-cover w-full"                                
                            />
                            }
                        </div>
                        <div className="block lg:flex-1">
                            <div className="my-3 lg:mb-3 text-center lg:text-left">
                                <p className="text-2xl font-semibold">{firstName} {lastName}</p>
                                {hasJobTitle && <p className="text-sm">{userMetadata.jobTitle}</p>}
                            </div>
                            <div className="my-10 lg:my-5 space-y-3 lg:space-y-1.5">
                                {hasEmail && (                              
                                    <div>
                                    <Link href={`mailto:${userMetadata.contactInformation.userEmail}`} className="text-sm flex items-start gap-x-3 my-2">
                                        <FontAwesomeIcon icon={faEnvelope} size="sm" />
                                        {userMetadata.contactInformation.userEmail}
                                    </Link> 
                                    </div>               
                                )}
                                {hasPhone && (                              
                                    <div>
                                    <Link href={`tel:${userMetadata.contactInformation.userPhone}`} className="text-sm flex items-start gap-x-3 my-2">
                                        <FontAwesomeIcon icon={faPhone} size="sm" />
                                        {userMetadata.contactInformation.userPhone}
                                    </Link>  
                                    </div>              
                                )}
                                {hasAddress && (                              
                                   <div>
                                   <Link href={`${userMetadata.contactInformation.userAddress}`} className="text-sm flex items-start gap-x-3 my-2">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} size="sm" />
                                        {userMetadata.contactInformation.userAddress}
                                    </Link>  
                                   </div>              
                                )}
                            </div>
                            <ul className="flex items-center gap-3 my-3">

                                {hasWhatsapp && (
                                    <li>
                                        <Link 
                                            href={`https://wa.me/${userMetadata.contactInformation.userWhatsapp}`}
                                            className="bg-slate-100 bg-opacity-50 hover:bg-opacity-75 hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 px-2.5 py-2 border border-slate-500 rounded-lg"
                                            title="WhatsApp"
                                        >
                                            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                                        </Link>
                                    </li>
                                )}
                                {hasWebsite && (
                                    <li>
                                        <Link 
                                            href={userMetadata.contactInformation.userWebsite}
                                            className="bg-slate-100 bg-opacity-50 hover:bg-opacity-75 hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 px-2.5 py-2 border border-slate-500 rounded-lg"
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
                                        href={`https://www.linkedin.com/in/${userMetadata.contactInformation.userLinkedin}`}
                                        className="bg-slate-100 bg-opacity-50 hover:bg-opacity-75 hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 px-2.5 py-2 border border-slate-500 rounded-lg"
                                        title="LinkedIn"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} size="xl" />
                                    </Link>
                                </li>
                            )}
                            </ul>
                        </div>
                    </div>
                </Cover>
                <div className="w-full lg:max-w-5xl px-4 mx-auto my-10 space-y-10">
                    {hasDescription && (
                        <div className="agent-description">
                            <Heading level="3" content={`Más acerca de ${firstName} ${lastName}`} textAlign="left" />
                            <p>{description}</p>
                        </div>
                    )}
                    {!!hasProperties && (
                        <div className="properties-list">
                            <Heading level="3" content={`Inmuebles publicados por ${firstName} ${lastName}`} textAlign="left" />
                            <div className="px-4 grid grid-flow-row grid-cols-1 md:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-45 items-stretch gap-x-10 lg:gap-x-8 2xl:gap-x-6 gap-y-4">
                                <Properties properties={properties.edges} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    )
}

export default UserLayout;