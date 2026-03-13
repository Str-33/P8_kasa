import React, { useState, useEffect } from "react";
import CardLocation from "../../components/card/Cardlocation.jsx";
import Banner from "../../components/banner/Banner.jsx";
import bannerImg from "../../assets/banner.png";
import "./home.css";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/properties")
      .then(res => res.json())
      .then(data => setLogements(data));
  }, []);

  return (
    <>
      <Banner imageSrc={bannerImg} text="Chez nous, partout et ailleurs" />
      <div className="home">
        {logements.map((logement) => (
          <CardLocation
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </>
  );
}

export default Home;