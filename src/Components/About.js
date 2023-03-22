import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;
    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const bio_long = this.props.data.bio;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Mikasa"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Mikasa</h2>
              <p>{bio}</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
