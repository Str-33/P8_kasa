import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CardLocation from "./Cardlocation";

// Wrapper avec le provider nécessaire
// Ici c'est MemoryRouter car CardLocation utilise <Link>
describe("CardLocation", () => {

  // Test 1 : vérifier que le composant render sans crasher
  // Même logique que "Should render without crash"
  it("should render without crashing", () => {
    render(
      <MemoryRouter>
        <CardLocation id="1" title="Appartement Paris" cover="photo.jpg" />
      </MemoryRouter>
    );
  });

  // Test 2 : vérifier que le titre passé en props s'affiche bien
  // Même logique que la vérification du textContent 
  it("should display the title passed as prop", () => {
    render(
      <MemoryRouter>
        <CardLocation id="1" title="Appartement Paris" cover="photo.jpg" />
      </MemoryRouter>
    );
    // screen est le body qui contient notre composant 
    const titleElement = screen.getByText("Appartement Paris");
    expect(titleElement).toBeInTheDocument();
  });

  // Test 3 : vérifier que le lien pointe bien vers la bonne page
  // On utilise getByRole pour cibler un élément par son rôle
  it("should have a link pointing to the correct page", () => {
    render(
      <MemoryRouter>
        <CardLocation id="42" title="Studio" cover="photo.jpg" />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/location/42");
  });

  // Test 4 : simuler un clic sur le lien et vérifier que ça ne crashe pas
  // fireEvent.click() 
  it("should not crash when user clicks on the card", () => {
    render(
      <MemoryRouter>
        <CardLocation id="1" title="Studio" cover="photo.jpg" />
      </MemoryRouter>
    );
    const linkElement = screen.getByRole("link");
    fireEvent.click(linkElement); // on simule le clic utilisateur
    expect(linkElement).toBeInTheDocument();
  });

});