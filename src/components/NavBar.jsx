import React from "react";
import { HamburgerIcon } from "./icons";

export default function NavBar() {
  return (
    <header>
      <div className="navBar">
        <div className="containerNavBar">
          <div></div>
          <div>Merqueo Test</div>
          <div>
            <HamburgerIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
