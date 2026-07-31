function CarouselCard({ catalog }) {
    return (
        <div className="w-[200px] h-[300px] bg-gray-800 rounded-lg overflow-hidden relative group cursor-pointer snap-start shrink-0">
            
            <img src={catalog.image} alt={catalog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-bold">{catalog.title}</h3>
                <p className="text-gray-400 text-sm">{catalog.year}</p>
            </div>
        </div>
    );
}   

export default CarouselCard;