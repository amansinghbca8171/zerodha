import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
      
      <div className="row p-3 text-muted">

            <div className="col-4 p-4 text-center">
                <img
                  src="media/Nikhil.jpg"
                  style={{ borderRadius: "100%", width: "60%" }}
                />
                <h4 className="mt-5">Nikhil Kamath</h4>
                <h6>Co-founder & CFO</h6>
            </div>
    
            <div className="col-4 p-4 text-center">
                <img
                  src="media/Kailash.jpg"
                  style={{ borderRadius: "100%", width: "60%" }}
                />
                <h4 className="mt-5">Dr. Kailash Nadh</h4>
                <h6>CTO</h6>
            </div>
    
            <div className="col-4 p-4 text-center">
                <img
                  src="media/Venu.jpg"
                  style={{ borderRadius: "100%", width: "60%" }}
                />
                <h4 className="mt-5">Venu Madhav</h4>
                <h6>COO</h6>
            </div>

            <div className="col-4 p-4 text-center">
                <img
                  src="media/Hanan.jpg"
                  style={{ borderRadius: "100%", width: "60%" }}
                />
                <h4 className="mt-5">Hanan Delvi</h4>
                <h6>CCO</h6>
            </div>
    
            <div className="col-4 p-4 text-center">
                <img
                  src="media/Seema.jpg"
                  style={{ borderRadius: "100%", width: "60%" }}
                />
                <h4 className="mt-5">Seema Patil</h4>
                <h6>Director</h6>
            </div>
    
            <div className="col-4 p-4 text-center">
                <img
                  src="media/karthik.jpg"
                  style={{ borderRadius: "100%", width: "60%" }}
                />
                <h4 className="mt-5">Karthik Rangappa</h4>
                <h6>Chief of Education</h6>
            </div>

            <div className="col-4 p-4 text-center">
                <img
                  src="media/Austin.jpg"
                  style={{ borderRadius: "100%", width: "60%" }}
                />
                <h4 className="mt-5">Austin Prakesh</h4>
                <h6>Director Strategy</h6>
            </div>

      </div>
       

    </div>
  );
}

export default Team;