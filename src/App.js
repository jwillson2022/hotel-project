import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Header from "./components/Header";
import TouristinfoCard from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import Restaurant from "./Restaurant";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />
      <TouristinfoCard />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
