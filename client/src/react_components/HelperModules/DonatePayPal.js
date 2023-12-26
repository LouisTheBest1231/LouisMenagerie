import { useEffect,useRef } from "react";

export default function DonatePayPal({className}){
    
    const donate_button = useRef(null)
    let button_id = "donation_button_id"
    useEffect(()=>{
        donate_button.current -= window.PayPal.Donation.Button({
            env:'sandbox',
        hosted_button_id:'K5DA362XRR5QL',
        image: {
        src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
        alt:'Donate with PayPal button',
        title:'PayPal',
        },}).render("#" + button_id)

        return ()=>{
            const div = document.getElementById(button_id)
            if(div){
                while(div.firstChild){
                    div.removeChild(div.firstChild)
                }
            }
        }

    },[]);
    
    return(
        <div id={button_id} className={className}></div>
    );
}