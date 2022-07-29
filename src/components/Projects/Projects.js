import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import watchlist from "../../Assets/Projects/watchlist.jpg"
import cryptopatron from "../../Assets/Projects/cryptopatron.jpg"
import portfolio from "../../Assets/Projects/portfolio.png"

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
              imgPath={cryptopatron}
              isBlog={false}
              title="Crypto-Patron"
              description="Completely Responsive web-app for keeping a watch-list of invested and trending crypto coins, made using React JS, Material UI, and Chart JS.Used Context API to Manage State of the App and Coin Geckno API for backend.Implemented E-Mail + Google Authentication using Firebase along with Firestore
              Database with CRUD operations. "
              ghLink="https://github.com/pravin-ravi/crypto-patron"
              demoLink="https://crypto-patron.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watchlist}
              isBlog={false}
              title="The Watchlist"
              description="React app for finding the rating and reviews for latest movies and Tv shows. Searching and Filtering by category (Trending, Tv-Show, Movie).Video playback using Youtube embed. Used MovieDb API for database. Moving further  featues like comparing the movie rating across various websites and forming a normalised rating for a movie is yet to be added. "
              ghLink="https://github.com/pravin-ravi/movie_app"
              demoLink="https://the-watchlist-movie.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A personal portfolio website built using ReactJs functional components and also employing CSS
              techniques for styling. Looking forward to add a backend server to the webiste. The first version just showcase the projects and skills acquired by me in during the short span of my progamming journey"
              ghLink="https://github.com/pravin-ravi/portfolio-website"
              demoLink="https://portfolio-026.netlify.app//"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
