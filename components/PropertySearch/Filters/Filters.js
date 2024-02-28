import { Input } from "components/Input"
import { useEffect, useState } from "react"
import queryString from 'query-string'
import { Label } from "components/Label";
import { CallToActionButton } from "components/CallToActionButton";
import { mapCategories } from "utils/mapCategories";
import { listingTypes } from "listingTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faSearch } from "@fortawesome/free-solid-svg-icons";

export const Filters = ({onSearch, categories}) => {

    const serializedCategories = mapCategories(categories);

    const [petFriendly, setPetFriendly] = useState(false);
    const [hasParking, setHasParking] = useState(false);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [listingType, setListingType] = useState("");

    const handleSearch = () => {
        onSearch({
            petFriendly,
            hasParking,
            minPrice,
            maxPrice,
            categoryId,
            listingType
        });
    };

    useEffect(() => {
        const {
            petFriendly: petFriendlyInitial, 
            hasParking: hasParkingInitial,
            minPrice: minPriceInitial,
            maxPrice: maxPriceInitial,
            categoryId: categoryIdInitial,
            listingType: listingTypeInitial
        } = queryString.parse(window.location.search);

        setPetFriendly(petFriendlyInitial === "true");
        setHasParking(hasParkingInitial === "true");
        setMinPrice(minPriceInitial || "");
        setMaxPrice(maxPriceInitial || "");
        setCategoryId(categoryIdInitial || "");
        setListingType(listingTypeInitial || "");
    }, []);

    return (
        // <div className="max-w-5xl mx-auto my-5 block md:flex items-center gap-6 bg-white shadow-lg border-2 p-5 rounded-md relative md:absolute -mt-56 left-0 right-0">
        <div className="w-full lg:max-w-3xl mx-auto bg-white shadow-lg border-2 p-5 rounded-md relative space-y-4">
            <div className="flex items-center gap-4">
                {listingTypes.map((listingTypeItem, i) => (
                    <button 
                        key={i} 
                        className={`btn text-sm px-2 lg:px-4 ${listingType == listingTypeItem.value ? 'btn-primary' : 'btn-default'}`}
                        value={listingTypeItem.value} 
                        onClick={e => setListingType(e.target.value)}
                    >
                        {listingTypeItem.label}
                    </button>
                ))} 
            </div>
            <div className="block md:flex items-center gap-4">
                <div className="flex-1">
                    <span className="text-slate-500">Tipo de Propiedad</span>
                    <select className="bg-slate-200 border-slate-400 placeholder-slate-400 border-2 p-2 md:py-3 lg:py-4 my-2 text-gray-900 text-sm rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 block w-full" 
                        defaultValue={categoryId != "" ? categoryId : 0} 
                        onChange={e => setCategoryId(e.target.value)}
                    >
                        <option value="0">Selecciona una categoría</option>
                        {(serializedCategories || []).map(category => (
                            <option key={category.databaseId} value={category.databaseId}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex-1">
                    <span className="text-slate-500">Valor mínimo</span>
                    <Input type="number" placeholder="$ Min" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                </div>
                <div className="flex-1">
                    <span className="text-slate-500">Valor máximo</span>
                    <Input type="number" placeholder="$ Max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                </div>
            </div>
            <div className="block lg:flex items-center justify-between gap-8 space-y-6 lg:space-y-0">
                <div className="block lg:flex items-center gap-x-6">
                    <span className="text-slate-500">Filtros</span>
                    <ul className="block lg:flex items-center space-y-4 lg:space-y-0 gap-x-8 border border-slate-300 py-4 px-4 rounded-md text-sm">
                        <li>
                            <label className="cursor-pointer">
                                <input type="checkbox" checked={hasParking} onChange={() => setHasParking(value => !value)} />
                                <span className="pl-2">Has parking</span>
                            </label>
                        </li>
                        <li>
                        <label className="cursor-pointer">
                            <input type="checkbox" checked={petFriendly} onChange={() => setPetFriendly(value => !value)} />
                            <span className="pl-2">Pet friendly</span>
                        </label>
                        </li>
                    </ul>
                </div>
                <div className="block lg:flex items-center gap-x-4">
                    <div className="btn btn-default" onClick={handleSearch}>
                        <FontAwesomeIcon icon={faArrowsRotate} size="lg" className="mr-2" />
                        <span className="text-sm">Resetear</span>
                    </div>
                    <div className="btn btn-primary" onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} size="lg" className="mr-2" />
                        <span className="text-sm">Buscar</span>
                    </div>
                </div>
            </div>
        </div>
    )
}