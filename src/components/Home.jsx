import React from "react";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div class="hero">
        <div class="header">
          <h1 class="line anim-typewriter">Web dev/design + Photograhy = 🖤</h1>
        </div>
      </div>

      <div class="scroll-down"></div>
      <div class="container-fluid">
        <br />
        <br />
        <br />
        <h6>Projects</h6>
        <div class="vertical"></div>
        <br />
        <div class="whitespace"></div>
        <div class="whitespace"></div>
        <div class="row">
          <div class="col-lg-8"></div>

          <div
            class="col-lg-4 project project1 wow fadeInUp"
            onclick="'location.href='/portfolio'"
          ></div>
        </div>
        <div class="whitespace"></div>
        <div class="row">
          <div
            class="col-lg-6 project project2 wow fadeInUp"
            onclick="'location.href='/portfolio'"
          ></div>

          <div class="col-lg-6"></div>
        </div>
        <div class="whitespace"></div>
        <div class="row">
          <div class="col-lg-7"></div>

          <div
            class="col-lg-4 project project3 wow fadeInUp"
            onclick="'location.href='/portfolio'"
          ></div>

          <div class="col-lg-1"></div>
        </div>
        <div class="whitespace"></div>
        <div class="row">
          <div class="col-lg-1"></div>

          <div
            class="col-lg-5 project project4 wow fadeInUp"
            onclick="'location.href='/portfolio'"
          ></div>

          <div class="col-lg-6"></div>
        </div>
        <div class="whitespace"></div>
      </div>
    </div>
  );
}
