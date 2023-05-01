import React, { useState, useTransition } from "react";
import TipDivs from "./tipdivisions.js";
import InpComps from "./inputcomps.js";
import { useEffect } from "react";
function App() {
  // const [tip, setTip] = useState(0);
  const [color, setColor] = useState("hsl(183, 100%, 15%)");
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(5);
  const [percen, setPercent] = useState(0.05);
  const [startbill, setStartBill] = useState(150);
  const [activeStatus, setStatus] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  }
    

  )

  
  useEffect(() => {
    updater();
  }, [startbill, bill, people, percen]);
    


    function changeHandler(e) {
      e.target.style.backgroundColor = "purple";
     
    }

  

  // console.log("200" + "200" * 0.05)
  let tip = (startbill * percen) / people;
  let total = (startbill / people) + tip;
  function updater() {
    setBill(Math.round(total.toFixed(2)));
  }

  return (
    <div className="mainDiv">
      <div className="box">
        <div className="keys">
          <div className="screen">
            <div className="bill">
              <form>
                <label>Bill</label>
                <input
                  type="number"
                  value={startbill}
                  onChange={(e) => {
                    setStartBill(Number(e.target.value));
                    updater();
                    console.log("here");
                  }}
                  className="inputone"
                  placeholder="$"
                ></input>
              </form>
            </div>
            <div className="tipAmount">
              <label>Select Tip % </label>
              <div className="positioner">
                <TipDivs class={activeStatus.first ? "active" : "tipDiv"}
               
                
                  active={(e) => {
                    setStatus({
                      first: true,
                      second: false,
                      third: false,
                      fourth: false,
                      fifth: false,
                    })
                    setPercent(0.05);
                  }}
                  amount={5}
                />
                <TipDivs class={activeStatus.second ? "active" : "tipDiv"}
                
                  active={(e) => {
                   
                    setStatus({
                      first: false,
                      second: true,
                      third: false,
                      fourth: false,
                      fifth: false,
                    })
                    setPercent(0.1);
                   
                  }}
                  amount={10}
                />
                <TipDivs  class={activeStatus.third ? "active" : "tipDiv"}
                
                  active={(e) => {
                    setStatus({
                      first: false,
                      second: false,
                      third: true,
                      fourth: false,
                      fifth: false,
                    })
                   
                    setPercent(0.2);
                  }}
                  amount={20}
                />
                <TipDivs class={activeStatus.fourth ? "active" : "tipDiv"}
                
                  active={(e) => {
                    setStatus({
                      first: false,
                      second: false,
                      third: false,
                      fourth: true,
                      fifth: false,
                    })
                   
                    setPercent(0.25);
                  }}
                  amount={25}
                />
                <TipDivs  class={activeStatus.fifth ? "active" : "tipDiv"}
                 
                  active={(e) => {
                    setStatus({
                      first: false,
                      second: false,
                      third: false,
                      fourth: false,
                      fifth: true,
                    })
                   
                    setPercent(0.5);
                  }}
                  amount={50}
                />
                <input
                  placeholder="Custom"
                  onChange={(e) => {
                    setPercent(Number(e.target.value) / 100);
                    updater();
                    setStatus({
                      first: false,
                      second: false,
                      third: false,
                      fourth: false,
                      fifth: false,
                    })
                  }}
                  className="extra"
                />
              </div>
            </div>
            <div className="people">
              <form>
                <label>Number Of People</label>
                <input
                 value={people}
                  type="number"
                  onChange={(e) => {
                    console.log("active");
                    setPeople(Number(e.target.value));
                    updater();
                  }}
                  className="inputtwo"
                  placeholder=""
                ></input>
              </form>
            </div>
          </div>
        </div>
        <div className="display">
          <div className="sc">
            <div className="screenparts">
              <div className="amount">
                <div className="screenLables">
                  <p>
                    Tip amount <span>/ Person</span>
                  </p>
                </div>

                <InpComps value={Math.round(tip.toFixed(8))} />
              </div>
              <div className="total">
                <div className="screenLables">
                  <p>
                    Total <span>/ Person</span>
                  </p>
                </div>
                <InpComps value={Math.round(bill.toFixed(4))} />
              </div>
            </div>
            <div className="screenbtn">
              <button
                onClick={() => {
                  setPeople(5);
                
                  setStartBill(150);
                }}
                className="resetBtn"
              >
                RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
