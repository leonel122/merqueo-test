import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("Se monta el componente Navbar", () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/merqueo/i);
  expect(linkElement).toBeInTheDocument();
});
