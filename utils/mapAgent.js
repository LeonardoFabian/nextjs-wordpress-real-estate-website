import { v4 as uuid } from "uuid"

export const mapAgent = (agent) => {
    return {
        id: uuid(),
        databaseId: agent.databaseId || 0,
        firstName: agent.firstName || "",
        lastName: agent.lastName || "",
        slug: agent.slug || "",
        uri: agent.uri || "",
        profilePicture: agent.userMetadata.profilePicture || "",
        email: agent.userMetadata.contactInformation.userEmail || "",
        phone: agent.userMetadata.contactInformation.userPhone || "",
        whatsapp: agent.userMetadata.contactInformation.userWhatsapp || "",
    };
};