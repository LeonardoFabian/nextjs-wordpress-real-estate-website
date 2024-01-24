import Link from "next/link";
import { getSocialIcon } from "utils/icons";

export const SocialLinks = ({title, items}) => {

    // console.log("SOCIAL LINKS TITLE: ", title);
    // console.log("SOCIAL LINKS: ", items);

    return (
        <>
            { !!title && (<h6 className="text-sm font-semibold text-slate-300">{title}</h6>) }
            
            <div className="my-5">
                <ul className="flex items-center gap-2">
                    {(items || []).map(item => (
                        <li key={item.id}>
                            <Link href={item.url} target={item.target || "_blank"}>
                                {getSocialIcon(`${item.socialNetwork}`)}
                            </Link>
                        </li>
                    ))}
                </ul>                
            </div>
        </>
    )
}