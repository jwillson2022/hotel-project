import React from "react";
import manchester2 from "./images/manchester2.jpg";
import glasgow2 from "./images/glasgow2.jpg";
import london2 from "./images/london2.jpg";

function TouristInfoCards() {
  return (
    <div className="tourist-main">
      <div className="card">
        <img src={glasgow2} alt="glasgow" />
        <h2>Glasgow</h2>
        <p className="summary">
          Glasgow,west-central Scotland. It is situated along both banks of the
          River Clyde ,20 miles (32 km) from that river’s mouth on the western,
          or Atlantic, coast. Glasgow is Scotland’s largest city,{" "}
        </p>
        <a
          href="https://peoplemakeglasgow.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>More Info</button>
        </a>
      </div>

      <div className="card">
        <img src={manchester2} alt="manchester" />
        <h2>Manchester</h2>
        <p className="summary">
          {" "}
          Manchester, city and metropolitan borough in the metropolitan county
          of Greater Manchester urban county, northwestern England. Most of the
          city, including the historic core, is in the historic county of
          Lancashire{" "}
        </p>
        <a
          href="https://visitmanchester.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>More Info</button>
        </a>
      </div>

      <div className="card">
        <img src={london2} alt="london" />
        <h2>London</h2>
        <p className="summary">
          London is a famous and historic city. It is the capital of England in
          the United Kingdom. The city is quite popular for international
          tourism because London is home to one of the oldest-standing
          monarchies in the western hemisphere.
        </p>
        <a
          href="https://visitlondon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>More Info</button>
        </a>
      </div>
    </div>
  );
}

export default TouristInfoCards;
