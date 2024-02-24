import { v4 as uuid } from "uuid"

export const mapPhones = (phones) => {
    return (phones || []).map(phone => ({
        id: uuid(), 
        label: phone.label || null,
        number: phone.phoneNumber || null,
        publish: phone.publish || false 
    }));
};