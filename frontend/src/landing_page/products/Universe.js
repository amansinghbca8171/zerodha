import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media\zerodhaFundhouse.png" style={{ width: "50%", margin: "0 auto" }} />
          <p className="text-small text-muted p-3">Our asset management venture <br/>
            that is creating simple and transparent index
            funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\sensibullLogo.svg" style={{ width: "50%", margin: "0 auto" }}/>
          <p className="text-small text-muted p-3">Options trading platform that lets you <br/>
              create strategies, analyze positions, and examine <br/>
              data points like open interest, FII/DII, and more.
           </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\tijori-logo.png" style={{ width: "50%", margin: "0 auto" }} />
          <p className="text-small text-muted p-3">Investment research platform <br/>
             that offers detailed insights on stocks, <br/>
             sectors, supply chains, and more.
             
            </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\streakLogo.png" style={{ width: "50%", margin: "0 auto" }}/>
          <p className="text-small text-muted p-3">Systematic trading platform <br/>
            that allows you to create and  <br/>
            strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png"style={{ width: "50%", margin: "0 auto" }} />
          <p className="text-small text-muted p-3 ">Thematic investing platform <br/>
             that helps you invest in diversified <br/>
             baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\dittoLogo.png" style={{ width: "40%", margin: "0 auto" }} />
          <p className="text-small text-muted p-3" >Personalized advice on life <br/>
             and health insurance. No spam <br/>
             and no mis-selling. </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;