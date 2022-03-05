import React from "react";
import trivia from "../image/trivia.png";
import sistema from "../image/sistema.png";
import pixel from "../image/pixel.png";

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
                  <a href="https://jogo-trivia-toineto.netlify.app/" target="_blank">
                <h2>Jogo Trivia</h2>
                    <img src={trivia} alt="jogo trivia" />
                    </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum blanditiis saepe nam excepturi explicabo ipsa error
                    ipsam neque
                  </p>
              </div>

              <div class="testimonial swiper-slide">
                  <a href="https://system-solar-toin.netlify.app/" target="_blank">
                <h2>Sistema Solar</h2>
                    <img src={sistema} alt="Sistema Solar" />
                    </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum blanditiis saepe nam excepturi explicabo ipsa error
                    ipsam neque
                  </p>
              </div>

              <div class="testimonial swiper-slide">
                  <a href="https://pixels-art-toin.netlify.app/" target="_blank">
                    <h2>Pixel Arts</h2>
                    <img src={pixel} alt="Pixel Arts" />
                    </a>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum blanditiis saepe nam excepturi explicabo ipsa error
                    ipsam neque
                  </p>
                  
                
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
