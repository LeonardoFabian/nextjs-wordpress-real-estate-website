import { ButtonLink } from "components/ButtonLink"

export const CallToActionButton = ({align = "left", destination, label}) => {
    const alignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }
    return (
        <div className={`${alignMap[align]} block`}>
            <ButtonLink destination={destination} label={label} />
        </div>
    )
}