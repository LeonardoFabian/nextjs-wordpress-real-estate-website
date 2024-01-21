import { getContentAlign } from "utils/contentSize";

export const Group = ({children, layoutType, flexWrap, justifyContent, classes, align}) => {
    
    const layoutTypeStyle = layoutType ? {display: layoutType} : {display: "block"}
    const justifyContentStyle = justifyContent ? {justifyContent: justifyContent} : {};
    const flexWrapStyle = flexWrap ? {flexWrap: flexWrap} : {};

    return (
        <div className={`max-w-5xl mx-auto ${classes} ${getContentAlign(align)}`}
            style={{ 
                ...layoutTypeStyle,
                ...justifyContentStyle,
                ...flexWrapStyle
            }}
        >
            {children}
        </div>
    )
}