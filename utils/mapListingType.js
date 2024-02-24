export const mapListingType = (value) => {

    let intValue = parseInt(value);

    const listingTypeMap = {
        1: "Venta",
        2: "Alquiler",
    }

    return `${listingTypeMap[intValue]}` || 1;
}