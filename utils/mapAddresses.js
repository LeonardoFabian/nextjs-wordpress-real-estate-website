import { v4 as uuid } from "uuid"

export const mapAddresses = (addresses) => {
    return (addresses || []).map(address => ({
        id: uuid(),
        label: address?.label || null,
        street: address?.street || null,
        number: address?.number || null,
        neighborhood: address?.neighborhood || null,
        city: address?.city || null,
        state: address?.state || null,
        country: address?.country || null,
        zip: address?.zipCode || null,
        asDefaultAddress: address?.asDefaultAddress || false,
        publish: address?.publish || false,
    }));
};