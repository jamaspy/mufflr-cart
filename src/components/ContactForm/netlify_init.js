import React from 'react';
const NetInit = () => {
  
  return(

<form name="contact" netlify netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>
<input type="text" name="name" />
<input type="email" name="email" />
<textarea name="message"></textarea>
<div data-netlify-recaptcha="true"></div>
</form>

  )
  }
export default NetInit