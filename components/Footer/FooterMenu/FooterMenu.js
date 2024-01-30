import Link from "next/link"

export const FooterMenu = ({title, items}) => {

    // console.log("FOOTER MENU TITLE: ", title);
    // console.log("FOOTER MENU: ", props);
    
    return (
        <>
            {!!title && (<h6 className="text-sm font-semibold text-slate-300">{title}</h6>)}
            <div className="my-5">
                <ul className="flex flex-col gap-4">
                    {(items || []).map(item => (
                        <li key={item.id}>
                            <Link href={item.destination}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                
            </div>
        </>
    )
}