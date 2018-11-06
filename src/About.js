import React, { Component } from 'react';

class About extends Component {

render(){
  return(
    <React.Fragment>
<div className="about">
<div className="picture"></div>
<div className="personal">
<p className="personal_head">Personal</p>
<div className="personal_info">
<p>Name: Marly Noughient</p>
<p>Date of birth: 15/05/1999</p>
<p>School: MediaCollege Amsterdam</p>
<p>Degree: Media Development MBO4</p>
</div>
</div>

<div className="experience">
<p className="experience_head">Experience</p>
<div className="experience_info">
<div className="experience_images">
<div className="experience_image1 eximage"></div>
<div className="experience_image2 eximage"></div>
<div className="experience_image3 eximage"></div>
<div className="experience_image4 eximage"></div>
<div className="experience_image5 eximage"></div>
</div>
<p>I can also work with:
Bootstrap, Wordpress, Sass, Laravel (blade), Jquery& React.</p>
</div>
</div>

<div className="hobbys">
<p className="hobbys_head">Hobbys</p>
<div className="hobbys_info">
<p>In my free time Im usually playing a few video games. But when Im not u will see me come up with new ideas to make the internet more fun.
</p>
</div>

<div className="work">
<p className="work_head">Work</p>
<div className="work_info">
<p>Want to see some of my work? Click here to see my github.</p><a target="blank" href="https://github.com/MRnoughient"><div className="github_link"></div></a>
</div>
</div>
</div>

<div className="slide"></div>
</div>
</React.Fragment>
);
}
}

export default About;
