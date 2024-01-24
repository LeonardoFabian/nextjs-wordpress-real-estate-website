import Link from "next/link";

export const LegalPages = ({title, items}) => {

    // console.log("LEGAL PAGES TITLE: ", title);
    // console.log("LEGAL PAGES: ", items);

    return (
        <>
            {!!title && (<h6 className="text-sm font-semibold text-slate-300">{title}</h6>)}
            
            <div className="my-5">
                <ul className="flex flex-col gap-2">
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