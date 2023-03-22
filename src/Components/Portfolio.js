import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Why not with Cairo 1.0?
            </h1>
            <p>The choice of Ink was strategic, as we decided not to go with Starknet directly due to the lack of maturity of Cairo 1.0 and the tooling. Ink provides a more seamless Rust-based dev experience and can serve as a benchmark for future developments in the Cairo 1.0 ecosystem.
</p>

 <p>Kaioshin, a Substrate-based Starknet sequencer under development, can use the autonomous smart contract pallet. Due to the pallets logic not being tied to Ink, it can be used for Starknet, custom Layer 3 solutions, or public Layer 2. Mikasa also highlights cross-platform compatibility.

</p>


            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
