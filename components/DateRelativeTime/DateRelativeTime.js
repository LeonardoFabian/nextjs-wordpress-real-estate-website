import { useNow, useFormatter } from "next-intl";

export const DateRelativeTime = ({dateTime}) => {
    // Use the global now value initially …
    console.log("DATE RELATIVE DATETIME PARAM: ", dateTime);

    // ... and update it every 3600 seconds
    const now = useNow({
        updateInterval: 3600000 * 10
    });

    const format = useFormatter();
    const formattedDateTime = new Date(dateTime);
    
    return (
         // Renders "247 days ago"
        <span className="text-slate-400">Posted {format.relativeTime(formattedDateTime, {now, unit: 'day'})}</span>
    );

}


