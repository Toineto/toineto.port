import React from "react";
import trivia from "../image/trivia.png";
import sistema from "../image/sistema.png";
import pixel from "../image/pixel.png";

function Projects() {
  return (
    <>
      <section class="section" id="Projetos">
        <div class="container">
          <header>
            <h2 class="title">Projetos</h2>
          </header>
          <div class="projects swiper-container">
            <div class="swiper-wrapper">
              <div class="project swiper-slide trivia">
                <a
                  href="https://jogo-trivia-toineto.netlify.app/"
                  target="_blank" rel="noreferrer"
                >
                  <img src={trivia} alt="jogo trivia" className="image-img" />
                <div className="img-overlay img-overlay--blur">
                  <div className="image-title">Jogo Trivia</div>
                  <p className="image-description">
                    Lorem ipsum, dolor sit amet consectetur
                  </p>
                </div>
                </a>
              </div>
              <div class="project swiper-slide sistema">
                <a
                  href="https://system-solar-toin.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={sistema}
                    alt="Sistema Solar"
                    className="image-img"
                  />
                </a>
                <div className="img-overlay img-overlay--blur">
                  <div className="image-title">Sistema Solar</div>
                  <p className="image-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>

              <div class="project swiper-slide">
                <a
                  href="https://pixels-art-toin.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={pixel} alt="Pixel Arts" className="image-img" />
                  <div className="img-overlay img-overlay--blur">
                    <div className="image-title">Pixel Arts</div>
                    <p className="image-description">
                      aqui está meu projeto Pixels Arts
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <div class="divider-1"></div>
    </>
  );
}

export default Projects;
