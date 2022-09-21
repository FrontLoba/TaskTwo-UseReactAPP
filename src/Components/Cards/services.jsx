import '../Cards/services.css'

function Services (props) {
    return (
        <div className="y-cards">
            <div className="y-coin">
                <div className="yCoin-1">
                    <img className="card-img" src={props.image} alt="why coinkash's icon" />
                </div>
                <h3>{props.heading}</h3>
                <p>{[props.content]}</p>
            </div>
        </div>

    )
}
export default Services