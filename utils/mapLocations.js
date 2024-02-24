import { v4 as uuid } from "uuid";

export const mapLocations = (locations) => {    
    return (locations || []).map(location => ({
        id: uuid(),
        name: location.node.name || null        
    }));
};