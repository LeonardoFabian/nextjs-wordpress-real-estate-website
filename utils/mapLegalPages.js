import {v4 as uuid} from 'uuid'

export const mapLegalPages = (menuItems) => {
    return menuItems.map(menuItem => ({
        id: uuid(),
        destination: menuItem.menuItem?.destination?.uri || null,
        label: menuItem.menuItem?.label || null,
    }));
};