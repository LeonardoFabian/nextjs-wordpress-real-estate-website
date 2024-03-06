import React from "react";

export const ListItem = ({content}) => {

    const tag = React.createElement(`li`, {
        dangerouslySetInnerHTML: {__html: content},
        className: `my-3`
    });

    return tag;    
}