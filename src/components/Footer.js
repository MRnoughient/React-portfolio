import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
<div className="footer">
<p>Want to contact me? Here is how.</p>
<p>Mail me with: mrnoughient@gmail.com</p>
<p>Call me with: 0648042340</p>
<p>Or message me via socials at:</p>
<div className="socials"><a target="blank" href="https://www.linkedin.com/in/marly-noughient-b68635158/"><i class="fab fa-linkedin fa-2x  footer_social_linked"></i></a><a target="blank" href="https://www.instagram.com/mrnoughient/"><i class="fab fa-instagram fa-2x footer_social_instagram"></i></a></div>
</div>
);
}
}

export default Footer;
