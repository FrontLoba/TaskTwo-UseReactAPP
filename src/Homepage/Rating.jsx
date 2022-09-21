import './Rating.css'
import screen from '../assests/full_screen.svg'
import rateScreen from '../assests/rates_mobView.svg'

function RatingTable () {
    return (
        <section className="rate-table">
            <h3 className="rate-table-h3">Withdraw in 3 Clicks</h3>
            <p className="rate-table-p">With just few clicks you can make withdrawals to any local bank of your choice</p>
            <div className="wide-screen">
                <img className="wide-view" src={screen} alt="rate table" />
            </div>
            <div className="rate-mobile-view">
                <h3 className="m-view-h3">Exchange Rates</h3>
                <p className="m-view-p">The conversion of 1  unit of cryptocurrency to their corresponding fiat are listed below</p>
                <img className="m-view-img" src={rateScreen} alt="rate view" />
            </div>
        </section>        
    )
}
export default RatingTable;