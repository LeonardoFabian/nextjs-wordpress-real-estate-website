import { ButtonLink } from 'components/ButtonLink';
import Link from 'next/link';
import {FaHouseUser} from 'react-icons/fa';
import Image from 'next/image';
import { Logo } from 'components/Logo';
import { Logotipo } from 'components/Logotipo';

import { useState } from 'react';
import { faXmark, faBars, faCaretDown  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MainMenu = ({items, callToActionLabel, callToActionDestination}) => {

    console.log("MAIN MENU ITEMS: ", items);

    const [menuIcon, setMenuIcon] = useState(false);

    const handleSmallerScreensNavigation = () => {
        setMenuIcon(!menuIcon);
    }

    return (
        <header className="bg-slate-800 text-white max-w-full h-[64px] ease-in duration-300 sticky top-0 z-20">
            <nav className='container flex justify-between items-center'>
                <div style={{ color: "#d4af37" }}>
                    <Link 
                        href="/"
                        className='flex items-center gap-3 h-[50px]'
                    >
                        <Logo width="50" height="50" classes="hidden md:flex" />
                        <Logotipo />
                    </Link>
                </div>

                {/* larger screens navigation */}

                <ul className='hidden md:flex flex-1 justify-end'>
                    {(items || []).map(item => (
                        <li key={item.id} className='hover:bg-slate-700 cursor-pointer relative group'>                            
                            <Link href={item.destination} className='p-5 block'>
                                {item.label}
                            </Link>                        
                            {!!item.subMenuItems?.length && (
                                <ul className='group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3'>
                                    {item.subMenuItems.map(subMenuItem => (
                                        <li key={subMenuItem.id} className='hover:bg-slate-700 cursor-pointer relative group'>
                                            <Link href={subMenuItem.destination} className='p-5 block whitespace-nowrap'>
                                                {subMenuItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <div className='hidden md:flex ml-3 my-auto'>
                        <ButtonLink destination={callToActionDestination} label={callToActionLabel} />
                    </div>
                </ul>

                {/* smaller screens navigation */}
                {/* onClick change the icon */}

                <div className='flex md:hidden' onClick={handleSmallerScreensNavigation}>
                    {menuIcon ? (<FontAwesomeIcon icon={faXmark} size='2xl' />) : (<FontAwesomeIcon icon={faBars} size='2xl' />)}
                </div>

                <div 
                    className={
                        menuIcon 
                        ? 'md:hidden absolute top-[64px] right-0 bottom-0 left-0 flex justify-center items-start w-full h-screen py-10 bg-slate-800 text-white text-center ease-in duration-300' 
                        : 'md:hidden absolute top-[64px] right-0 left-[-100%] flex justify-center items-start w-full h-screen py-10 bg-slate-800 text-white text-center ease-in duration-300'
                    }                 
                >
                    {/* smaller navbar links  */}
                    <div className='w-full'>
                        <ul className='md:hidden container '>
                        {(items || []).map(item => (
                            <li 
                                key={item.id} 
                                className='hover:bg-slate-700 cursor-pointer relative group'
                                onClick={handleSmallerScreensNavigation}
                            >                            
                                <Link href={item.destination} className='p-5 inline-flex'>
                                    {item.label}
                                    {!!item.subMenuItems.length > 0 && (<FontAwesomeIcon icon={faCaretDown} className='ml-2' />)}                 
                                </Link>       
                                {!!item.subMenuItems?.length && (
                                    <ul className='group-hover:block block bg-slate-900 bg-opacity-10 text-center relative'>
                                        {item.subMenuItems.map(subMenuItem => (
                                            <li key={subMenuItem.id} className='hover:bg-slate-700 cursor-pointer relative group'>
                                                <Link href={subMenuItem.destination} className='p-5 block whitespace-nowrap'>
                                                    {subMenuItem.label}
                                                </Link>                                              
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        <div className='md:hidden flex flex-col justify-center items-center'>
                            <ButtonLink destination={callToActionDestination} label={callToActionLabel} onClick={handleSmallerScreensNavigation} />
                        </div>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}