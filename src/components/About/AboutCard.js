import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'am <span className="yellow">Pravin Ravi </span>
            from <span className="yellow"> Bokaro, Jharkhand, India.</span>
            <br />I am final year Undergrad, pursuing BTECH in ELECTRONICS AND COMMUNICATION in BIT
            Mesra.
            <br/>
            <br /> I have been doing Problem Solving and Front-end Development for a while now.
            <br />
            <br />
          I prefer writting  clean, efficient and optimal code!
          
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mobile Gaming
            </li>
            <li className="about-activity"> 
              <ImPointRight /> Cycling and Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#4DD637" }}>
            "Learning Never Exhausts the Mind!"{" "}
          </p>
          <footer className="blockquote-footer">Vinci</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
