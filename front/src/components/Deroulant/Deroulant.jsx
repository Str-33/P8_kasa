import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Deroulant.css";

function Deroulant({ titre, contenu }) {
    const [estOuvert, setEstOuvert] = useState(false);

    return (
        <div className="deroulant">
            <div
                className="deroulant__entete"
                onClick={() => setEstOuvert(!estOuvert)}
            >
                <span className="deroulant__titre">{titre}</span>

                <span className={`deroulant__chevron ${estOuvert ? "deroulant__chevron--ouvert" : ""}`} />
            </div>

            <AnimatePresence>
                {estOuvert && (
                    <motion.div
                        className="deroulant__contenu"
                        initial="ferme"
                        animate="ouvert"
                        exit="ferme"
                        variants={{
                            ouvert: { height: "auto", opacity: 1 },
                            ferme: { height: 0, opacity: 0 }
                        }}
                    >
                        {Array.isArray(contenu) ? (
                            <ul className="deroulant__liste">
                                {contenu.map((element, index) => (
                                    <li key={`element-${index}`}>{element}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{contenu}</p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Deroulant;