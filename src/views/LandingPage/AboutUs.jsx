import React, { Component } from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import '../../../../maven_youth/src/styles.css';
import "frosted-glass";
import ScrollReveal from 'scrollreveal';
// @material-ui/icons
// core components
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";
// Sections for this page
import PropTypes from "prop-types";
// @material-ui/core components
import Button from "../../components/CustomButtons/Button.jsx";
// core components
import '../../styles.css';

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

class AboutUs extends React.Component {

    componentDidMount() {
        ScrollReveal().reveal('.right', {
            delay: 100,
            duration: 1000,
            reset: true,
        });

        ScrollReveal().reveal('.left', {
            delay: 100,
            duration: 1000,
            reset: true,
        });

        ScrollReveal().reveal('.paragraph_right2', {
            delay: 100,
            duration: 1000,
            reset: true,

        });
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <React.Fragment>


  <div>
    <div className="super-header"></div>
    {/*className={classNames(classes.main), "super-header"}*/}
    <frosted-glass-container stretch="true">
      <div id="app">
        <frosted-glass overlay-color="#ffffff52" class="nav-container">
          <i className="material-icons left-menu"></i>
          <ul className="nav-content">
            <li>Home</li>
            <li>Our Story</li>
            <li>Services</li>
            <li>Work</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
          <button className="nav-cta">Call Us</button>
        </frosted-glass>
                 <div className="hero-container"></div>

                            <div className='bg_1'>
                               <div className="flex-container text-styling">
                                 <div className="right" >
                                                                            <h1> OUR MISSION </h1>
                                                                            <p>
                                                                                Maven Youth is a national project fostering innovative solutions for LGBTQ+ youth to network, organize and educate for social change.
                                                                                We accom­plish our mis­sion by:
                                                                                    <ul>
                                                                                       <li> Providing meaningful skills exploration and development to pave career path­ways for LGBTQ+ youth</li>
                                                                                       <li> Bridging the technology gap between LGBTQ+ youth and youth serving organizations </li>
                                                                                       <li> Transforming the tech industry through consciousness raising and collaborative partnerships</li>
                                                                                    </ul>
                                                                            </p>
                                                                    </div>
                                      <div className="left" >
                                                                        <h1> WE ENVISION A WORLD WHERE</h1>
                                                                        <p>
                                                                        <ul>
                                                                            <li>LGBTQ+ youth are equipped with the knowl­edge, skill, and abil­i­ty to cre­ate inno­v­a­tive tech solu­tions.</li>
                                                                            <li>Youth are pro­vid­ed career path­ways into tech­nol­o­gy and sup­port­ed to advance with­in the tech indus­try through train­ing, men­tor­ship, and application.</li>
                                                                            <li>LGBTQ+ youth serv­ing orga­ni­za­tions are pro­vid­ing ser­vices to youth using the most inno­v­a­tive tech­nol­o­gy. It’s a world where non-prof­its are pro­vid­ed the fund­ing and sup­port need­ed to access and sus­tain the newest tech­nol­o­gy to bet­ter serve youth.</li>
                                                                            <li> The LGBTQ+ com­mu­ni­ty thrives in tech­nol­o­gy. It’s a world where the tech indus­try invests in the next gen­er­a­tion of LGBTQ+ pro­fes­sion­als and changes how our com­mu­ni­ty is rep­re­sent­ed in games and media. LGBTQ+ tech pro­fes­sion­als, espe­cial­ly lead­ers of col­or, rise with­in the industry.</li>
                                                                        </ul>
                                                                        </p>
                                 </div>
                                    <div className='paragraph_right2'>
                                                    <h1> EXPLORE OUR PROGRAMS </h1>
                                                    {/* <div className ='buttonPosition'>
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

                                                        </div>*/}
                                    </div>
                            </div>
                            </div>

    </div>
    </frosted-glass-container>
  </div>
   </React.Fragment>
        )
    }
}

export default withStyles(landingPageStyle)(AboutUs);
