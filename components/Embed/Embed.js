export const Embed = ({url}) => {
    console.log("URL: ", url);
    return (
        <div className="max-w-5xl mx-auto my-5">
            <iframe
                className="w-full aspect-auto"
                src={url}
            ></iframe>
        </div>
    )
}