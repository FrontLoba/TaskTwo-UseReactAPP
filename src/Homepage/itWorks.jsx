import './itWorks.css'
import walletCoin from "../assests/coin_wallet.png"
import conversionSign from "../assests/convert_arrow.png"
import withdrawIcon from "../assests/withdraw.png"
import curveUp from "../assests/curve_dotted_line_right.png"
import curveDown from "../assests/curve_dotted_line_left.png"

function Itworks () {
    return (
        <section className="how-it-works"> 
            <h2>How To Use CoinsKash</h2>
            <p>These are 3 simple steps on how coinskash works</p>
            <div className="howItWorks">
                <div className="work-1">
                    <img className="work-img" src={walletCoin} alt="wallet for coin"/>
                    <h3>Fund Your Crypto Wallet</h3>
                    <p>You can fund your cryptocurrency wallet by sending coin from any external wallets or buying online using your debit card</p>
                </div>
                <div className="work-2">
                    <img className="work-img" src={conversionSign} alt="conversion sign"/>
                    <h3>Convert Crypto To Fiat</h3>
                    <p>Create fiat wallet, Convert the crypto to the fiat currency of your choice, Reflection of Fiats are instant</p>
                </div>
                <div className="work-3">
                    <img className="work-img" src={withdrawIcon} alt="withdraw icon"/>
                    <h3>Withdraw To Any Local Bank</h3>
                    <p>You can withdraw your fiat currency to  any local banks, Hurray you can spend your cash, No stress.</p>
                </div>
                <div className="curve-line">
                    <img className="curve-up" src={curveUp} alt="curve-up arrow"/>
                    <img className="curve-down" src={curveDown} alt="curve-down arrow"/>
                </div>
            </div>
        </section>
    )
}

export default Itworks;