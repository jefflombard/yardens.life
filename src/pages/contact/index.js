import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import Strawberry from "../../img/PhillyYardens_FullColor_Mark_Strawberry.jpg";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <div className="full-width-image-container margin-top-0 contact__landingBackground">
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #995da5, -0.5rem 0 0 #995da5",
              backgroundColor: "#995da5",
              color: "white",
              padding: "1rem"
            }}
          >
            Connect With Us!
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column is-4">
                  <h1 className="contact__header">Join Us</h1>
                  Join Us
                </div>
                <div
                  className="column is-4"
                  style={{ backgroundImage: { Strawberry } }}
                >
                  <h1 className="contact__header">Request a Yarden</h1>
                </div>
                <div className="column is-4">
                  <h1 className="contact__header">Contact</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
