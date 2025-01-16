import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NotesTaking from "../../Assets/Projects/Notes.png";
import Pet from "../../Assets/Projects/Pet.png";
import chatify from "../../Assets/Projects/Chat-App.png";
import Recipe from "../../Assets/Projects/Food.png";
import Random from "../../Assets/Projects/Password.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Talk-A-Tive"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Tailwind Css, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Subham-700/Talk-A-Tive.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Recipe}
              isBlog={false}
              title="Food-Recipe"
              description="Designed and implemented a recipe management application. Experienced in integrating APIs 
                  to enhance functionality and provide real-time data in web applications."
              ghLink="https://github.com/Subham-700/food_receipe.git"
              demoLink="https://food-receipe-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pet}
              isBlog={false}
              title="Pet-Listing"
              description="Developed a responsive Pet Listing website with search functionality, pagination, and detailed pet views. Integrated
                  error handling, state management, and API calls for a seamless user experience"
              ghLink="https://github.com/Subham-700/Pet-Listing.git"
              demoLink="https://pet-listing-three.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NotesTaking}
              isBlog={false}
              title="Notes Taking App"
              description="Implemented advanced functionality enabling users to search, delete, sort, edit, and update records in the
                    system, resulting in a 40% reduction in data processing time and increased user efficiency."
              ghLink="https://github.com/Subham-700/NotesTakingApp.git"
              demoLink="https://notes-taking-app-theta-ashen.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Random}
              isBlog={false}
              title="Random Password Generator"
              description="Developed React JS password generator with customizable security options.
                    Features include customizable options for uppercase, lowercase, symbols, and numbers."
              ghLink="https://github.com/Subham-700/randompasswordgenerator.git"
              demoLink="https://randompasswordgenerator-rho.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
