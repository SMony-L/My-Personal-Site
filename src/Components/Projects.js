import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects= props.projects;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          <p>{this.projects.paragraphOne}</p>
          <p className="mb-0">{this.projects.paragraphTwo}</p>
        </div>
      </section>
    );
  }
}

export default Projects;
