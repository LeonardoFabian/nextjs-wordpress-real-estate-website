export const Map = ({content}) => { 
    return (
        <div 
            className="map w-full h-[50vh] lg:h-64 overflow-hidden my-10"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}