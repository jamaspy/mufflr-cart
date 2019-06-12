import React from "react";
import { navigateTo } from "gatsby-link";
import SEO from "../components/seo"
import Background from "../utils/background"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <SEO title="Contact" />
        <Background />
        <p style={{
          fontSize: `3rem`,
          fontWeight: 300,
          fontFamily: `Montserrat`,
          textAlign: `center`,
          color: "#383838",
          }}>Say Hello...</p>
        <div>
        <form
          name="contact"
          method="post"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          style={{
            maxWidth: "50%",
            margin: "0 auto",
            
            textAlign: "center",
        }}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label >
              What Should We Call You?<br />
              <input 
              type="text" 
              name="name"
              placeholder="Phil Mitchell"
              autoFocus 
              onChange={this.handleChange}
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "20px",
                fontSize: `1.5rem`,
                fontWeight: 300,
                fontFamily: `Montserrat`,
                textAlign: `center`,
                borderRadius:"3px",
                border: "1px solid grey"
              }} />
            </label>
          </p>
          <p>
            <label>
              How Do We Reply?<br />
              <input 
              type="email" 
              name="email"
              placeholder="me@email.com" 
              onChange={this.handleChange}
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "20px",
                fontSize: `1.5rem`,
                fontWeight: 300,
                fontFamily: `Montserrat`,
                textAlign: `center`,
                borderRadius:"3px",
                border: "1px solid grey"
              }} />
            </label>
          </p>
          <p>
            <label>
              Your Words...<br />
              <textarea 
              name="message"
              placeholder="Your message..." 
              onChange={this.handleChange}
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "20px",
                fontSize: `1rem`,
                fontWeight: 300,
                fontFamily: `Montserrat`,
                textAlign: `center`,
                borderRadius:"3px",
                border: "1px solid grey"
              }} />
            </label>
          </p>
          <p>
            <button 
            type="submit"
            style={{
              border: `1px solid black`,
              borderRadius: 5,
              background:`white`,
              color: `black`,
              padding: 10,
              fontSize: `1rem`,
              fontWeight: 300,
              fontFamily: `Montserrat`,
              textAlign: `center`
            }}>Send</button>
          </p>
        </form>
        </div>
      </div>
    );
  }
}