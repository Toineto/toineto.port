import React from "react";
import trivia from "../image/trivia.png";

function Projects() {
  return (
    <div>
      <section class="section" id="Projetos">
        <div class="container">
          <header>
            <h2 class="title">Projetos</h2>
          </header>
          <div class="testimonials swiper-container">
            <div class="swiper-wrapper">
              <div class="testimonial swiper-slide">
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum blanditiis saepe nam excepturi explicabo ipsa error
                    ipsam neque
                  </p>
                  <cite>
                  <a href="https://jogo-trivia-toineto.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={trivia} alt="jogo trivia" />
                    </a>
                    trivia
                  </cite>
                </blockquote>
              </div>

              <div class="testimonial swiper-slide">
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum blanditiis saepe nam excepturi explicabo ipsa error
                    ipsam neque
                  </p>
                  <cite>
                    
                      <img
                        src=""
                        alt="projeto"
                      />
                    Jogo trivia
                  </cite>
                </blockquote>
              </div>

              <div class="testimonial swiper-slide">
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum blanditiis saepe nam excepturi explicabo ipsa error
                    ipsam neque
                  </p>
                  <cite>
                    <img
                      src="assets/fotos/26.jpeg"
                      alt="Fotos de Valeska Fabris"
                    />
                    nome do projeto
                  </cite>
                </blockquote>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
