import React, { Component } from "react";

class About extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <div className="profile-pic-container">
                <img
                  className="profile-pic"
                  src={resumeData.profileImage}
                  alt="profile image"
                />
              </div>
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{resumeData.aboutme}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{resumeData.name}</span>
                    <br />
                    <span>{resumeData.address}</span>
                    <br />
                    <span>{resumeData.phone}</span>
                    <br />
                    <span>{resumeData.email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href="/Software_Engineering_Resume.pdf"
                      download=""
                      className="button"
                    >
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
