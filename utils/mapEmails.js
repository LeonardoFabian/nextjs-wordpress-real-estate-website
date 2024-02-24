import { v4 as uuid } from "uuid"

export const mapEmails = (emails) => {
    return (emails || []).map(email => ({
        id: uuid(),
        label: email.label || null,
        address: email.emailAddress || "",
        publish: email.publish || false,
    }));
};