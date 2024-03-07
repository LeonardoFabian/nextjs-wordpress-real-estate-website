import {v4 as uuid} from 'uuid'

export const mapSocialLinks = (menuItems) => {
    return (menuItems || []).map(menuItem => ({
        id: uuid(),
        url: menuItem?.url?.url || "",
        target: menuItem?.url?.target || null,
        label: menuItem?.label || null,
        socialNetwork: menuItem?.socialNetwork || null,
    }));
};