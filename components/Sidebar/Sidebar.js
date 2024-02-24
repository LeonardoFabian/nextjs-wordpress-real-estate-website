import { faClose, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading } from "components/Heading";
import { useState } from "react";

export const Sidebar = ({children, title}) => {

    const [sidebarIcon, setSidebarIcon] = useState(false);
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);

    const handleSmallerScreensSidebar = () => {
      setShowMobileSidebar(!showMobileSidebar);
        setSidebarIcon(!sidebarIcon);
    }

    return (
      <>
        {/* largest screens sidebar */}
        <aside className="hidden md:flex md:w-80 mx-auto mb-5 flex-col bg-white h-screen lg:h-full overflow-hidden divide-y">
          {title && (
            <header className="flex items-center text-left py-2 px-4">
              <Heading level="5" content={title} textAlign="left" className="font-semibold" />          
            </header>
          )}
          <div className="hidden md:flex md:flex-col relative overflow-auto px-4">
            {children}
          </div>
        </aside>

        {/* smaller screens sidebar */}
        <aside 
          className={
            showMobileSidebar
            ? 'fixed md:hidden top-[75px] w-full px-4 z-10 lg:relative mx-auto mb-5 flex-col bg-white h-screen overflow-hidden divide-y'
            : 'fixed md:hidden top-[75px] w-full px-4 z-10 lg:relative mx-auto mb-5 flex-col bg-white h-[64px] overflow-hidden'
          }
        >
          {title && (
            <div className="flex items-center h-[64px] justify-between">
              <h3 className="font-semibold text-slate-700 text-lg">{title}</h3>          
              <button onClick={handleSmallerScreensSidebar} type="button" className="relative flex items-center p-3 transition-all ease-in duration-300 cursor-pointer group" aria-controls="mobile-filter-section" aria-expanded="false">
                {showMobileSidebar ? (
                    <>
                    <FontAwesomeIcon icon={faClose} size="xl"/>

                    </>
                  ):(
                    <>
                      <FontAwesomeIcon icon={faSliders} size="xl"/>
                    </>
                  )
                }
              </button>
            </div>
          )}
          <div 
            id="mobile-filter-section" 
            className={
              showMobileSidebar
              ? 'flex flex-col justify-between h-[76vh] transition-all duration-300 ease-in-out overflow-auto'
              : 'h-0 py-0 overflow-hidden transition-all duration-300 ease-in-out'
            }
          >
            {children}
          </div>
        </aside>
      </>
    )
}