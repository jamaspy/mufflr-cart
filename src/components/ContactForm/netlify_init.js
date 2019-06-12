import React from 'react';
const NetInit = () => {
  
  return(

<form name="contactMufflr" netlify netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>
<input type="text" name="name" />
<input type="email" name="email" />
<textarea name="message"></textarea>
</form>

  )
  }
export default NetInit