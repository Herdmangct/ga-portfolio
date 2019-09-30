import React, { Component } from "react";

class Resume extends Component {
  render() {
    const resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="resume">
          {/* Education
      ----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              {resumeData.education &&
                resumeData.education.map(item => {
                  return (
                    <div className="row item" key={item.specialization}>
                      <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                          {item.specialization}
                          <span>&bull;</span>{" "}
                          <em className="date">
                            {item.MonthOfPassing} {item.YearOfPassing}
                          </em>
                        </p>
                        {item.Achievements &&
                          item.Achievements.map((paragraph, index) => {
                            return (
                              <div key={index}>
                                <div>{paragraph}</div>
                              </div>
                            );
                          })}
                        <br />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          {/* <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              {resumeData.work &&
                resumeData.work.map(item => {
                  return (
                    <div className="row item" key={Math.random()}>
                      <div className="twelve columns">
                        <h3>{item.CompanyName}</h3>
                        <p className="info">
                          {item.specialization}
                          <span>&bull;</span>{" "}
                          <em className="date">
                            {item.MonthOfLeaving} {item.YearOfLeaving}
                          </em>
                        </p>
                        <p>{item.Achievements}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div> */}
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <h3>Top 3 Skills</h3>
              <div className="bars">
                <ul className="skills">
                  {resumeData.skills &&
                    resumeData.skills.map((item, index) => {
                      return (
                        <li key={index}>
                          <span
                            className={`bar-expand ${item.skillname
                              .split("/")[0]
                              .trim()
                              .toLowerCase()}`}
                          ></span>
                          <em>{item.skillname}</em>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          {/* End skills */}
        </section>{" "}
        {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}

export default Resume;
