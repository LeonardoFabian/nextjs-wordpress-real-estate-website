export const Columns = ({isStackedOnMobile, children, textColor, backgroundColor}) => {

    const textColorStyle = textColor ? {color: textColor} : {};
    const backgroundColorStyle = backgroundColor ? {backgroundColor: backgroundColor} : {};

    return (
        <div className="py-10 md:py-20" style={{ ...backgroundColorStyle, ...textColorStyle }}>
            <div className={`container ${isStackedOnMobile ? 'block md:flex gap-8' : 'flex'}`}>{children}</div>
        </div>
    )
}