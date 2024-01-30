import { getCurrentYear } from "utils/getCurrentYear"

export const Copyright = ({companyName = 'Company Name'}) => {
    return (
        <div className="max-w-full bg-slate-900 text-white py-3">
            <div className="max-w-xs lg:max-w-7xl mx-auto text-xs">
                © {getCurrentYear()} {companyName}. All rights reserved.
            </div>
        </div>
    )
}