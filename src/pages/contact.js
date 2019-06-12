import React from 'react'
import SEO from '../components/seo'
import Form from "../components/ContactForm/netlifyForm"

const Contact = () => (
  <main>
    <SEO title="Contact" />
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>
    <Form />
  </main>
)

export default Contact