import Link from "next/link";

export const FooterLinks = ({title, items}) => {

    // console.log("FOOTER LINKS TITLE: ", title);
    // console.log("FOOTER LINKS: ", items);
    
    return (
        <>
            {!!title && (<h6 className="text-sm font-semibold text-slate-300">{title}</h6>)}
            <div className="my-5">
                <ul className="flex flex-col gap-4">
                    {(items || []).map(item => (
                        <li key={item.id}>
                            <Link href={
                                item.target === "_blank" 
                                ? item.url
                                : `/${item.slug[3]}`
                                } 
                                target={item.target ? item.target : "_self"} replace={false} >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                
            </div>
        </>
    )
}