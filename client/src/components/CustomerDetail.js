import React from 'react'
import Esewa from '../images/esewa.jpeg'
import Paypal from '../images/paypal.webp'




const CustomerDetail = () => {
    const [payment, setPayment] = React.useState(false);
    const [detail, setDetail] = React.useState(true);
    const [button, setButton] = React.useState(true)
    
    
    const DetailComponent = () => (
        <form id="form">
        <h1>Customer Detail Form</h1>
           <label>FullName:</label>
           <input type="text" name="name"/> <br/> 
           <label>Email:</label>
           <input type="email" name="email" id="email" required/> <br/> 
           <label>Address: </label>
           <input type="text" name="address" id="address" /> <br/> 
            <label>contact No:</label>
            <input type="text" id="contact" /> <br/> 
            
       </form>
    )
    
    const togglePayment = () => {
        setPayment(true);
        setDetail(false);
        setButton(false)
    }

    const PaymentComponent = () => (
        <div id="payment">
            <h1>Select Payment Methods</h1>
            <a href="https://esewa.com.np/#/home">
              <button><img id="esewa" src={Esewa} alt="Loading Esewa...."/></button>
            </a> 
             <a href="https://www.paypal.com/np/home">
               <button><img id="paypal" src={Paypal} alt="Loading Paypal..."/> </button> 
             </a> <br/> <br/>
            <form>
                <h1>Banking Detail</h1> 
                <label>Cardholder Name</label>
                <input type="text"/> <br/>
                <label>Card Number</label> 
                <input type="number"/> <br/>
                <label>Expiry Date</label>
                <input type="month"/> <br/>
                <label id="country">Country</label>
                 <select>
                     <option>Nepal</option>
                     <option>India</option>
                     <option>China</option>
                     <option>Canada</option>
                     <option>Japan</option>
                     <option>Usa</option>
                 </select>
                 <br/>

                <button id="submitbtn">Submit Payment</button>
            <button id="backbtn" onClick={toggleDetail}>Back to Detail</button>
            </form> 
        </div>

)


   const toggleDetail = () => {
         setDetail(true);
         setPayment(false);
         setButton(true)
     }


    return (
        <div>
          {payment ? <PaymentComponent /> : null} 
          {detail? <DetailComponent /> : null }
          {button? <button id="paymentbtn" onClick={togglePayment} >Procced to Payment</button> : null }  
        </div>
    )
}

export default CustomerDetail
