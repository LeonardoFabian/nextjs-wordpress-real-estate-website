import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTiktok, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const getSocialIcon = (icon) => {

    icon = icon.toLowerCase();

    // console.log("ICON: ", icon);

    switch(icon) {
        case 'tiktok': {
            return (
                <div className="social-icon">
                    <FontAwesomeIcon icon={faTiktok} size="xl" />
                </div>
            )
        }
        case 'whatsapp': {
            return (
                <div className="social-icon">
                    <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                </div>
            )
        }
        case 'youtube': {
            return (
                <div className="social-icon">
                    <FontAwesomeIcon icon={faYoutube} size="xl" />
                </div>
            )
        }
        case 'linkedin': {
            return (
                <div className="social-icon">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </div>
            )
        }
        case 'facebook': {
            return (
                <div className="social-icon">
                    <FontAwesomeIcon icon={faFacebookF} size="xl" />
                </div>
            )
        }
        case 'twitter': {
            return (
                <div className="social-icon">
                    <FontAwesomeIcon icon={faTwitter} size="xl" />
                </div>                
            )
        }
        case 'instagram': {
            return (
                <div className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} size="xl" />
                </div>                
            )
        }
        default: {
            return (
                <div className="social-icon">
                    <FontAwesomeIcon icon={faHome} />
                </div>               
            )
        }
    }
};