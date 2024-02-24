import React from "react"
import { getTextAlign, getFontSizeForHeading } from "utils/fonts"

export const Heading = ({textAlign, content, level = 2, className}) => {

    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: content},
        className: `font-heading w-full my-5 ${className} ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`,
    });

    return tag;
}