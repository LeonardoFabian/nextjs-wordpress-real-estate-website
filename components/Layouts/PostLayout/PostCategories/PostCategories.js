import Link from "next/link"
import { mapCategories } from "utils/mapCategories"

export const PostCategories = ({categories}) => {
    return (
        <>
            {!!categories && (
                <ul className="text-gray-600 uppercase flex items-center justify-center divide-x">
                    {categories.map(category => (
                        <li key={categories.databaseId}>
                            <Link href={`/category/${category.slug}`} className="cursor-pointer">
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}