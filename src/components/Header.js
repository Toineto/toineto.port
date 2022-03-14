import React from 'react';

function Header() {
  return (
    <header id="header">
      <nav class="container">
          <a href="#home" className="logo">Antônio<span> Augusto</span></a>
        <div class="menu">
          <ul class="grid">
            <li>
              <a class="title" href="#home">
                Início
              </a>
            </li>
            <li>
              <a class="title" href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a class="title" href="#Projetos">
                Projetos
              </a>
            </li>
            <li>
              <a class="title" href="#Skills">
                Skills
              </a>
            </li>
            <li>
              <a class="title" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div class="toggle icon-menu"></div>
        <div class="toggle icon-close"></div>
      </nav>
    </header>
  );
}

export default Header;
