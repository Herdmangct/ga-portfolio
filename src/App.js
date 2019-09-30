import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
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
        <Portfolio resumeData={resumeData} />
        {/* <Testimonials resumeData={resumeData} /> */}
        {/* <ContactUs resumeData={resumeData} /> */}
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
