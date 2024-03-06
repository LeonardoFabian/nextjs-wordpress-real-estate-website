import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({content, textAlign = "left", textColor, backgroundColor, fontSize = "md", margin}) => {  

    return (
        <p 
            style={{ 
                color: textColor, 
                backgroundColor: backgroundColor,
                marginTop: margin?.top,
                marginBottom: margin?.bottom,
                marginLeft: margin?.left,
                marginRight: margin?.right,
            }}
            className={`max-w-5xl mx-auto my-3 leading-loose ${getTextAlign(textAlign)} text-${fontSize}`}
            dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }} 
        />
    );
}