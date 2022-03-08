import React from "react";

function Footer() {
  return (
    <footer class="section" id="contact">
      <div class="container grid">
        <div class="brand">
          <a class="logo logo-alt" href="#home">
            Antônio<span>Augusto</span>.
          </a>
          <p>
            Criado e constantemente atualizado por Antônio Augusto Barbosa
            Neto.
          </p>
          <p>Todos os direitos reservados.</p>
        </div>

        <div class="social grid">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i class="icon-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i class="icon-facebook"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <i class="icon-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
