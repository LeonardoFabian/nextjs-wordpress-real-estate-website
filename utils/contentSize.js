export const getContentAlign = (align = "") => {
    const alignMap = {
        "wide": "max-w-7xl",
        "full": "max-w-full"
    }

    return `${alignMap[align] || "max-w-4xl"}`;
}