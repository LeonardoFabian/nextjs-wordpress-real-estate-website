import { ButtonLink } from "components/ButtonLink"

export const CallToActionButton = ({children, align = "left", destination, label = "", bgColor, textColor, margin, className}) => {
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
            className={className}
        >
            {children}
        </ButtonLink>
    )
}