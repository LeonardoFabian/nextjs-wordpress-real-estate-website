import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Star = (rating) => {

    // TODO: Crear rating 
    
    const rate = Math.round(rating);

    return (
        <div>
            {
                [...Array(5).map((_, i) => (
                    <span key={i}>
                        {rate > i ? (<FontAwesomeIcon icon={faStar} style={{ color: "#ffd700" }} />) : (<FontAwesomeIcon icon={faStar} style={{ color: "#bdbdbd" }} />)}
                    </span>
                ))]
            }
        </div>
    )
}