import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonLink } from "components/ButtonLink"
import { Copyright } from "components/Copyright"
import { Input } from "components/Input"
import { Logotipo } from "components/Logotipo"
import Link from "next/link"
import { LegalPages } from "./LegalPages"
import { FooterLinks } from "./FooterLinks"
import { FooterMenu } from "./FooterMenu"
import { SocialLinks } from "components/SocialLinks"
import { ContactInfo } from "./ContacInfo"
import { WPForm } from "components/WPForm"
import CookiesAdvice from "components/CookiesAdvice/CookiesAdvice"

export const Footer = ({wpForms, socialNetworksTitle, socialNetworks, emails, phones, addresses, openingHours, footerMenuTitle, footerMenuItems, footerLinksTitle, footerQuickLinks, legalMenuTitle, legalPages, companySettings}) => {

    // console.log("FOOTER PROPS: ", props);
//    console.log("FOOTER MENU TITLE: ", footerMenuTitle);
//    console.log("FOOTER MENU ITEMS: ", footerMenuItems);
//    console.log("SOCIAL MENU TITLE: ", socialMenuTitle);
//    console.log("COMPANY SETTINGS: ", companySettings);


    // const wpFormShortcode = `[wpforms id="${wpForms[0].formId}"]`;

    const description = !!companySettings[0].description ? companySettings[0].description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id lorem mauris. Nulla semper interdum diam, ut tristique elit. Pellentesque ut mauris augue. Nulla non est convallis, pretium tellus et, pulvinar urna.";
    const address = !!companySettings[0].address ? companySettings[0].address : "Avenida/Calle, Número/apto, Ciudad";
    const email = !!companySettings[0].email ? companySettings[0].email : "info@candelarioconsultores.com";
    const phone = !!companySettings[0].phone ? companySettings[0].phone : "9999999999";

    return (
        <>
            <footer>
                <CookiesAdvice />
                <div className="max-w-full bg-slate-800 text-slate-500 text-sm xl:text-xs py-10 md:py-20">
                    <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 xl:gap-6">
                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            <Logotipo />
                            <div className="my-5 leading-5">
                            {description}
                            {/* Nuestra experiencia en el sector inmobiliario, nos permite satisfacer todas las necesidades de nuestros clientes, brindandoles una asesoría profesional personalizada y la satisfacción de los mismos. */}
                            </div>
                        </div>
                        <div className="col-span-1">
                            {/* <h6 className="text-sm font-semibold text-slate-300">Nuestra Compañia</h6> */}
                            {/* <div className="my-5"> */}
                                <FooterMenu title={footerMenuTitle} items={footerMenuItems} />
                            {/* </div> */}
                            {/* <ul className="flex flex-col gap-2 my-5">
                                <li>Sobre nosotros</li>
                                <li>Propiedades</li>
                                <li>Contactar</li>
                            </ul> */}
                            {/* <h6 className="text-sm font-semibold text-slate-300">Legal Pages</h6>
                            <div className="my-5"> */}
                                <LegalPages title={legalMenuTitle} items={legalPages} />
                            {/* </div> */}
                        </div>
                        <div className="col-span-1">
                            {/* <h6 className="text-sm font-semibold text-slate-300">Quick Links</h6>
                            <div className="my-5"> */}
                                <FooterLinks title={footerLinksTitle} items={footerQuickLinks} />
                            {/* </div> */}
                            {/* <ul className="flex flex-col gap-2 my-5">
                                <li>Comprar</li>
                                <li>Rentar</li>
                                <li>Vender</li>
                            </ul> */}
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            <ContactInfo emails={emails} phones={phones} addresses={addresses} openingHours={openingHours} />
                            {/* <h6 className="text-sm font-semibold text-slate-300">Contáctanos</h6>
                            <div className="my-5">
                                <div className="flex items-center gap-4 my-3">
                                    <div className="flex items-center justify-center">
                                        <FontAwesomeIcon icon={faLocationDot} size="lg" />
                                    </div>
                                    <div className="flex-1">
                                        {address}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 my-3">
                                    <div className="flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} size="lg" />
                                    </div>
                                    <div className="flex-1">
                                        <Link 
                                            href={`tel:+${phone}`}
                                            className="cursor-pointer"
                                        >
                                            {phone}
                                        </Link>                                    
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 my-3">
                                    <div className="flex items-center justify-center">
                                        <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                    </div>
                                    <div className="flex-1">
                                        <Link 
                                            href={`mailto:${email}`}
                                            className="cursor-pointer"
                                        >
                                            {email}
                                        </Link>                                    
                                    </div>
                                </div>
                            </div> */}
                            {/* <h6 className="text-sm font-semibold text-slate-300">Síguenos</h6>
                            <div className="my-5"> */}
                                <SocialLinks title={socialNetworksTitle} items={socialNetworks} />
                            {/* </div> */}
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-2">
                            
                            {/* {wpForms.map(form => (
                                <WPForm shortcode={wpFormShortcode} />
                            ))} */}
                            <h6 className="text-sm font-semibold text-slate-300">Boletín de Noticias</h6>
                            <div className="flex flex-col gap-2 my-5">
                                <div>
                                    Lorem ipsun dolor si namu este es un ejemplo
                                </div>
                                <div>
                                    <Input type="email" placeholder="Introduce tu correo electrónico" />
                                    <ButtonLink destination="/contact-us" className="btn btn-primary">
                                    Suscríbete
                                    </ButtonLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Copyright companyName={companySettings[0].name} />
            </footer>
        </>        
    )
}