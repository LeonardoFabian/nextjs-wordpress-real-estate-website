import { ButtonLink } from 'components/ButtonLink';
import Link from 'next/link';
import {FaHouseUser} from 'react-icons/fa';

export const MainMenu = ({items, callToActionLabel, callToActionDestination}) => {
    console.log("MAIN MENU PROPS: ", items);
    return (
        <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
            <div className="py-4 pl-5 flex text-yellow-600">
                <a href="/">
                    <FaHouseUser size={30} />
                </a>
            </div>
            <div className='hidden md:flex flex-1 justify-end'>
                {(items || []).map(item => (
                    <div key={item.id} className='hover:bg-slate-700 cursor-pointer relative group'>
                        <div>
                            <a href={item.destination} className='p-5 block'>
                                {item.label}
                            </a>
                        </div>
                        {!!item.subMenuItems?.length && (
                            <div className='group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3'>
                                {item.subMenuItems.map(subMenuItem => (
                                    <a key={subMenuItem.id} href={subMenuItem.destination} className='p-5 block whitespace-nowrap hover:bg-slate-700'>
                                        {subMenuItem.label}
                                    </a>
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