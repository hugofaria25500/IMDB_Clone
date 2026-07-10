function PromoCardDetails({ icon, title, description }) {
    return (
        <div className="group flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 hover:bg-violet-600/10 p-6 rounded-2xl shadow-xl transition-all duration-300 cursor-default">
            <div className="h-14 w-14 flex items-center justify-center bg-violet-600/30 border border-violet-500/30 group-hover:bg-violet-600/50 rounded-full mb-4 transition-colors duration-300">
                <img src={icon} alt={title} className="w-7 h-7 object-contain" />
            </div>
            {title && (
                <h3 className="text-white font-semibold text-base mb-1 tracking-wide">{title}</h3>
            )}
            <p className="text-gray-400 text-sm text-center leading-relaxed">{description}</p>
        </div>
    );
}

export default PromoCardDetails;