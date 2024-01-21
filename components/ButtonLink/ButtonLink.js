import Link from "next/link";

export const ButtonLink = ({destination, label, bgColor, textColor, marginTop, marginBottom, marginLeft, marginRight}) => {

    const colorStyle = textColor ? {color: textColor} : {};
    const backgroundColorStyle = bgColor ? {backgroundColor: bgColor} : {};
    const marginTopStyle = marginTop ? {marginTop: marginTop} : {};
    const marginBottomStyle = marginBottom ? {marginBottom: marginBottom} : {};
    const marginLeftStyle = marginLeft ? {marginLeft: marginLeft} : {};
    const marginRightStyle = marginRight ? {marginRight: marginRight} : {};

    return (
        <Link 
            href={destination} 
            className='next-button-link btn inline-block text-center'
            style={{ 
                ...colorStyle,
                ...backgroundColorStyle,
                ...marginTopStyle,
                ...marginBottomStyle,
                ...marginLeftStyle,
                ...marginRightStyle
             }}
        >
            {label}
        </Link>
    );
};