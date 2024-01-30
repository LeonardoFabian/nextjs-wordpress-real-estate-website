import { v4 as uuid } from "uuid"

export const mapSocialNetworks = (socialNetworks) => {    
    return (socialNetworks || []).map(socialNetwork => ({
        id: uuid(),
        label: socialNetwork.label || null,
        platform: socialNetwork.platform || null, 
        url: socialNetwork.url.url || null,
        target: socialNetwork.url.target || null,
        publish: socialNetwork.publish || false
    }));
};