/*COMPONENTS*/
import MediaCard from "../components/MediaCard";

function Grid({ catalog, onOpenModal, loading }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transition-opacity duration-300">
            {loading
              ? Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="bg-zinc-800 h-[250px] rounded-xl animate-pulse" />
                ))
              : catalog.map((catalog) => (
                  <MediaCard
                    key={catalog.id}
                    item={catalog}
                    onClick={onOpenModal}
                  />  
                ))}
          </div>
    );
} 

export default Grid;