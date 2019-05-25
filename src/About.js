import React, { Component } from "react";
import Layout from "./Layout";

class About extends Component {
  render() {
    return (
      <Layout>
        <div className="about-page">
          <p>
            Personal projects, hobbies and solutions in the hopes of saving
            countless hours
          </p>
          <p>
            I don't know really, I just want to improve. I think voicing out
            your opinions and experiences is a good start.
          </p>
          <p>
            Creating an about page is my first challenge, I already spent 1 day
            just for this. It's harder than creating a web app. Please help me
            improve :)
          </p>
          <p>Thanks for your time. Have a great day!</p>
        </div>
      </Layout>
    );
  }
}

export default About;
