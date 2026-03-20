import { Link } from "react-router-dom";
import "./404.css";

function Error() {
  return (
    <div className="erreur">
      <h1 className="erreur__titre">404</h1>
      <p className="erreur__message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="erreur__lien">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;