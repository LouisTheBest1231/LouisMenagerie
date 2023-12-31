import { useEffect,useRef } from "react";


//React Module for the PayPal button of the 'DonatePage'
//**************************Uses the PayPal SDK********
export default function DonatePayPal({className}){
    
    const donate_button = useRef(null)
    let button_id = "donation_button_id"
    useEffect(()=>{
        donate_button.current -= window.PayPal.Donation.Button({
            env:'production',
        hosted_button_id:'K4AGYG4CJ7J3J',
        image: {
        src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
        alt:'Donate with PayPal button',
        title:'PayPal',
        },}).render("#" + button_id)

        return ()=>{
            //Destructor to remove all instances of the button on the page : necessary to prevent weird behavior
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