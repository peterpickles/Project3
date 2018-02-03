import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';
// MATERIAL UI
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

//Half of this is unneccessary 
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Divider from 'material-ui/Divider';
import FontAwesome from 'react-fontawesome';


const UserIcon = () => { return (<i className="fas fa-user" />) }


class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }
  
  render(){
    const style = {
      margin: 8,
    }; 

    let leftLinks = <span />;
    let rightLinks = <span />;
    


    // YES USER
    if(this.props.user){
      leftLinks = (
        <span>
          <Link to="/" className="Nav__logo">Dreamstate</Link>
          <Link to="/analyze" className="Nav__link">Analyze</Link>
        </span>
      )
      rightLinks = (
        <span>
          <Link to="/log" className="Nav__link">Dream Log</Link>
          <Link to="/profile" className="Nav__link">Profile</Link>
          {/* <Logout updateUser={this.props.updateUser} /> */}
          {/* <ToolbarSeparator /> */}



          {/* User Dropdown */}
          <IconMenu 
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            } 
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText={`${this.props.user.name}`} />
            <Divider />
            <Logout updateUser={this.props.updateUser} />

            {/* <MenuItem 
              primaryText="Logout" 
              onClick={this.handleLogout}
              /> */}



          </IconMenu>


        </span>
      );
    }
    // NO USER
    else {
      leftLinks = (
        <span>
          <Link to="/" className="Nav__logo">DreamApp</Link>
          <Link to="/analyze" className="Nav__link">Analyze</Link>
        </span>
      );
      rightLinks = (
        <span>
          <Link to="/userauth" className="Nav__link">Login</Link>
        </span>
      );
    }

    return(
    <nav>
      <Toolbar>
        {/* LEFT SIDE */}
        <ToolbarGroup firstChild={true}>
          {leftLinks}
        </ToolbarGroup>
        {/* RIGHT SIDE */}
        <ToolbarGroup lastChild={true}>
          {rightLinks}
        </ToolbarGroup>
      </Toolbar>
    </nav>
    );
  }
}

export default Nav;
