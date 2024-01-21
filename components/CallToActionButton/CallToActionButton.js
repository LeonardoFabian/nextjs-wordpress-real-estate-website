import { ButtonLink } from "components/ButtonLink"

export const CallToActionButton = ({align = "left", destination, label, bgColor, textColor, margin}) => {
    const alignMap = {
        left: "text-left",
        center: "text-center",
        right: "text-right"
    }
    return (
        <ButtonLink 
            destination={destination} 
            label={label} 
            bgColor={bgColor} 
            textColor={textColor} 
            marginTop={margin?.top}
            marginBottom={margin?.bottom}
            marginLeft={margin?.left}
            marginRight={margin?.right}
        />
    )
}