import React, { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import '../../../../maven_youth/src/styles.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import { CSSTransition, transit } from "react-css-transition";
import "frosted-glass";

// @material-ui/icons
// core components
import NavHeaderStyled from "../../components/Header/NavHeaderStyle.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";
// Sections for this page
import PropTypes from "prop-types";
// @material-ui/core components
import Button from "../../components/CustomButtons/Button.jsx";

const transitionStyles = {
  defaultStyle: {
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
  },
};

class SupportUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active1:false,
            active2:false,
            active3:false,
        };
    }
    listenScrollEventGradientFadeIn = e => {
        if (window.pageYOffset < 200 ) {
            this.setState({})
        } else if (window.pageYOffset >=200 &&  window.pageYOffset < 900) {
            this.setState({active1: true})
        } else if (window.pageYOffset >= 900 && window.pageYOffset < 1450) {
            this.setState({active2: true})
        } else if (window.pageYOffset >= 1450) {
            this.setState({active3: true})
        }
    }
    listenScrollEventGradientFadeOut = e => {
        if (window.pageYOffset < 200 ) {
            this.setState({active1: false})
        } else if (window.pageYOffset >=200 &&  window.pageYOffset < 900) {
            this.setState({active2:false})
        } else if (window.pageYOffset >= 925 && window.pageYOffset < 1450) {
            this.setState({active1: false, active3: false})
        } else if (window.pageYOffset >= 1450) {
            this.setState({active2: false})
        }
    }

    componentDidMount() {
            window.addEventListener('scroll', this.listenScrollEventGradientFadeIn);
            window.addEventListener('scroll', this.listenScrollEventGradientFadeOut);
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <React.Fragment>

                <frosted-glass-container stretch='true'>

                    <NavHeaderStyled />
                    <Parallax filter image={require("../../assets/supportusbanner.png")} >
                    </Parallax>

                     <div className={classNames(classes.main)}>
                            <div className='bg_2'>
                                <CSSTransition {...transitionStyles} active={this.state.active1}>
                                 <div className='paragraph_right'>
                                                                            <h1>JOIN OUR SPONSORS </h1>
                                                                            <p className='text_box2'>
                                                                                Sponsor an event and/or one our programs! LGBTQ+ consumers are very loyal to companies who support LGBTQ+ initiatives.
                                                                            </p>
                                                                            <p className='text_box2'>
                                                                                Your company can show it’s support of their diverse LGBTQ+ staff and communities by sponsoring Maven.
                                                                            </p>
                                                                    </div>
                                </CSSTransition>
                                <CSSTransition {...transitionStyles} active={this.state.active2}>
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
                                 </CSSTransition>
                                <CSSTransition {...transitionStyles} active={this.state.active3}>
                                    <div className='paragraph_right2'>
                                                    <h1> EXPLORE OUR PROGRAMS </h1>
                                    <div className ='buttonPosition'>
                                                <Button
                                                  color="white"
                                                  size="lg"
                                                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  round= 'true'
                                                >
                                                See All Programs
                                                </Button>

                                        </div>
                                    </div>
                                </CSSTransition>
                            </div>
                    </div>
                </frosted-glass-container>
            </React.Fragment>
        )
    }
}

export default withStyles(landingPageStyle)(SupportUs);
