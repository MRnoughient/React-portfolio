import React, { Component } from 'react';

class Home extends Component {

render(){
  return(
    <React.Fragment>
<div className="header">
  <h1>Marly Noughient<a className="header_a">.</a></h1>
</div>
<div className="intro">
  <p>My name is Marly Noughient. I am an up in coming developer. Inspired to make clean and original websites & apps so that surfing the web or scrolling through an app is easy and fun.</p>
  <p>I dont like categorizing myself but I specialize in front-end developing. I also have some experience with back-end.</p>
  <p>Creating a complete project is what I like the most. Would you like to know more about me? Click <a href="/#/about">here.</a></p>
</div>
<div className="section_line"></div>
</React.Fragment>
);
}
}

export default Home;
