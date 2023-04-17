import React from 'react';
import toin from "../image/toin.jpg";

function About() {
    return(
       <div>
      <section className="section" id="about">
        <div class="container grid">
          <div class="image">
          <img
              src={ toin }
              alt="minha foto sorrindo"
            />
          </div>
          <div class="text">
            <h2 class="title">Sobre</h2>
            <p>
              Olá me  chamo Antônio Augusto mas podem me chamar de toin, fiz
              esse portfólio para mostrar alguns de meus projetos pessoais, que
              fiz desde que comecei a estudar Desenvolvimento Web Full Stack. 
            </p>
            <br />
            <p>
              Não estarão todos os projetos pois tem alguns que fiz somente
              no back-end, espero que gostem e dêem um feedback sobre meu portfólio
              em qualquer rede social que estarei deixando no final da página.
            </p>
            <br />
            <p>
              Sou apaixonado por qualquer tipo de tecnologia, já trabalhei como suporte,
              porém queria mesmo era entrar na Matrix e fazer parte dela como um desenvolvedor
              web full stack, Busco diariamente ser melhor que ontem e me envolver em projetos
              que agreguem valor à vida das pessoas, prezando sempre em estar com um sorriso 
              no rosto, ter empatia e colaboração.
            </p>
          </div>
        </div>
      </section>
      <div class="divider-2"></div>
       </div>
    )
}

export default About;