import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Heading } from "components/Heading"

export const FeaturesList = ({features}) => {
    return (
        <section className="property-features-list max-w-7xl mx-auto my-10 text-gray-600">
            <header className="mb-10">
                <Heading level="5" content="Características" className="text-gray-800 font-medium" />
            </header>
            {features && (
                <ul className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4 bg-yellow-300 bg-opacity-20 p-6 rounded-lg">
                    {features.map(feature => (
                        <li key={feature.id} className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCircleCheck} size="lg" />{feature.name}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}