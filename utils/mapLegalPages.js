import {v4 as uuid} from 'uuid'

export const mapLegalPages = (menuItems) => {
    return (menuItems || []).map(menuItem => ({
        id: uuid(),
        destination: menuItem?.destination?.uri || "",
        label: menuItem?.label || null,
    }));
};