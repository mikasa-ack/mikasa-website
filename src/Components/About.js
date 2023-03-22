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
              <h2>Use-cases</h2>

                            <p>With Mikasa, dApps become more resilient and less dependent on external factors,paving the way for decentralized and independent blockchain experiences.</p>

                            <p>Mikasa could revolutionize supply chain management by automatically executing agreements when specific conditions are met, without the need for human intervention.</p>

                            <p>With the self-activating capabilities, Mikasa with its autonomous smart contracts has the potential to transform financial services, enabling automated loan processing and instant settlements.</p>

                            <p>The decentralization features of Mikasa could enable dApps to be more secure and resistant to censorship, opening up possibilities for more robust digital identity management, voting systems, and peer-to-peer marketplaces.</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
