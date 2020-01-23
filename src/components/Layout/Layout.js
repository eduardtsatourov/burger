import React, { Component } from 'react';
import Aux from '../../hoc/AuxHoc';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

 class Layout extends Component {
  state = {showSideDrawer: false}

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerOpenHandler = () => {
    this.setState({showSideDrawer: true})
  }

   render () {
    return (
      <Aux>
        <SideDrawer show={this.state.showSideDrawer} click={this.sideDrawerClosedHandler}/>
        <Toolbar show={this.sideDrawerOpenHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
   }
}

export default Layout;