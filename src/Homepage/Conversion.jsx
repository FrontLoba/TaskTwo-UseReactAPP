import './Conversion.css';
import manualScale from '../assests/scale_.png'
import digitScale from '../assests/conversion.png'

function Conversion () {
    return (
        <section className="conversion">
            <h2>Convert any Cryptocurrency to Fiat currency your choice.</h2>
            <div className="scales">
                <div className="manual-scale">
                    <img src={manualScale} alt="manual scale"/>
                </div>
                <div className="digital-scale">
                    <img className="digit" src={digitScale} alt="digital conversion" />
                </div>
            </div>
        </section>
    );
}
export default Conversion;