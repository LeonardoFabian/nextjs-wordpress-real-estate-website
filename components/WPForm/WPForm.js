import { useEffect } from 'react';
import Script from 'next/script';
import {next} from '@wordpress/shortcode';

export const WPForm = ({shortcode}) => {

    // const wpFormShortcode = `id="${shortcode}"]`;

    // const shortcodeAttrs = [{
    //     id: shortcode
    // }];

    // const renderShortcode = () => {
        
    //     const parsedContent = next('wpforms', shortcodeAttrs);

    //     return (
    //         <div dangerouslySetInnerHTML={{ __html: parsedContent }} />
    //     )
    // }

    // useEffect(() => {
    //     <Script 
    //         src='http://candelarioconsultores.local/wp-content/plugins/wpforms-lite/assets/js/wpforms.min.js' 
    //         strategy="beforeInteractive"
    //     />
    //     // script.src = process.env.NEXT_PUBLIC_WP_URL . '/wp-content/plugins/wpforms-lite/assets/js/wpforms.min.js';
    //     // script.async = true;
    //     // document.body.appendChild(script);
    // }, [])

    //     // return () => {
    //     //     // <Head>
    //     //     //     <script src="http://candelarioconsultores.local/wp-content/plugins/wpforms-lite/assets/js/wpforms.min.js" defer></script>
    //     //     // </Head>
    //     //     // limpiar el script al desmontar el componente
    //     //     document.body.removeChild(script);
    //     // };
    // }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: shortcode }} />
        // <div>
        //     {renderShortcode()}
        // </div>
    );

};