import './About.css';
import Banner from '../../components/banner/Banner';
import Deroulant from '../../components/Deroulant/Deroulant';
import imageMontagne from '../../assets/image-montagne.jpg';

function About() {
  return (
    <section>
      <Banner imageSrc={imageMontagne} text="" />
      <div className="about__deroulants">
        <Deroulant
          titre="Fiabilité"
          contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Deroulant
          titre="Respect"
          contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Deroulant
          titre="Service"
          contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Deroulant
          titre="Sécurité"
          contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
        />
      </div>
    </section>
  );
}

export default About;