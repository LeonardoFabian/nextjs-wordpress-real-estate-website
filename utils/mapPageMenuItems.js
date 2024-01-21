import {v4 as uuid} from 'uuid'

export const mapPageMenuItems = (menuItems) => {
    return menuItems.map(menuItem => ({
        id: uuid(),
        destination: menuItem.menuItem?.destination?.uri || null,
        label: menuItem.menuItem?.label || null,
        subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
            id: uuid(),
            destination: subMenuItem?.destination?.uri || null,
            label: subMenuItem?.label || null,            
        })),
    }));
};