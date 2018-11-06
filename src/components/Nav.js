import React, { Component } from 'react';
class Nav extends Component {

state = {
  menu: false
};

  menuToggle = () => {
    this.setState({
    menu: !this.state.menu
    });
  }

  render(){
    return(
    <React.Fragment>
    <div className={'nav_backdrop ' + (this.state.menu ? 'nav_backdrop_active' : 'nav_backdrop_inactive')} onClick={this.menuToggle}></div>
    <div className={'nav_button ' + (this.state.menu ? 'nav_button_open' : 'nav_button_closed')} onClick={this.menuToggle}><i class="fas fa-bars fa-lg nav_button_burger"></i></div>
    <div className={'nav ' + (this.state.menu ? 'open' : 'closed')}>
    <a href="/" onClick={this.menuToggle}>HOME</a>
    <a href="/#/about" onClick={this.menuToggle}>ABOUT</a>
    </div>
    </React.Fragment>
  );
}
}

export default Nav;
