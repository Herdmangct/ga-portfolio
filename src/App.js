import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/Contactus";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    console.log(
      "Fun Fact: I was born in Cape Town South Africa (Hence the picture of Cape Town)"
    );
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        {/*TODO PORTFOLIO: CLEAN UP IMAGES AND CONTENT*/}
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        {/*TODO PORTFOLIO: ADD TWITTER API FOR MY LATEST TWEETS*/}
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
