import { render, screen } from "@testing-library/react";
// Banner.test.jsx
import Banner from "../front/src/components/banner/Banner";

// describe() regroupe tous les tests liés au composant Banner
describe("Le composant Banner", () => {

  // Premier groupe : on teste quand tout se passe bien (cas nominaux)
  describe("quand toutes les props sont fournies", () => {

    // Test 1 : vérifie que le texte passé en prop s'affiche bien à l'écran
    it("should display the text passed as prop", () => {
      const expectedText = "Bienvenue"; // ce qu'on s'attend à voir
      render(<Banner imageSrc="photo.jpg" text="Bienvenue" />); // on rend le composant
      expect(screen.getByText(expectedText)).toBeInTheDocument(); // on vérifie que le texte est bien présent dans le DOM
    });

    // Test 2 : vérifie que l'image est bien appliquée via la variable CSS --banner-img
    it("should apply the image as a CSS variable", () => {
      const { container } = render(<Banner imageSrc="photo.jpg" text="Hello" />); // container donne accès au DOM brut
      const expectedValue = "url(photo.jpg)"; // ce que la variable CSS doit contenir
      expect(container.firstChild.style.getPropertyValue("--banner-img")).toEqual(expectedValue); // on lit la variable CSS et on compare
    });

    // Test 3 : vérifie que la div a bien la classe "banner" pour que le CSS s'applique
    it("should have the CSS class 'banner'", () => {
      const { container } = render(<Banner imageSrc="photo.jpg" text="Test" />);
      expect(container.firstChild).toHaveClass("banner"); // on vérifie la présence de la classe CSS
    });

  });

  // Deuxième groupe : on teste les cas limites (props vides ou absentes)
  describe("quand les props sont vides ou absentes", () => {

    // Test 4 : vérifie que le composant ne plante pas si text est une chaîne vide
    it("should render without crashing when text is empty", () => {
      const { container } = render(<Banner imageSrc="photo.jpg" text="" />);
      expect(container.firstChild).toBeInTheDocument(); // le composant doit quand même s'afficher
    });

    // Test 5 : vérifie que le composant ne plante pas si imageSrc est vide
    it("should render without crashing when imageSrc is empty", () => {
      const { container } = render(<Banner imageSrc="" text="Test" />);
      const expectedValue = "url()"; // la variable CSS doit exister mais être vide
      expect(container.firstChild.style.getPropertyValue("--banner-img")).toEqual(expectedValue);
    });

    // Test 6 : vérifie que le composant ne plante pas si aucune prop n'est fournie
    it("should render without crashing when no props are provided", () => {
      const { container } = render(<Banner />); // rendu sans aucune prop
      expect(container.firstChild).toBeInTheDocument(); // le composant doit quand même exister dans le DOM
    });

  });

});