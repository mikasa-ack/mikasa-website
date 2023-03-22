import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>ink smart contract</h3>
          <p>The Game of Life contract is an Ink! smart contract that implements the rules and state updates for the Game of Life cellular automaton. It features:
             <ul>
                 <li>An on-chain representation of the Game of Life grid with a configurable size. </li>
                 <li>Functions for initializing the grid, updating the grid state according to the Game of Life rules, and querying the current grid state.</li>
                 <li>Autonomous execution of state updates, leveraging the Autonomous Smart Contracts Pallet to perform updates without user intervention.</li>
             </ul>
</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>Autonomous Smart Contracts Pallet</h3>
          <p>The Autonomous Smart Contracts Pallet is a custom-built Substrate pallet that enables the execution of autonomous smart contracts written in Ink!. It is designed to interact seamlessly with the Contracts Pallet, which is responsible for the deployment and management of smart contracts on a Substrate node.</p>
          <p>Key features of the Autonomous Smart Contracts Pallet include: Triggering smart contract execution on a predefined schedule, such as every block or at specific block heights. Supporting multiple autonomous smart contracts with varying schedules and execution conditions. Ensuring compatibility with the Contracts Pallet and other Substrate runtime modules.</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>GoL Components</span>
              </h1>
              <p></p>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{work}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">

            </div>

            <div className="nine columns main-col">{education}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">

            </div>

            <div className="nine columns main-col">
            <h3>Game of life frontend</h3>
            <p>The Game of Life frontend is a web application that provides users with an
            interactive interface for the Game of Life contract. Its features include:</p>

            <p>Displaying the current state of the Game of Life grid with a clean and responsive visualization. Allowing users to interact with the Game of Life contract, such as initializing the grid, starting/stopping the simulation, or manually updating the grid state. Connecting to the mikasa-node and automatically updating the grid visualization as new blocks are processed.</p>
            </div>

          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
