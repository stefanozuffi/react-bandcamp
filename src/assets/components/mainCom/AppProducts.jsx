import ProductCard from "./ProductCard"
import albums from "../../data/albums"

export default function AppProducts() {
    
    return(
        <div className="row">
            {albums.map(album => {
                return (
                <ProductCard 
                key={album.id}
                imgUrl={album.imgUrl}
                titolo={album.titolo}
                artista={album.artista}
                genere={album.genere} />)
                })}
            
        </div>
    )
}