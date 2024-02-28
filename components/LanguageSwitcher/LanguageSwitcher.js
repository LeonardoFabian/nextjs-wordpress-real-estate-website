import Link from "next/link";
import { useRouter } from "next/router"

export const LanguageSwitcher = () => {

    const { locale: activeLocale, locales, asPath } = useRouter();

    const availableLocales = locales.filter((locale) => locale !== activeLocale);

    return (
        <ul className="btn bg-transparent text-slate-100 hover:!text-slate-100 hover:!bg-white hover:!bg-opacity-5 border border-slate-500 py-3 w-full lg:w-16 block lg:flex items-center justify-center">
            {availableLocales.map((locale) => {
                return (
                    <li key={locale}>
                        <Link href={asPath} locale={locale}>
                            {locale.toUpperCase()}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}