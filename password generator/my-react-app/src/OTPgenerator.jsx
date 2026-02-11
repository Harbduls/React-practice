import React from "react";
import {useState, useEffect} from React

function OTPGenerator(){
    const initialvalue = 0;
    
    // the state variable and setter function
    const [timer, setTimer] = useState(initialvalue);
    
     <button id='generate-otp-button'>
          "Generate OTP"
         <button onClick ={() => setTimer(30) }></button> 
      
        </button>
}