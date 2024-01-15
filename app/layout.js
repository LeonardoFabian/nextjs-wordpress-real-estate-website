import { Signika_Negative, Biryani, Great_Vibes} from 'next/font/google';
import '../styles/globals.css';
import { getMenu } from 'utils/getMenu';
import { MainMenu } from 'components/MainMenu';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const signika = Signika_Negative({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    variable: "--font-signika-negative"
})

const biryani = Biryani({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    display: "swap",
    variable: "--font-biryani"
})

const greatvibes = Great_Vibes({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    variable: "--font-great-vibes"
})


export default async function RootLayout({children}) {

    const data = await getMenu();

    console.log({data});

    return (
        <html lang="en" className={`${biryani.variable} ${signika.variable} ${greatvibes.variable}`}>
            <body className='font-body'>
                <MainMenu 
                    callToActionDestination={data.callToActionDestination} 
                    callToActionLabel={data.callToActionLabel} 
                    items={data.mainMenuItems}
                />
                {children}
            </body>
        </html>
    );
}