import { useState } from "react";



 let TipDivs = function(props) {
      
    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
      setActive(!isActive); 
      console.log('hello');
     };
    

    return (
        <div onClick={props.active}  className={isActive ? "tipDiv" : "tipDivActive"}>{props.amount} %</div>
    )
}


export default TipDivs;