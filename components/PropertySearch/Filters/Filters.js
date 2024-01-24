import { Input } from "components/Input"
import { useEffect, useState } from "react"
import queryString from 'query-string'
import { Label } from "components/Label";

export const Filters = ({onSearch}) => {

    const [petFriendly, setPetFriendly] = useState(false);
    const [hasParking, setHasParking] = useState(false);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleSearch = () => {
        onSearch({
            petFriendly,
            hasParking,
            minPrice,
            maxPrice
        });
    };

    useEffect(() => {
        const {
            petFriendly: petFriendlyInitial, 
            hasParking: hasParkingInitial,
            minPrice: minPriceInitial,
            maxPrice: maxPriceInitial
        } = queryString.parse(window.location.search);

        setPetFriendly(petFriendlyInitial === "true");
        setHasParking(hasParkingInitial === "true");
        setMinPrice(minPriceInitial || "");
        setMaxPrice(maxPriceInitial || "");
    }, []);

    return (
        <div className="max-w-5xl mx-auto my-5 block md:flex items-center gap-6 bg-white shadow-lg border-2 p-5 rounded-md absolute -mt-56 left-0 right-0">
            <div className="flex-1">
                <div>
                    <label className="cursor-pointer">
                        <input type="checkbox" checked={hasParking} onChange={() => setHasParking(value => !value)} />
                        <span className="pl-2">Has parking</span>
                    </label>
                </div>
                <div className="mt-2">
                    <label className="cursor-pointer">
                        <input type="checkbox" checked={petFriendly} onChange={() => setPetFriendly(value => !value)} />
                        <span className="pl-2">Pet friendly</span>
                    </label>
                </div>
            </div>
            <div className="flex-1">
                <Input type="number" placeholder="$ Min" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
            </div>
            <div className="flex-1">
                <Input type="number" placeholder="$ Max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
            </div>
            <div>
                <div className="btn py-2 px-4" onClick={handleSearch}>
                    Search
                </div>
            </div>
        </div>
    )
}