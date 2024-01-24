import {v4 as uuid} from 'uuid'

export const mapFooterQuickLinks = (menuItems) => {
    return (menuItems || []).map(menuItem => ({
        id: uuid(),
        url: menuItem.url.url || null,
        label: menuItem.label || null,
        target: menuItem.url.target || null
    }));
};