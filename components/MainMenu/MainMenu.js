import { ButtonLink } from 'components/ButtonLink';
import Link from 'next/link';
import {FaHouseUser} from 'react-icons/fa';
import Image from 'next/image';
import { Logo } from 'components/Logo';
import { Logotipo } from 'components/Logotipo';

export const MainMenu = ({items, callToActionLabel, callToActionDestination}) => {
    console.log("MAIN MENU PROPS: ", items);
    return (
        <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
            <div className="py-4 pl-5 flex items-center gap-3" style={{ color: "#d4af37" }}>
                <Logo width="50" height="50" />
                <Logotipo />
            </div>
            <div className='hidden md:flex flex-1 justify-end'>
                {(items || []).map(item => (
                    <div key={item.id} className='hover:bg-slate-700 cursor-pointer relative group'>
                        <div>
                            <Link href={item.destination} className='p-5 block'>
                                {item.label}
                            </Link>
                        </div>
                        {!!item.subMenuItems?.length && (
                            <div className='group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3'>
                                {item.subMenuItems.map(subMenuItem => (
                                    <Link key={subMenuItem.id} href={subMenuItem.destination} className='p-5 block whitespace-nowrap hover:bg-slate-700'>
                                        {subMenuItem.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                <div className='ml-3 my-auto'>
                    <ButtonLink destination={callToActionDestination} label={callToActionLabel} />
                </div>
            </div>
        </div>
    )
}