import { ButtonLink } from 'components/ButtonLink';
import Link from 'next/link';
import {FaHouseUser} from 'react-icons/fa';
import Image from 'next/image';
import { Logo } from 'components/Logo';
import { Logotipo } from 'components/Logotipo';

import { useState } from 'react';
import { faXmark, faBars, faCaretDown, faCaretUp  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Router from 'next/router';
import { useRouter } from 'next/router';

export const MainMenu = ({items, callToActionLabel, callToActionDestination}) => {

    console.log("MAIN MENU ITEMS: ", items);

    const router = useRouter();
    const currentPath = router.asPath + '/';

    console.log("MAIN MENU ROUTER: ", router);

    const [menuIcon, setMenuIcon] = useState(false);
    const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);

    const handleSmallerScreensNavigation = () => {
        setShowMobileSubMenu(false);
        setMenuIcon(!menuIcon);
    }

    const toggleMobileSubmenu = () => {
        setShowMobileSubMenu(!showMobileSubMenu);
    }

    const handleClick = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <header className="bg-slate-800 text-white max-w-full h-[75px] flex items-center ease-in duration-300 sticky top-0 z-20">
            <nav className='container flex justify-between items-center'>
                <div className='focus:outline-none' style={{ color: "#d4af37" }}>
                    <Link 
                        href="/"
                        className='flex items-center gap-0 lg:gap-3 h-[40px] lg:h-[48px]'
                    >
                        <Logo width="50" height="50" classes="hidden md:flex h-[40px] lg:h-[48px]" />
                        <div className='inline-block md:hidden lg:inline-block'><Logotipo /></div>
                    </Link>
                </div>

                {/* larger screens navigation */}

                <ul className='hidden md:flex flex-1 justify-end'>
                    {(items || []).map((item, i) => (
                        <li key={i} className='cursor-pointer relative group text-xs lg:text-lg flex items-center group'>                            
                            <Link 
                                href={item.destination} 
                                className={`p-3 lg:p-5 block flex-nowrap ${currentPath == item.destination ? 'text-yellow-500' : 'hover:text-slate-400'}`}
                            >
                                {item.label}
                            </Link>                        
                            {!!item.subMenuItems?.length && (
                                <ul className='group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3'>
                                    {item.subMenuItems.map((subMenuItem, index) => (
                                        <li key={index} className='hover:bg-slate-700 cursor-pointer relative group'>
                                            <Link 
                                                href={subMenuItem.destination} 
                                                className={`p-5 block whitespace-nowrap ${currentPath == subMenuItem.destination ? 'text-yellow-500' : 'hover:text-slate-400'}` }
                                            >
                                                {subMenuItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <div className='hidden md:flex ml-3 my-auto'>
                        <ButtonLink destination={callToActionDestination} className="btn btn-primary">
                            {callToActionLabel}
                        </ButtonLink>
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
                                className='cursor-pointer relative group'
                                onClick={!item.subMenuItems.length > 0 ? handleSmallerScreensNavigation : handleClick}
                            >                            
                                <Link href={item.destination} 
                                    className={`p-5 inline-flex ${currentPath == item.destination ? 'text-yellow-500' : 'text-slate-300'}` }
                                >
                                    {item.label}
                                    {!!item.subMenuItems.length > 0 && (
                                        <button 
                                            style={{ 
                                                position: "relative",
                                                border: "none",
                                                background: "transparent",
                                                outline: "none",
                                                cursor: "pointer",
                                                marginLeft: "12px"
                                            }}
                                            onClick={toggleMobileSubmenu}
                                            type='button'
                                        >
                                            {
                                                !!showMobileSubMenu
                                                ? ( <FontAwesomeIcon icon={faCaretUp} />)
                                                :  <FontAwesomeIcon icon={faCaretDown} />
                                            }                                           
                                        </button>
                                    )}                 
                                </Link>       
                                {!!item.subMenuItems?.length && (
                                    <ul 
                                        className='block bg-slate-900 bg-opacity-20 text-center relative ease-in duration-300'
                                        style={{ 
                                            display: !!showMobileSubMenu ? 'block' : 'none'
                                        }}
                                        
                                    >
                                        {item.subMenuItems.map((subMenuItem, i) => (
                                            <li key={i} className='cursor-pointer relative group'>
                                                <Link href={subMenuItem.destination} className='p-5 block whitespace-nowrap' onClick={handleSmallerScreensNavigation}>
                                                    {subMenuItem.label}
                                                </Link>                                              
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                        <div className='md:hidden flex flex-col justify-center items-center'>
                            <ButtonLink destination={callToActionDestination} onClick={handleSmallerScreensNavigation}>
                                {callToActionLabel}
                            </ButtonLink>
                        </div>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}




// import { ButtonLink } from 'components/ButtonLink';
// import Link from 'next/link';
// import {FaHouseUser} from 'react-icons/fa';
// import Image from 'next/image';
// import { Logo } from 'components/Logo';
// import { Logotipo } from 'components/Logotipo';

// import { useState } from 'react';
// import { faXmark, faBars, faCaretDown, faCaretUp  } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import Router from 'next/router';

// export const MainMenu = ({items, callToActionLabel, callToActionDestination}) => {

//     console.log("MAIN MENU ITEMS: ", items);

//     const [menuIcon, setMenuIcon] = useState(false);
//     const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);

//     const handleSmallerScreensNavigation = () => {
//         setShowMobileSubMenu(false);
//         setMenuIcon(!menuIcon);
//     }

//     const toggleMobileSubmenu = () => {
//         setShowMobileSubMenu(!showMobileSubMenu);
//     }

//     const handleClick = (event) => {
//         event.preventDefault();
//         console.log(event);
//     }

//     return (
//         <header className="bg-slate-800 text-white max-w-full h-[64px] flex items-center ease-in duration-300 sticky top-0 z-20">
//             <nav className='container flex justify-between items-center'>
//                 <div className='focus:outline-none' style={{ color: "#d4af37" }}>
//                     <Link 
//                         href="/"
//                         className='flex items-center gap-0 lg:gap-3 h-[40px] lg:h-[48px]'
//                     >
//                         <Logo width="50" height="50" classes="hidden md:flex h-[40px] lg:h-[48px]" />
//                         <Logotipo />
//                     </Link>
//                 </div>

//                 {/* larger screens navigation */}

//                 <ul className='hidden md:flex flex-1 justify-end [&>li>a]:px-3 [&>li>a]:py-2 [&>li>a:hover]:text-yellow-400 [&>li>a]:transition text-xl'>
//                     {(items || []).map(item => (
//                         <li key={item.id} className='cursor-pointer relative group text-xs lg:text-lg flex items-center'>                            
//                             <Link href={item.destination} className='lg:p-5 block flex-nowrap'>
//                                 {item.label}
//                             </Link>                        
//                             {!!item.subMenuItems?.length && (
//                                 <ul className='group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3'>
//                                     {item.subMenuItems.map(subMenuItem => (
//                                         <li key={subMenuItem.id} className='hover:bg-slate-700 cursor-pointer relative group'>
//                                             <Link href={subMenuItem.destination} className='p-5 block whitespace-nowrap'>
//                                                 {subMenuItem.label}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </li>
//                     ))}
//                     <div className='hidden md:flex ml-3 my-auto'>
//                         <ButtonLink destination={callToActionDestination} label={callToActionLabel} />
//                     </div>
//                 </ul>

//                 {/* smaller screens navigation */}
//                 {/* onClick change the icon */}

//                 <div className='flex md:hidden' onClick={handleSmallerScreensNavigation}>
//                     {menuIcon ? (<FontAwesomeIcon icon={faXmark} size='2xl' />) : (<FontAwesomeIcon icon={faBars} size='2xl' />)}
//                 </div>

//                 <div 
//                     className={
//                         menuIcon 
//                         ? 'md:hidden absolute top-[64px] right-0 bottom-0 left-0 flex justify-center items-start w-full h-screen py-10 bg-slate-800 text-white text-center ease-in duration-300' 
//                         : 'md:hidden absolute top-[64px] right-0 left-[-100%] flex justify-center items-start w-full h-screen py-10 bg-slate-800 text-white text-center ease-in duration-300'
//                     }                 
//                 >
//                     {/* smaller navbar links  */}
//                     <div className='w-full'>
//                         <ul className='md:hidden container '>
//                         {(items || []).map(item => (
//                             <li 
//                                 key={item.id} 
//                                 className='hover:bg-slate-700 cursor-pointer relative group'
//                                 onClick={!item.subMenuItems.length > 0 ? handleSmallerScreensNavigation : handleClick}
//                             >                            
//                                 <Link href={item.destination} className='p-5 inline-flex' >
//                                     {item.label}
//                                     {!!item.subMenuItems.length > 0 && (
//                                         <button 
//                                             style={{ 
//                                                 position: "relative",
//                                                 border: "none",
//                                                 background: "transparent",
//                                                 outline: "none",
//                                                 cursor: "pointer",
//                                                 marginLeft: "12px"
//                                             }}
//                                             onClick={toggleMobileSubmenu}
//                                             type='button'
//                                         >
//                                             {
//                                                 !!showMobileSubMenu
//                                                 ? ( <FontAwesomeIcon icon={faCaretUp} />)
//                                                 :  <FontAwesomeIcon icon={faCaretDown} />
//                                             }                                           
//                                         </button>
//                                     )}                 
//                                 </Link>       
//                                 {!!item.subMenuItems?.length && (
//                                     <ul 
//                                         className='group-hover:block block bg-slate-900 bg-opacity-20 text-center relative ease-in duration-300'
//                                         style={{ 
//                                             display: !!showMobileSubMenu ? 'block' : 'none'
//                                         }}
                                        
//                                     >
//                                         {item.subMenuItems.map(subMenuItem => (
//                                             <li key={subMenuItem.id} className='hover:bg-slate-700 cursor-pointer relative group'>
//                                                 <Link href={subMenuItem.destination} className='p-5 block whitespace-nowrap' onClick={handleSmallerScreensNavigation}>
//                                                     {subMenuItem.label}
//                                                 </Link>                                              
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </li>
//                         ))}
//                         <div className='md:hidden flex flex-col justify-center items-center'>
//                             <ButtonLink destination={callToActionDestination} label={callToActionLabel} onClick={handleSmallerScreensNavigation} />
//                         </div>
//                     </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }