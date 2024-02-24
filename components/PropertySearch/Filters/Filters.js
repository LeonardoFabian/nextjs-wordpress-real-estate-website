import { Input } from "components/Input"
import { useEffect, useState } from "react"
import queryString from 'query-string'
import { Label } from "components/Label";
import { CallToActionButton } from "components/CallToActionButton";
import { mapCategories } from "utils/mapCategories";
import { listingTypes } from "listingTypes";

export const Filters = ({onSearch, categories}) => {

    const serializedCategories = mapCategories(categories);

    const [petFriendly, setPetFriendly] = useState(false);
    const [hasParking, setHasParking] = useState(false);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [categoryId, setCategoryId] = useState("");

    const handleSearch = () => {
        onSearch({
            petFriendly,
            hasParking,
            minPrice,
            maxPrice,
            categoryId
        });
    };

    useEffect(() => {
        const {
            petFriendly: petFriendlyInitial, 
            hasParking: hasParkingInitial,
            minPrice: minPriceInitial,
            maxPrice: maxPriceInitial,
            categoryId: categoryIdInitial
        } = queryString.parse(window.location.search);

        setPetFriendly(petFriendlyInitial === "true");
        setHasParking(hasParkingInitial === "true");
        setMinPrice(minPriceInitial || "");
        setMaxPrice(maxPriceInitial || "");
        setCategoryId(categoryIdInitial || "");
    }, []);

    return (
        // <div className="max-w-5xl mx-auto my-5 block md:flex items-center gap-6 bg-white shadow-lg border-2 p-5 rounded-md relative md:absolute -mt-56 left-0 right-0">
        <div className="w-full lg:max-w-5xl mx-auto block md:flex items-center gap-6 bg-white shadow-lg border-2 p-5 rounded-md relative">
            <div className="flex-1">
            <div><span className="font-semibold text-gray-900">Tipo de Propiedad</span></div>
                    <select className="bg-slate-200 border-slate-400 text-gray-900 text-sm rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 block w-full p-2.5 " 
                        defaultValue={categoryId != "" ? categoryId : 0} 
                        onChange={e => setCategoryId(e.target.value)}
                    >
                        <option value="0">Selecciona una categoría</option>
                        {(serializedCategories || []).map(category => (
                            <option key={category.databaseId} value={category.databaseId}>{category.name}</option>
                        ))}
                    </select>
                {/* <div>
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
                </div> */}
            </div>
            <div className="flex-1">
                <Input type="number" placeholder="$ Min" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
            </div>
            <div className="flex-1">
                <Input type="number" placeholder="$ Max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
            </div>
            <div>
                <div className="btn btn-primary" onClick={handleSearch}>
                    Search
                </div>
            </div>
        </div>
    )
}