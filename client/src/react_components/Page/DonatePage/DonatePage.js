import DonatePayPal from "../../HelperModules/DonatePayPal";


export default function DonatePage() {
    return (
        <div>
            <div className="contentpage">
                <h1>Donate</h1>
                <h2>Why donate?</h2>
                <h5>Purely voluntary, no pressure bud :)</h5>
                <p>
                    If you liked what you saw and want to support me for future projects, feel free to :).
                    Nothing is mandatory! But any help is appreciated.

                </p>
                <h2>How to donate?</h2>
                    
                <p>
                    You can use this <span>Donate</span> button to help me via PayPal!
                    <DonatePayPal className="donate_button"/>
                </p>
            </div>
            
        </div>

    );
}