import {v4 as uuid} from 'uuid'

export const mapFooterQuickLinks = (menuItems) => {
    return (menuItems || []).map(menuItem => ({
        id: uuid(),
        url: menuItem?.url?.url || "",
        label: menuItem?.label || null,
        target: menuItem?.url?.target || null,
        slug: menuItem?.url?.url.substring(0, menuItem?.url?.url?.length - 1).split("/")
    }));
};