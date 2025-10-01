export default function ProductCard(props) {
    return(
        <div className="col-3">
            <div className="card">
                <img src={props.imgUrl} alt="Album Cover"/>
                <h5>{`${props.titolo} by ${props.artista}`}</h5>
                <p>{props.genere}</p>
            </div>

        </div>
    )
}