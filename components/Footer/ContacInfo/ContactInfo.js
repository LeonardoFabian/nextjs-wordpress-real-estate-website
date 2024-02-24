import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const ContactInfo = (props) => {

    // console.log("CONTACT INFO: ", props);

    const {emails, phones, addresses, openingHours} = props;

    return (
        <>
            <h6 className="text-base font-semibold text-slate-300">Contáctanos</h6>

            <div className="component-contact-info space-y-5 my-5">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-start">
                        <FontAwesomeIcon icon={faLocationDot} size="lg" />
                    </div>
                    <div className="flex-1">
                        <ul className="component-contact-info-addresses">
                            {addresses.map(address => (
                                <>
                                    {!!address.publish && !!address.asDefaultAddress && (
                                        <li key={address.id} className="cursor-pointer" title={address.label}>
                                            <Link target="_blank" href={`https://maps.google.com/?q=${address.street} ${address.number} ${address.neighborhood}`}>
                                                <address className="not-italic space-y-1" style={{ fontStyle: "normal" }}>
                                                    <p>{address.street} #{address.number}, {address.neighborhood}</p>
                                                    <p>{address.city}, {address.state}</p>
                                                    <p>{address.zip}</p>
                                                    <p>{address.country}</p>
                                                </address>
                                            </Link>
                                        </li>
                                    )}
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
                {!!phones.length > 0 && (
                    <div className="flex items-center gap-4 my-3">
                        <div className="flex items-center justify-center">
                            <FontAwesomeIcon icon={faPhone} size="lg" />
                        </div>
                        <div className="flex-1">
                            <ul className={`component-contact-info-phone-list flex flex-wrap divide-x divide-slate-500 space-y-1`}>
                                {phones.map((phone, i) => (
                                    <>
                                        {!!phone.publish && (
                                            <li key={phone.id} className={`cursor-pointer ${phones.length > 1 && i != 0 ? 'ml-2 px-2' : ''}`} title={phone.label}>
                                                <Link 
                                                    href={`tel:+${phone.number}`}
                                                    className="cursor-pointer"
                                                >
                                                    {phone.number}
                                                </Link>   
                                            </li>
                                        )}
                                    </>
                                ))}
                            </ul>                                                         
                        </div>
                    </div>
                )}
                {!!emails.length > 0 && (
                    <div className="flex items-center gap-4 my-3">
                        <div className="flex items-center justify-center">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </div>
                        <div className="flex-1">
                            <ul className="component-contact-info-email-list space-y-1">
                                {emails.map(email => (
                                    <>
                                        {!!email.publish && (
                                            <li key={email.id} className="cursor-pointer" title={email.label}>
                                            <Link 
                                                href={`mailto:${email.address}`}
                                                className="cursor-pointer"
                                            >
                                                {email.address}
                                            </Link>  
                                        </li>
                                        )}
                                    </>                                    
                                ))}
                            </ul>                                                              
                        </div>
                    </div>
                )}     
                {!!openingHours.length > 0 && (
                    <div className="flex items-center gap-4 my-3">
                        <div className="flex items-center justify-center">
                            <FontAwesomeIcon icon={faClock} size="lg" />
                        </div>
                        <div className="flex-1">
                            <ul className="component-contact-info-email-list space-y-1">
                                {openingHours.map(hour => (
                                    <>
                                        {!!hour.publish && (
                                            <li key={hour.id} className="cursor-pointer" title={hour.day}>
                                                <p><span className="uppercase">{hour.day}</span> <span className="uppercase">{hour.open}</span> - <span className="uppercase">{hour.close}</span></p> 
                                            </li>
                                        )}
                                    </>                                    
                                ))}
                            </ul>                                                              
                        </div>
                    </div>
                )}            
            </div>
        </>
    )
}