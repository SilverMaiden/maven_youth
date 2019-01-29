import React, { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import '../../../../maven_youth/src/styles.css';
import Acrylic from 'react-acrylic';


import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransition, transit } from "react-css-transition";
import "frosted-glass";

// @material-ui/icons
// core components
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import PropTypes from "prop-types";
// @material-ui/core components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import headerStyle from "../../assets/jss/material-kit-react/components/headerStyle.jsx";


const dashboardRoutes = [];


const transitionStyles = {
  defaultStyle: {
    visibility: 'hidden',
    opacity: 0,
  },
  enterStyle: {
  opacity: transit(1.0, 500, "ease-in-out"),
  },
  leaveStyle: {
    opacity: transit(0, 500, "ease-in-out"),
  },
  activeStyle: {
    opacity: 1.0 ,
    visibility: 'visibile'
  },
};

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active1:true,
            active2:true,
            active3:true,
            height: 500,
            color1: 'transparent',
            color2: 'success',
            zIndex: 109,
            blurActive1: true,
            blurActive2: false,
            blurActive3: false
        };
    }

    listenScrollEventHeader = e => {
        if (window.pageYOffset < 500) {
            this.setState({color1: 'transparent', color2: 'success', height: 500})
        } else if (window.pageYOffset >= 500 && window.pageYOffset < 900) {
            this.setState({color1: 'success', color2: 'info', height: 900})
        } else if (window.pageYOffset >= 1200 && window.pageYOffset < 1500) {
            this.setState({color1:'info', color2:'rose', height: 1500})
        }
    }

    listenScrollEventGradientFadeIn = e => {
        if (window.pageYOffset < 500 ) {
            this.setState({})
        } else if (window.pageYOffset >=500 &&  window.pageYOffset < 900) {
            this.setState({active1: true})
        } else if (window.pageYOffset >= 900 && window.pageYOffset < 1500) {
            this.setState({active2: true})
        } else if (window.pageYOffset >= 1500) {
            this.setState({active3: true})
        }
    }
    listenScrollEventGradientFadeOut = e => {
        if (window.pageYOffset < 500 ) {
            this.setState({})
        } else if (window.pageYOffset >=500 &&  window.pageYOffset < 900) {
            this.setState({})
        } else if (window.pageYOffset >= 900 && window.pageYOffset < 1500) {
            this.setState({active1: false})
        } else if (window.pageYOffset >= 1500) {
            this.setState({active2: false})
        }
    }

    listenScrollEventNavBlur = e => {
        if (window.pageYOffset < 500) {
            this.setState({blurActive1: true})
        } else if (window.pageYOffset >=500 && window.pageYOffset < 900){
            this.setState({blurActive1: false, blurActive2: false})
        } else if (window.pageYOffset >= 900 && window.pageYOffset < 1500) {
            this.setState({zIndex: 0, blurActive1: false, blurActive2: true})
        }
    }



    componentDidMount() {
            window.addEventListener('scroll', this.listenScrollEventHeader);
            window.addEventListener('scroll', this.listenScrollEventGradientFadeIn);
            window.addEventListener('scroll', this.listenScrollEventGradientFadeOut);
            window.addEventListener('scroll', this.listenScrollEventNavBlur);
    }


    render() {
        const { classes, ...rest } = this.props;
        return (
            <React.Fragment>
             <frosted-glass-container stretch='true'>

               <Header
                  color='transparent'
                  routes={dashboardRoutes}
                  brand="Maven Youth"
                  rightLinks={<HeaderLinks />}
                  fixed

                  {...rest} >

                  </Header>
                 <Parallax filter image={require("../../assets/banner.png")} />
             <div className='blurred-box'>
             </div>
            <div className={classNames(classes.main)}>
            <div className='bg_1'>
                                <div className='position1'>
                                    <CSSTransition {...transitionStyles} active={this.state.active1} style={{zIndex:"auto"}}>
                                                    <div className={'au_gradient1'}>
                                                            <div className='paragraph_right' style={{zIndex: 'auto'}}>
                                                                    <h1> OUR MISSION </h1>
                                                                    <p className='text_box'>
                                                                        Maven Youth is a national project fostering innovative solutions for LGBTQ+ youth to network, organize and educate for social change.
                                                                    </p>
                                                                    <p className='text_box'>
                                                                        We accom­plish our mis­sion by:
                                                                    </p>
                                                                    <p className='text_box'>
                                                                        Pro­vid­ing mean­ing­ful skills explo­ration and devel­op­ment to pave career path­ways for LGBTQ+ youth
                                                                    </p>
                                                                    <p className='text_box'>
                                                                        Bridg­ing the tech­nol­o­gy gap between LGBTQ+ youth and youth serv­ing organizations
                                                                    </p>
                                                                    <p className='text_box'>
                                                                        Trans­form­ing the tech indus­try through con­scious­ness rais­ing and col­lab­o­ra­tive partnerships
                                                                    </p>


                                                            </div>
                                                    </div>
                                    </CSSTransition>
                                    </div>
                            <div className='position2'>
                                <CSSTransition {...transitionStyles} active={this.state.active2} style={{zIndex:"auto"}}>

                                                <div className={'au_gradient2'}>

                                                        <div className='paragraph_left' >
                                                                <h1> WE ENVISION A WORLD</h1>
                                                                <h1> WHERE: </h1>
                                                                <p className='text_box'>
                                                                    LGBTQ+ youth are equipped with the knowl­edge, skill, and abil­i­ty to cre­ate inno­v­a­tive tech solu­tions. Youth are pro­vid­ed career path­ways into tech­nol­o­gy and sup­port­ed to advance with­in the tech indus­try through train­ing, men­tor­ship, and application.
                                                                </p>
                                                                <p className='text_box'>
                                                                   LGBTQ+ youth serv­ing orga­ni­za­tions are pro­vid­ing ser­vices to youth using the most inno­v­a­tive tech­nol­o­gy. It’s a world where non-prof­its are pro­vid­ed the fund­ing and sup­port need­ed to access and sus­tain the newest tech­nol­o­gy to bet­ter serve youth.
                                                                </p>
                                                                <p className='text_box'>
                                                                </p>
                                                                <p className='text_box'>
                                                                    The LGBTQ+ com­mu­ni­ty thrives in tech­nol­o­gy. It’s a world where the tech indus­try invests in the next gen­er­a­tion of LGBTQ+ pro­fes­sion­als and changes how our com­mu­ni­ty is rep­re­sent­ed in games and media. LGBTQ+ tech pro­fes­sion­als, espe­cial­ly lead­ers of col­or, rise with­in the industry.
                                                                </p>
                                                                         </div>
                                                </div>

                                    </CSSTransition>
                            </div>
                                <div className='position3'>
                                    <CSSTransition {...transitionStyles} active={this.state.active3}>
                                            <div className={'au_gradient3'}>
                                                    <div className='paragraph_right2'>
                                                            <h1> EXPLORE OUR PROGRAMS </h1>
                                                    </div>
                                            </div>
                                    </CSSTransition>
                                </div>

            </div>
            </div>

        </frosted-glass-container>
        </React.Fragment>
        )
    }
}

export default withStyles(landingPageStyle)(AboutUs);
