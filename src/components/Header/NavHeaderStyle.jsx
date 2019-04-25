import React, { Component } from 'react';
import Header from "./Header.jsx";
import HeaderLinks from "./HeaderLinks.jsx";
import headerStyle from "../../assets/jss/material-kit-react/components/headerStyle.jsx";


const dashboardRoutes = [];

class NavHeaderStyled extends React.Component{
    render() {
        const { classes, ...rest } = this.props;
    return (

               <Header
                  color='transparent'
                  routes={dashboardRoutes}
                  brand= {<img src={require('../../assets/logo-maven.png')} className="logoPosition" />}
                  rightLinks={<HeaderLinks />}
                  fixed
                  changeColorOnScroll={{
                    height: 700,
                    color: "rose"
                  }}


                  {...rest} >

                  </Header>
        )
    }
}

export default NavHeaderStyled;
