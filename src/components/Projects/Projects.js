import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodorder from "../../Assets/Projects/foodorder.png"
import expensetracker from "../../Assets/Projects/expensetracker.png"
import portfolio from "../../Assets/Projects/portfolio.jpg"

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
              imgPath={foodorder}
              isBlog={false}
              title="Food Order App"
              description="A web application where you can select a list of meals and order it on your address, build with react.js, and Firebase. Concept of API has been used to get and post data ,from and to, the FireBase
              Realtime DataBase respectively. "
              ghLink="https://github.com/dev26rishav/Food-order-App"
              demoLink="https://foodorder008.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expensetracker}
              isBlog={false}
              title="Expense Tracker"
              description="Made an expense tracker web app using React components, Context API, Local Storage,
              Material UI. Used various other concepts like React hooks and others. We can add our
              deposits and expenses and keep a track of it."
              ghLink="https://github.com/dev26rishav/Expense__tracker"
              demoLink="https://expense-tracker009.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A personal portfolio website built using ReactJs functional components and also employing CSS
              techniques for styling. This project was built using some more technologies.
              Node.js, Express. js, Vercel. But, I contributed in React and CSS only"
              ghLink="https://github.com/dev26rishav/portfolio"
              demoLink="https://portfolio-026.netlify.app//"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
