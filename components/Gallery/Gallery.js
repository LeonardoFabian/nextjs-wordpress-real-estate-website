import Image from "next/image";

export const Gallery = ({columns, imageCrop, items }) => {

    let maxHeight = 0;
    let maxWidth = 0;

    if(imageCrop) {
        items.forEach(item => {
            if(item.attributes.height > maxHeight) {
                maxHeight = item.attributes.height;
            }
            if(item.attributes.width > maxWidth) {
                maxWidth = item.attributes.width;
            }
        })
    }

    const columnWidth = 100 / columns;

    return (
        <div className="max-w-5xl mx-auto py-10 flex flex-wrap">
            {items.map(item => (
                <div key={item.id} style={{ width: `${columnWidth}%` }} className="p-5 flex-grow relative">
                    <Image
                        src={item.attributes.url}
                        height={item.attributes.height}
                        width={item.attributes.width}
                        alt={item.attributes.alt || ""}
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    )
}