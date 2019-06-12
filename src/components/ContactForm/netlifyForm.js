import React from 'react';
const Netform = () => {
  
  return(

    <form 
    name="contact" 
    method="post"
    action="/success">
    <input type="hidden" name="contact" value="contact" />
    <p>
      <label>Your Name: <input type="text" name="name"/></label>
    </p>
    <p>
      <label>Your Email: <input type="email" name="email"/></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>

    <p>
      <div data-netlify-recaptcha="true"></div>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
)
  }

export default Netform