import { useState } from "react";
import { useEffect } from "react";


 let TipDivs = function(props) {
    
     
    

    return (
        <button type='submit' name="tip"  onClick={props.active}  className={props.class}>{props.amount} %</button>
    )
}


export default TipDivs;