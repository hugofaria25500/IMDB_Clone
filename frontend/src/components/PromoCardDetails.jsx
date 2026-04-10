function PromoCardDetails({ icon, description }) {
    return (
        <div className="flex flex-col items-center bg-violet-600/20 p-4 rounded-md shadow-xl" >
            <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full shadow-lg mb-2">
                <img src={icon} alt="Promo Icon" className="w-full h-full p-[10px]" />
            </div>
            <p className="text-md text-white text-center font-bold">{description}</p>
        </div>
    );
}

export default PromoCardDetails;