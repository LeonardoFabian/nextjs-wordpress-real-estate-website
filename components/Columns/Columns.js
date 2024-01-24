export const Columns = ({isStackedOnMobile, children, textColor, backgroundColor}) => {

    const textColorStyle = textColor ? {color: textColor} : {};
    const backgroundColorStyle = backgroundColor ? {backgroundColor: backgroundColor} : {};

    return (
        <div className="my-10" style={{ ...backgroundColorStyle, ...textColorStyle }}>
            <div className={`container ${isStackedOnMobile ? 'block md:flex' : 'flex'}`}>{children}</div>
        </div>
    )
}