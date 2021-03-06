import React from "react";

function Portfolio() {
  return (
    <div>
      {" "}
      <div class="whitespace"></div>
      <div class="container">
        <div class="hero-content">
          <br />
          <br />

          <div class="row">
            <div class="col-lg-8">
              <h3 class="wow fadeInUp" data-wow-delay="1s">
                Portfolio
              </h3>
              <br />
              <p class="wow fadeInUp" data-wow-delay="1.2s">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                accusantium sint quod voluptatem dolorum, quaerat, ut iusto
                cumque magni ab repudiandae, quasi minus unde temporibus nulla
                eum eaque! Placeat praesentium sunt suscipit laboriosam deserunt
                commodi atque corporis, iure maiores dicta, fugit similique.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="whitespace"></div>
        <div class="whitespace"></div>

        <div class="row">
          <div class="col-lg-8"></div>

          <div
            class="col-lg-4 project project1 wow fadeInUp"
            data-wow-delay="1.4s"
            onclick="location.href='project.html'"
          ></div>
        </div>

        <div class="whitespace"></div>

        <div class="row">
          <div
            class="col-lg-6 project project2 wow fadeInUp"
            onclick="location.href='project.html'"
          ></div>

          <div class="col-lg-6"></div>
        </div>

        <div class="whitespace"></div>

        <div class="row">
          <div class="col-lg-7"></div>

          <div
            class="col-lg-4 project project3 wow fadeInUp"
            onclick="location.href='project.html'"
          ></div>

          <div class="col-lg-1"></div>
        </div>

        <div class="whitespace"></div>

        <div class="row">
          <div class="col-lg-1"></div>

          <div
            class="col-lg-5 project project4 wow fadeInUp"
            onclick="location.href='project.html'"
          ></div>

          <div class="col-lg-6"></div>
        </div>

        <div class="whitespace"></div>
      </div>
    </div>
  );
}

export default Portfolio;
