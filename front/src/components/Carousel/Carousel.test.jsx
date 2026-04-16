import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

// données mockées pour simuler les images passées en props
const picturesMock = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];

describe("Le composant Carousel", () => {

  // Test 1 : vérifier que le composant s'affiche sans crasher
  it("should render without crashing", () => {
    render(<Carousel pictures={picturesMock} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  // Test 2 : vérifier que la première image s'affiche au départ
  it("should display the first picture on initial render", () => {
    render(<Carousel pictures={picturesMock} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", "photo1.jpg"); // index 0 par défaut
  });

  // Test 3 : vérifier que le clic sur "suivant" affiche bien l'image suivante
  // on cible le bouton par sa classe CSS car il n'a pas de texte visible
  it("should display the next picture when clicking next button", () => {
    const { container } = render(<Carousel pictures={picturesMock} />);
    const boutonSuivant = container.querySelector(".carousel__btn--droite"); // cible par classe CSS
    fireEvent.click(boutonSuivant); // on simule le clic
    expect(screen.getByRole("img")).toHaveAttribute("src", "photo2.jpg"); // index passe à 1
  });

  // Test 4 : vérifier que le composant n'affiche rien si pictures est vide
  it("should render nothing when pictures is empty", () => {
    const { container } = render(<Carousel pictures={[]} />);
    expect(container.firstChild).toBeNull(); // le composant retourne null
  });
  // Test 5 : vérifier que le clic sur "précédent" affiche bien l'image précédente
it("should display the previous picture when clicking previous button", () => {
  const { container } = render(<Carousel pictures={picturesMock} />);
  const boutonPrecedent = container.querySelector(".carousel__btn--gauche"); // bouton gauche
  fireEvent.click(boutonPrecedent); // on simule le clic
  expect(screen.getByRole("img")).toHaveAttribute("src", "photo3.jpg"); // boucle sur la dernière
});

});