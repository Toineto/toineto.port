import React from 'react';
import trivia from '../image/trivia.png';
import sistema from '../image/sistema.png';
import pixel from '../image/pixel.png';

function Projects() {
  return (
    <div className="section" id="Projetos">
      <div className="container">
        <header>
          <h2 className="title">Projetos</h2>
        </header>
        <div className="projects swiper-container">
          <div className="swiper-wrapper">
            <div className="project swiper-slide trivia">
              <a href="https://jogo-trivia-toineto.netlify.app/">
                <img src={trivia} alt="jogo trivia" className="image-img" />
                <div className="img-overlay img-overlay--blur">
                  <div className="image-title">Jogo Trivia</div>
                  <p className="image-description">
                    este projeto feito em React JS, onde fiz em grupo, usamos
                    gerenciamento de estado com Redux, metodologias ágeis
                    Scrum e Kanban, usamos o Trello para nos organizarmo, não
                    usamos nenhuma biblioteca css, fizemos tudo na mão.
                  </p>
                </div>
              </a>
            </div>
            <div className="project swiper-slide sistema">
              <a href="https://system-solar-toin.netlify.app/">
                <img
                  src={sistema}
                  alt="Sistema Solar"
                  className="image-img"
                />
                <div className="img-overlay img-overlay--blur">
                  <div className="image-title">Sistema Solar</div>
                  <p className="image-description">
                    Este foi o primeiro projeto que criei usando React JS, foi
                    muito prazeroso fazer essa aplicação, aprendi como usar o
                    JSX e a renderizar com o React, aprendi o que é
                    components.
                  </p>
                </div>
              </a>
            </div>

            <div className="project swiper-slide">
              <a href="https://pixels-art-toin.netlify.app/">
                <img src={pixel} alt="Pixel Arts" className="image-img" />
                <div className="img-overlay img-overlay--blur">
                  <div className="image-title">Pixel Arts</div>
                  <p className="image-description">
                    Este foi um dos meus primeiros projetos criado apenas com
                    JavaScript, html5 e css3, coloquei em prática um pouco de
                    minha lógica, flexbox e responsividade, onde conclui o meu
                    objetivo. com exito.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className="divider-1"></div>
    </div>
  );
}

export default Projects;
