import {v4 as uuid} from 'uuid'

export const mapFooterQuickLinks = (menuItems) => {
    return menuItems.map(menuItem => ({
        id: uuid(),
        url: menuItem.menuItem?.url || null,
        label: menuItem.menuItem?.label || null,
    }));
};