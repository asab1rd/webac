import React from "react";

function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <br />
        <br />
        <div class="collab">
          <div class="row">
            <div class="col-lg-12">
              <p class="wow fadeInUp">
                Une idée ? Un projet interessant ? Faisons le ensemble!
              </p>
            </div>
          </div>
        </div>
        <br />
        <div class="hr">
          <div class="row"></div>
        </div>
        <br />
        <br />
        <div class="info">
          <div class="row">
            <div class="col-lg-4" id="personal">
              <p class="wow fadeInUp">connect with me</p>
              <h4 class="wow fadeInUp" data-wow-delay="0.2s">
                <a href="https://instagram.com/artkodes"> ig @artkodes</a>
              </h4>
              <br />
              <br />
            </div>

            <div class="col-lg-4" id="media">
              <p class="wow fadeInUp" data-wow-delay="0s">
                follow me
              </p>

              <ul>
                <li id="fb" class="wow fadeInUp" data-wow-delay="0.4s">
                  fb
                </li>
                <li id="ig" class="wow fadeInUp" data-wow-delay="0.6s">
                  ig
                </li>
                <li id="yt" class="wow fadeInUp" data-wow-delay="1s">
                  yt
                </li>
              </ul>

              <br />
              <br />
            </div>

            <div class="col-lg-4" id="address">
              <p class="wow fadeInUp" data-wow-delay="0s">
                say hello
              </p>
              <h4 class="wow fadeInUp" data-wow-delay="0.2s">
                pro.bizach@gmail.com
              </h4>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
