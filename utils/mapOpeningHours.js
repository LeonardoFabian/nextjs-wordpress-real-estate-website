import { v4 as uuid } from "uuid";

export const mapOpeningHours = (hours) => {
    return (hours || []).map(hour => ({
        id: uuid(),
        day: hour.dayOfWeek || null,
        open: hour.timeOpen || null,
        close: hour.timeClosed || null,
        publish: hour.publish || false,
    }));
};