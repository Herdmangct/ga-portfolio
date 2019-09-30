import React, { Component } from "react";

class Footer extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
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
              <ul className="copyright">
                <li>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <div
                      style={{ transform: "scaleX(-1)", paddingLeft: "3px" }}
                    >
                      &copy;{" "}
                    </div>
                    <div> Copyleft 2019</div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open" />
              </a>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
