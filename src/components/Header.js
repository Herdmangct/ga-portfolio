import React, { Component } from "react";

class Header extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current" key="home">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li key="about">
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li key="resume">
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li key="portfolio">
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
              {/* <li key="testimonials">
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li key="contact">
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                Hi, I'm {resumeData.name.split(" ")[0]}
              </h1>
              <h3>
                I'm a Sydney based <span>{resumeData.role}</span>{" "}
                {resumeData.roleDescription}
                <a className="smoothscroll" href="#about">
                  {" "}
                  Start scrolling
                </a>{" "}
                and learn more{" "}
                <a className="smoothscroll" href="#about">
                  about me
                </a>
                .
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a
                          href={item.url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
