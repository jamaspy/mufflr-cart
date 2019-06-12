import React from 'react';
const NetInit = () => {
  
  return(

<form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
<input type="text" name="name" />
<input type="email" name="email" />
<textarea name="message"></textarea>
<div data-netlify-recaptcha="true"></div>
</form>

  )
  }
export default NetInit