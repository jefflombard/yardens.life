import React from "react";
import { Link } from "gatsby";

import logo from "../img/logoWithText.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer  has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Yardens"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div
          className="content has-text-centered has-text-white-ter"
          style={{ backgroundColor: "rgb(147, 95, 165)" }}
        >
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar-item"
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=93YNUXV28ANEC&source=url"
                      >
                        Donate
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section></section>
              </div>
              <div className="column is-4 social">
                <a
                  title="facebook"
                  href="https://www.facebook.com/phillyyardens/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="twitter"
                  href="https://twitter.com/phillyYardens/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  title="instagram"
                  href="https://www.instagram.com/phillyYardens/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <div className="column is-12 column__contact">
                  <a
                    href="mailto:chrisflounders@gmail.com"
                    style={{ color: "black", padding: "10px" }}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
