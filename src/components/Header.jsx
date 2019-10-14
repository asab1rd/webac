import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [toggleActive, settoggleActive] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(toggleActive ? "active" : "");
  }, [toggleActive]);

  const handleClick = () => {
    // On ne doit changer l'etat que si on est en responsive cad 768px
    settoggleActive(window.innerWidth <= 768 ? !toggleActive : false);
  };

  const navItems = (
    <ul id="menu">
      <li>
        <Link to="/about" onClick={handleClick}>
          ABOUT<span>.</span>
        </Link>
      </li>
      <li>
        <Link to="/portfolio" onClick={handleClick}>
          PORTFOLIO<span>.</span>
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={handleClick}>
          CONTACT<span>.</span>
        </Link>
      </li>
    </ul>
  );
  return (
    <div class="nav-wrapper">
      <nav>
        <span id="brand">
          <Link to="/"> artkodes </Link>
        </span>
        {!toggleActive ? navItems : null}
        <div id="toggle" onClick={handleClick}>
          <div class="span">menu</div>
        </div>
      </nav>

      <div id="resize" class={active}>
        <div class="close-btn" onClick={handleClick}>
          close
        </div>

        {toggleActive ? navItems : null}
      </div>
    </div>
  );
}

export default Header;
