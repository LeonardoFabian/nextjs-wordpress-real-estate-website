import { getCurrentYear } from "utils/getCurrentYear"

export const Copyright = () => {
    return (
        <div className="max-w-full bg-slate-900 text-white py-2">
            <div className="max-w-xs lg:max-w-7xl mx-auto text-xs">
                Copyright: © {getCurrentYear()} Company Name. All rights reserved.
            </div>
        </div>
    )
}