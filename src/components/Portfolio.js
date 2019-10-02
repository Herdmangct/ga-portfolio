import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Web Development Projects</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {resumeData.portfolio &&
                  resumeData.portfolio.map((item, index) => {
                    return (
                      <div className="columns portfolio-item" key={index}>
                        <div className="item-wrap">
                          <a
                            href={"#" + item.modal}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <img
                              src={`${item.imgurl}`}
                              className="item-img"
                              alt={item.name}
                            />
                            <div className="overlay">
                              <div className="portfolio-item-meta">
                                <h5>{item.name}</h5>
                                <p>{item.smallDescription}</p>
                              </div>
                            </div>
                            <div className="link-icon">
                              <i className="icon-plus" />
                            </div>
                          </a>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Modal Popup TODO!
        --------------------------------------------------------------- */}
            {resumeData.portfolio &&
              resumeData.portfolio.map((item, index) => {
                return (
                  <div
                    id={item.modal}
                    className="popup-modal mfp-hide"
                    key={index}
                  >
                    <img
                      className="scale-with-grid"
                      src={`${item.imgurl}`}
                      alt={item.name}
                    />
                    <div className="description-box">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <span className="categories">
                        <i className="fa fa-tag" />
                        {item.tags}
                      </span>
                    </div>
                    <div className="link-box">
                      <a
                        href={item.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Details
                      </a>
                      <a className="popup-modal-dismiss" href="#contact">
                        Close
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
        {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}

export default Portfolio;
