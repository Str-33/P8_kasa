import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";

function Location() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/properties/${id}`)
      .then(res => res.json())
      .then(data => setLogement(data));
  }, [id]);

  if (!logement) return <p>Chargement...</p>;

  return (
    <div>
      <Carousel pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <p>{logement.description}</p>
    </div>
  );
}

export default Location;