import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import "./Location.css";

/* ── Étoiles ──────────────────────────────────────────────────────── */
function StarRating({ rating }) {
  const note = parseInt(rating, 10);
  return (
    <div className="stars" aria-label={`Note : ${note} sur 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`star ${n <= note ? "star--on" : "star--off"}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

/* ── Accordéon ────────────────────────────────────────────────────── */
function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="collapse__title">{title}</span>
        <span className={`collapse__arrow ${open ? "collapse__arrow--open" : ""}`} />
      </button>
      {open && <div className="collapse__body">{children}</div>}
    </div>
  );
}

/* ── Page Location ────────────────────────────────────────────────── */
function Location() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) {
          navigate("/404", { replace: true });
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) setLogement(data);
      })
      .catch(() => navigate("/404", { replace: true }));
  }, [id, navigate]);

  if (!logement) return null;

  const { title, location, description, pictures, tags, host, rating, equipments } = logement;

  return (
    <main className="location">
      <Carousel pictures={pictures} />

      {/* ── Infos principales ── */}
      <div className="location__info">
        <div className="location__info-left">
          <h1 className="location__title">{title}</h1>
          <p className="location__city">{location}</p>
          <ul className="location__tags">
            {tags.map((tag) => (
              <li key={tag} className="location__tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="location__info-right">
          <div className="location__host">
            <p className="location__host-name">
              {host.name.split(" ").map((part, i) => (
                <span key={i}>{part}</span>
              ))}
            </p>
            <img
              className="location__host-avatar"
              src={host.picture}
              alt={host.name}
            />
          </div>
          <StarRating rating={rating} />
        </div>
      </div>

      {/* ── Accordéons ── */}
      <div className="location__collapses">
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="location__equipments">
            {equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
}

export default Location;