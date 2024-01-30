export const FeatureSection = ({children, title, content}) => {
    return (
        <section className="feature-section max-w-full bg-white py-20 space-y-8">
            <div className="container text-center">
                <h2 className="font-heading max-w-5xl mx-auto my-5 text-5xl text-center">{title}</h2>
                <p className="max-w-5xl mx-auto text-center text-md">{content}</p>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16 relative">                
                {children}
            </div>
        </section>
    )
}