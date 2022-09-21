import './WhyCoin.css'
import yCoin from "../assests/yCoin-1.svg";
import yCoinTwo from "../assests/yCoin-2.svg";
import yCoinThree from "../assests/yCoin-3.svg";
import yCoinFour from "../assests/yCoin-4.svg";
import yCoinFive from "../assests/yCoin-5.svg";
import yCoinSix from "../assests/yCoin-6.svg";
import Services from "../Components/Cards/services"




let data = [
    {id: 1, heading :'Convert Cryptocurrency',
    content: 'Convert any cryptocurrency in your wallets to any fiat currency of your locality seamlessly', image:yCoin },
    {id: 2, heading :'Fully Secured',
    content: 'All transactions and conversions are safe, We operate under a fully encrypted network', image:yCoinTwo },
    {id: 3, heading :'Low Transaction Fee',
    content: 'Convert any cryptocurrency to fiat of your choice at a low transaction fee. No hidden or extra charges', image:yCoinThree },
    {id: 4, heading :'Fast Transaction',
    content: 'Conversion and withdrawals of your currency are swift and undelayed, No network barriers', image:yCoinFour },
    {id: 5, heading :'Flexible Withdrawal',
    content: 'You can withdraw your fiat currency into any local banks in your locality without any hassle', image:yCoinFive },
    {id: 6, heading :'24/7 Customer Care',
    content: 'We value our customers and respond to any challenges via emails and live chats anytime anyday.', image:yCoinSix },
]


function WhyCoin () {
    return (
        <section className="y-CoinsKash">
            <h2>Why Coinskash ?</h2>
            <p>These are why you should choose coinkash over other platforms</p>
            <div className="cards">
            {
                data.map((item) => {
                    let {id, heading, content, image} =item;
                    return <Services heading={heading} content={content} image={image} key={id} />
                })
            }
                </div> 

        
            
        </section>
    )
}

export default WhyCoin;