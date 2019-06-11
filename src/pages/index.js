import React from 'react'
import Background from "../utils/background"
import SEO from "../components/seo"

const Home = () => (
  <main style={{height: "88vh", margin: 0,}}>
  <form name="contact" netlify netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>
  <SEO title="Home" />
  <Background/>
  </main>
)

export default Home
