
const ServiceBlock = ({
    image,
    title,
    description,
    buttonLabel,
    buttonStyle,
    reverse = false,
    quotes = [],
}) => {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8 mb-6`}>
            <div className="w-full md:w-1/2">
                <img src={image} alt={title} className="rounded-2xl shadow-xl w-full h-[407px] object-center" />
            </div>
            <div className="w-full md:w-1/2">
                <h4 className="text-2xl text-gray-700 font-semibold mb-4">{title}</h4>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700 my-10">
                    {quotes.map((quote, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <span className="mt-1 text-blue-500">
                                {quote.icon}
                            </span>
                            <p className="leading-snug">{quote.text}</p>
                        </div>
                    ))}
                </div>
                {buttonLabel && (
                    <button className={`px-5 py-2 rounded-xl mb-6 ${buttonStyle || 'bg-primary text-white'}`}>
                        {buttonLabel}
                    </button>
                )}


            </div>
        </div>
    );
};

export default ServiceBlock;
