import { faEraser, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Accordion } from "components/Accordion"
import { CheckBox } from "components/CheckBox"
import { Heading } from "components/Heading"
import { Input } from "components/Input"
import { Select } from "components/Select"
import { Sidebar } from "components/Sidebar"
import { useEffect, useState } from "react"
import queryString from 'query-string'
import { mapCategories } from "utils/mapCategories"
import { currencies } from "currencies"
import { listingTypes } from "listingTypes"
import { propertyConditions } from "propertyConditions"
import { propertyStatus } from "propertyStatus"
import { RangeSlider } from "components/RangeSlider"
import { CustomReactSlider } from "components/CustomReactSlider"

export const PropertyFilters = ({onSearch, categories}) => {

    const serializedCategories = mapCategories(categories);

    // console.log("SERIALIZED CATEGORIES: ", serializedCategories);

    const [code, setCode] = useState("");
    const [floor, setFloor] = useState("");
    const [condition, setCondition] = useState("");
    const [currency, setCurrency] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [listingType, setListingType] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [hasParking, setHasParking] = useState(false);
    const [parkingQty, setParkingQty] = useState("");
    const [petFriendly, setPetFriendly] = useState(false);
    const [status, setStatus] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minSquareFeet, setMinSquareFeet] = useState("");
    const [maxSquareFeet, setMaxSquareFeet] = useState("");
    const [zipCode, setZipCode] = useState("");
    


    const handleOnSearch = () => {
        onSearch({
            code,
            floor,
            condition,
            currency,
            bedrooms,
            bathrooms,
            listingType,
            categoryId,
            petFriendly,
            status,
            hasParking,
            parkingQty,
            minPrice,
            maxPrice,
            minSquareFeet,
            maxSquareFeet,
            zipCode
        });
    };

    const clearFields = () => {
        const {
            code: codeInitial,
            floor: floorInitial,
            condition: conditionInitial,
            currency: currencyInitial,
            bedrooms: bedroomsInitial,
            bathrooms: bathroomsInitial,
            listingType: listingTypeInitial,
            categoryId: categoryIdInitial,
            petFriendly: petFriendlyInitial,
            status: statusInitial,
            hasParking: hasParkingInitial,
            parkingQty: parkingQtyInitial,
            minPrice: minPriceInitial,
            maxPrice: maxPriceInitial,
            minSquareFeet: minSquareFeetInitial,
            maxSquareFeet: maxSquareFeetInitial,
            zipCode: zipCodeInitial
        } = queryString.parse(
            window.location.properties
        );

        setCode(codeInitial || "");
        setFloor(floorInitial || "");
        setCondition(conditionInitial || "");
        setCurrency(currencyInitial || "");
        setBedrooms(bedroomsInitial || "");
        setBathrooms(bathroomsInitial || "");
        setListingType(listingTypeInitial || "");
        setCategoryId(categoryIdInitial || "");
        setPetFriendly(petFriendlyInitial === "true");
        setStatus(statusInitial || "");
        setHasParking(hasParkingInitial === "true");
        setParkingQty(parkingQtyInitial || "");
        setMinPrice(minPriceInitial || "");
        setMaxPrice(maxPriceInitial || "");
        setMinSquareFeet(minSquareFeetInitial || "");
        setMaxSquareFeet(maxSquareFeetInitial || "");
        setZipCode(zipCodeInitial || "");
    }

    const handleOnClear = () => {        
        clearFields();
    }

    useEffect(() => {
        clearFields();
    }, []);

    return (
        <Sidebar title="Filtros">
            <div className="overflow-auto lg:overflow-hidden divide-y">
                <div className="flex items-center justify-center gap-x-2 py-3">
                    {listingTypes.map((listingTypeItem, i) => (
                        <button 
                            key={i} 
                            className={`btn text-sm ${listingType == listingTypeItem.value ? 'btn-primary' : 'btn-default'}`}
                            value={listingTypeItem.value} 
                            onClick={e => setListingType(e.target.value)}
                        >
                            {listingTypeItem.label}
                        </button>
                    ))}                   
                </div>
                <div className="relative py-3">
                    <span className="font-semibold text-gray-900">Buscar por código</span>
                    <Input type="text" placeholder="CODE" value={code} onChange={e => setCode(e.target.value)} />
                </div>
                <div className="realtive py-3">
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
                </div>
                {/* condition */}
                <div className="realtive py-3">
                    <div><span className="font-semibold text-gray-900">Estatus</span></div>
                    <select className="bg-slate-200 border-slate-400 text-gray-900 text-sm rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 block w-full p-2.5 " 
                        defaultValue={status != "" ? status : 0} 
                        onChange={e => setStatus(e.target.value)}
                    >
                        <option value="0">Selecciona un estatus</option>
                        {(propertyStatus || []).map(status => (
                            <option key={status.value} value={status.value}>{status.label}</option>
                        ))}
                    </select>
                </div>
                {/* condition */}
                <div className="realtive py-3">
                    <div><span className="font-semibold text-gray-900">Condición</span></div>
                    <select className="bg-slate-200 border-slate-400 text-gray-900 text-sm rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 block w-full p-2.5 " 
                        defaultValue={condition != "" ? condition : 0} 
                        onChange={e => setCondition(e.target.value)}
                    >
                        <option value="0">Selecciona una condición</option>
                        {(propertyConditions || []).map(condition => (
                            <option key={condition.value} value={condition.value}>{condition.label}</option>
                        ))}
                    </select>
                </div>
                {/* price */}
                <div className="relative py-3">
                    <div className="realtive mt-3">
                        <span className="font-semibold text-gray-900">Precio</span>
                        <select className="bg-slate-200 border-slate-400 text-gray-900 text-sm rounded-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 block w-full p-2.5 "
                            defaultValue={currency != "" ? currency : 0}
                            onChange={e => setCurrency(e.target.value)}
                        >
                            <option value="0">Selecciona una divisa</option>
                            {currencies.map((currency, i) => (
                                <option key={i} value={currency.value}>{currency.label}</option>
                            ))}
                        </select>
                    </div>            
                    <div className="flex items-center space-x-2">
                        <Input type="number" placeholder="$ Min" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
                        <Input type="number" placeholder="$ Max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
                    </div>
                </div>
                {/* zip code */}
                <div className="relative py-3">
                    <div><span className="font-semibold text-gray-900">Código de área (Zip Code)</span></div>
                    <div className="flex items-center" role="group">
                        <Input type="text" className="text-center" value={zipCode} onChange={e => setZipCode(e.target.value)} />
                    </div>
                </div>
                {/* bedrooms */}
                <div className="relative py-3">
                    <div><span className="font-semibold text-gray-900">Habitaciones</span></div>
                    <div className="flex items-center" role="group">
                        <Input type="number" className="text-center" value={bedrooms} onChange={e => setBedrooms(e.target.value)} />
                    </div>
                </div>
                <div className="relative py-3">
                    <div><span className="font-semibold text-gray-900">Baños</span></div>
                    <div className="flex items-center" role="group">
                        <Input type="number" className="text-center" value={bathrooms} onChange={e => setBathrooms(e.target.value)} />
                    </div>
                </div>
                <div className="relative py-3">
                    <span className="font-semibold text-gray-900">Número de Piso</span>
                    <Input type="number" value={floor} onChange={e => setFloor(e.target.value)} />
                </div>
                <div className="relative py-3">
                    <Accordion label="Features">
                        <div className="flex flex-col px-4 bg-slate-100">
                            <label className="cursor-pointer py-3">
                                <CheckBox 
                                    checked={hasParking} 
                                    onChange={() => setHasParking(value => !value)} 
                                />
                                <span className="ml-3 text-base text-gray-600">Parqueo incluido</span>
                                {hasParking && (
                                <div className="relative py-5">
                                    <div><span className="font-semibold text-gray-900">Parqueos (Cant.)</span></div>
                                    <div className="flex items-center" role="group">
                                        <Input type="number" className="text-center" value={parkingQty} onChange={e => setParkingQty(e.target.value)} />
                                    </div>
                                </div>
                            )}
                            </label>
                            
                            <label className="cursor-pointer py-3">
                                <CheckBox 
                                    checked={petFriendly} 
                                    onChange={() => setPetFriendly(value => !value)} 
                                />
                                <span className="ml-3 text-base text-gray-600">Pet Friendly</span>
                            </label>
                        </div>
                    </Accordion>                
                </div>
            </div>
            <footer className="flex lg:flex-col items-center justify-between gap-x-5 bottom-0 w-ful px-2 lg:w-auto h-[80px] lg:h-auto lg:space-x-0 py-2 lg:py-5">                
                <button 
                    type="button"
                    className="btn btn-primary inline-block lg:!block lg:w-full text-sm" 
                    onClick={handleOnSearch}
                >
                    <FontAwesomeIcon icon={faSearch} className="mr-2" />Buscar
                </button>
                <button 
                    type="button"
                    className="btn btn-default inline-block lg:!block lg:w-full text-sm"
                    onClick={handleOnClear}
                >
                    <FontAwesomeIcon icon={faEraser} className="mr-2" />Limpiar
                </button>
            </footer>
        </Sidebar>
    )
}