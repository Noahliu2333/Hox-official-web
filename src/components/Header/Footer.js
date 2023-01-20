import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Footer = () => {
  return (
    <footer class="footer">
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
                <a href="https://hoxculture.netlify.app/" class="footer__link">
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
              David Yu and Jasper Sun
            </a>{" "}
            and The Hox Front-End Team{" "}
            <a href="#" class="footer__link">
              Zelin(Noah) Liu
            </a>
            . Back-End Team includes{" "}
            <a href="#" class="footer__link">
              Adam Yang and Ray Ji
            </a>{" "}
            Salute to the best crew. Copyright &copy; by David Yu and Jasper
            Sun.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
