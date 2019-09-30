import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">{resumeData.contact.leadHeader}</p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* Add 'action' back to this form */}
              <form method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size={35}
                      id="contactName"
                      name="contactName"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size={35}
                      id="contactEmail"
                      name="contactEmail"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size={35}
                      id="contactSubject"
                      name="contactSubject"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols={50}
                      rows={15}
                      id="contactMessage"
                      name="contactMessage"
                      defaultValue=""
                    />
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>
              {/* Warning Messages */}
              <div id="message-warning">
                There was an error when filling out the form{" "}
              </div>
              <div id="message-success">
                <i className="fa fa-check" />
                Your message was sent, thank you!
                <br />
              </div>
            </div>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Contact Details</h4>
                <p className="address">
                  {resumeData.address}
                  <br />
                  <span>{resumeData.phone}</span>
                  <br />
                  <span>{resumeData.email}</span>
                </p>
              </div>
              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  {resumeData.contact.recentTweets &&
                    resumeData.contact.recentTweets.map((item, index) => {
                      return (
                        <li key={index}>
                          <span>
                            {item.content}
                            <a href={item.link}> {item.link}</a>
                          </span>
                          <b>
                            <p>{item.numberOfDaysAgo}</p>
                          </b>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactUs;
