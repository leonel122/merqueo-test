import React from "react";
import { HamburgerIcon } from "./icons";

export default function NavBar() {
  return (
    <header>
      <nav className="navBar">
        <div className="containerNavBar">
          <div>Merqueo Test</div>
          <div>
            <HamburgerIcon />
          </div>
        </div>
      </nav>
    </header>
  );
}
