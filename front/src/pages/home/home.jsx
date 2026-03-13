import React from "react";
import CardLocation from "../../components/card/Cardlocation.jsx";
import Banner from "../../components/banner/Banner.jsx";
import bannerImg from "../../assets/banner.png";
import "./home.css";

const locations = [
  { id: 1, title: "Titre de la location" },
  { id: 2, title: "Titre de la location" },
  { id: 3, title: "Titre de la location" },
  { id: 4, title: "Titre de la location" },
  { id: 5, title: "Titre de la location" },
  { id: 6, title: "Titre de la location" },
];

function Home() {
  return (
    <>
      <Banner imageSrc={bannerImg} text="Chez nous, partout et ailleurs" />
      <div className="home">
        {locations.map((loc) => (
          <CardLocation key={loc.id} id={loc.id} title={loc.title} />
        ))}
      </div>
    </>
  );
}

export default Home;