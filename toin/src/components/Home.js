import React from 'react';
import maoclara from '../image/maoclara.jpg';

function Home() {
    return(
        <div>
            <section class="section" id="home">
        <div class="container grid">
          <div class="image">
            <img
              src={ maoclara }
              alt="Foto de Lukas no Pexels"
            />
          </div>
          <div class="text">
            <h2 class="title">Hello, world!👋</h2>
            <p>
            Não é a linguagem de programação que define o programador, mas sim sua lógica.
            </p>
            <p>Estudo Desenvolvimento Web Full Stack na  <a href="https://www.betrybe.com" target="_blank" rel="noreferrer">Trybe</a></p>
            <a class="button" href="home">CV</a>
          </div>
        </div>
      </section>

      <div class="divider-1"></div>
        </div>
    )
}

export default Home;