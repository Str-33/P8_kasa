import { render, screen, fireEvent } from "@testing-library/react";
import Deroulant from "./Deroulant";

describe("Le composant Deroulant", () => {

  // Test 1 : vérifier que le titre s'affiche bien
  it("should display the title passed as prop", () => {
    render(<Deroulant titre="Ma question" contenu="Ma réponse" />);
    expect(screen.getByText("Ma question")).toBeInTheDocument();
  });

  // Test 2 : vérifier que le contenu est caché par défaut
  it("should not display content by default", () => {
    render(<Deroulant titre="Ma question" contenu="Ma réponse" />);
    expect(screen.queryByText("Ma réponse")).not.toBeInTheDocument(); // fermé par défaut
  });

  // Test 3 : vérifier que le contenu apparaît après un clic
  it("should display content after clicking the header", () => {
    render(<Deroulant titre="Ma question" contenu="Ma réponse" />);
    fireEvent.click(screen.getByText("Ma question")); // on simule le clic
    expect(screen.getByText("Ma réponse")).toBeInTheDocument(); // contenu visible
  });

  // Test 4 : vérifier que le contenu se cache après un deuxième clic
  it("should hide content after clicking the header twice", () => {
    render(<Deroulant titre="Ma question" contenu="Ma réponse" />);
    fireEvent.click(screen.getByText("Ma question")); // ouverture
    fireEvent.click(screen.getByText("Ma question")); // fermeture
    expect(screen.queryByText("Ma réponse")).not.toBeInTheDocument(); // caché à nouveau
  });

  // Test 5 : vérifier que le contenu fonctionne aussi avec une liste
  it("should display a list when contenu is an array", () => {
    render(<Deroulant titre="Ma question" contenu={["élément 1", "élément 2"]} />);
    fireEvent.click(screen.getByText("Ma question")); // on ouvre
    expect(screen.getByText("élément 1")).toBeInTheDocument();
    expect(screen.getByText("élément 2")).toBeInTheDocument();
  });

});