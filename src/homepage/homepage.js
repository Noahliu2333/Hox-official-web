import React from "react";
import logo from "./img/hox-logo.png";
import video from "./img/hoxvideo.mp4";
import "./style.css";
import "./icon-font.css";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div>
      <nav class="nav justify-content-end">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <Link to="/" class="nav-link active" aria-current="page">
              {/* HOX FAMILY */}
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://hoxculture.netlify.app/">
              CULTURE
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="http://hoxusc.weebly.com/team.html">
              TEAM
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="http://hoxusc.weebly.com/resources--event.html"
            >
              R&E
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.instagram.com/hox_usc/">
              INS
            </a>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Apply">
              APPLY
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <div class=" header header__Logo-box">
          <img src={logo} alt="Logo" class="header__logo" />
        </div>

        <div className="video">
          <video
            src={video}
            type="video/mp4"
            class="video__content"
            loop
            muted
            autoPlay
            controls=""
            playsInline
          />
          {/* <source src={video} type="video/mp4" />
              Your browser is not supported!
            </video> */}
        </div>
      </div>

      <main>
        <section class="about u-margin-bottom-hhuge">
          <div class="main_about">
            <h2 class="about__heading">WHO WE ARE</h2>
            <p class="about__p-1">
              Eta Omega Chi is the first and the{" "}
              <span className="bolden">
                only East Asian professional fraternity
              </span>{" "}
              established at UC Berkeley. Eta Omega Chi Eta Chapter is a group
              of <span className="bolden">high-achieving</span> and{" "}
              <span className="bolden">self-driven</span> USC undergrads who are
              interested in the <span className="bolden">business domain.</span>
            </p>
            ​
            <p class="about__p-2">
              We strive to build an elite community to share
              <span className="bolden"> exclusive </span> resources and
              opportunities. Our goals to pursue{" "}
              <span className="bolden"> entrepreneurship </span> and build
              lifelong <span className="bolden">brotherhood</span> make us
              distinctive amongst East Asian student organizations in the United
              States.
            </p>
          </div>
          {/* </section> */}
          <div className="apply">
            {/* <Link to="/Apply" class="btn btn--white btn--animated ">
              apply now
            </Link> */}
            <h2>
              <Link to="/Apply" class="btn1 btn--white btn--animated ">
                apply now
              </Link>
            </h2>
          </div>
        </section>

        <section class="about-1">
          <h2 class="about__heading-1 u-margin-top-medium">What we offer</h2>
          <div class="row u-margin-top-small  u-marigin-left-medium">
            <div class="col-1-of-3">
              <div class="feature-box ">
                <i class="feature-box__icon icon-basic-calendar"></i>

                <h3 class="heading-tertiary u-margin-bottom-small">
                  Events & Activities
                </h3>
                <p class="feature-box__text">
                  We provide our members with opportunities to connect with and
                  learn from professionals in various business industries, from
                  ranging marketing to entrepreneurship. ​
                  {/* entrepreneurship */}
                </p>
              </div>
            </div>

            <div class="col-1-of-3">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-lightbulb"></i>

                <h3 class="heading-tertiary u-margin-bottom-small">
                  Exclusive resources
                </h3>
                <p class="feature-box__text">
                  We offer exclusive resources to our members for them to pursue
                  their professional goals and be the light that guides through
                  the intense recruiting process.
                </p>
              </div>
            </div>

            <div class="col-1-of-3">
              <div class="feature-box">
                <i class="feature-box__icon icon-basic-hammer"></i>

                <h3 class="heading-tertiary u-margin-bottom-small">
                  brotherhood
                </h3>
                <p class="feature-box__text">
                  HOX will not only support our members to grow professionally
                  but also interpersonally. We are a close-knit community where
                  members dedicate to help each other to accomplish their
                  goals.​
                  {""}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="footer__logo-box">
          <img src={logo} alt="Full logo" class="footer__logo" />
        </div>
        <div class="row u-marigin-left-small">
          <div class="col-1-of-2">
            <div class="footer__navigation">
              <ul class="footer__list">
                <li class="footer__item">
                  <Link to="/" class="footer__link">
                    hox family
                  </Link>
                </li>
                <li class="footer__item">
                  <a
                    href="https://hoxculture.netlify.app/"
                    class="footer__link"
                  >
                    Culture
                  </a>
                </li>
                <li class="footer__item">
                  <Link to="/Apply" class="footer__link">
                    apply
                  </Link>
                </li>
                <li class="footer__item">
                  <a href="https://www.hoxusc.com/" class="footer__link">
                    Logo Page
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    href="https://www.instagram.com/hox_usc/"
                    class="footer__link"
                  >
                    INSTAGRAM
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-1-of-2">
            <p class="footer__copyright">
              Built by{" "}
              <a href="#" class="footer__link">
                Zelin(Noah) Liu & Maggie Zhang
              </a>{" "}
              and The Hox Front-End Team{" "}
              <a href="#" class="footer__link">
                David Yu and Jasper Sun
              </a>
              . Back-End Team includes
              <a href="#" class="footer__link">
                Adam Yang and Ray Ji
              </a>{" "}
              Salute to the best crew. Copyright &copy; by Noah Liu.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
