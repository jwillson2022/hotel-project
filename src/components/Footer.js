import React from "react";

const info = [
  "123 Fake street, London, E14UD",
  "hello@fakehotel.com",
  "0123 456789"
];

function Footer() {
  return (
    <ul className="footer">
      {info.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}

export default Footer;
