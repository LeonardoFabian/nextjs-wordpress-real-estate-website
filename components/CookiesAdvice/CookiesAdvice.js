import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ReactGA from 'react-ga';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const CookiesAdvice = () => {

    const c = 'c-cookies';

    const necessaryCookiesName = 'c-cookies__necessary-cookies-candelario-consultores';
    const analyticsCookiesName = 'c-cookies__analytics-cookies-candelario-consultores';

    const [isVisibleAdvice, setIsVisibleAdvice] = useState(false);
    const [isAcceptedAnalyticsCookies, setIsAcceptedAnalyticsCookies] = useState(false);
    const router = useRouter();

    const arrayClasses = [
        { [`${c}`] : c },
        { [`is-active`] : isVisibleAdvice },
    ];

    // handle user decline cookies
    const handleRejectAll = () => {
        Cookies.set(necessaryCookiesName, 'rejected');
        setIsVisibleAdvice(false);
    }

    // handle user accept cookies
    const handleAcceptAll = () => {
        Cookies.set(necessaryCookiesName, 'accepted', { expire: 30 });
        Cookies.set(analyticsCookiesName, 'accepted', { expires: 30 });
        setIsVisibleAdvice(false);
        setIsAcceptedAnalyticsCookies(true);
    }

    // check neccesaryCookies and analyticsCookies
    useEffect(() => {
        const necessaryCookies = Cookies.get(necessaryCookiesName);
        const analyticsCookies = Cookies.get(analyticsCookiesName);

        // show modal if necessary cookies doesn't exists
        if(necessaryCookies) {
            setIsVisibleAdvice(false);
        } else {
            setIsVisibleAdvice(true);
        }

        // set analytics cookies value to "true" if the user has already accepted
        if(analyticsCookies) {
            setIsAcceptedAnalyticsCookies(true);
        } else {
            setIsAcceptedAnalyticsCookies(false);
        }

    }, []);

    // initialize Google Analytics if user has already accepted
    useEffect(() => {
        if(isAcceptedAnalyticsCookies) {
            if(process.env.NEXT_PUBLIC_ANALYTICS_UA_TRACKING_ID) {
                ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_UA_TRACKING_ID);
                ReactGA.pageview(window.location.pathname + window.location.search);

                const handleRouteChange = (url) => {
                    ReactGA.pageview(url);
                }

                router.events.on('routeChangeComplete', handleRouteChange);

                return () => {
                    router.events.off('routeChangeComplete', handleRouteChange)
                }
            }
        }
    }, [isAcceptedAnalyticsCookies]);

    return (
        <div className={`component-cookies-advice fixed bottom-0 left-0 right-0 z-50 ${!!isVisibleAdvice ? 'block' : 'hidden'}`}>
            <div className="container bg-yellow-100 p-6 shadow-lg shadow-slate-200">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="cookies-information flex items-start lg:items-center gap-4">
                        <FontAwesomeIcon icon={faInfoCircle} size="xl" />
                        <p>We use two types of cookies on this website, those strictly necessary and those focus</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="btn btn-default"
                            onClick={handleRejectAll}
                        >
                            <span>Rechazar</span>
                        </div>
                        <div className="btn btn-primary"
                            onClick={handleAcceptAll}
                        >
                            <span>Aceptar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookiesAdvice;