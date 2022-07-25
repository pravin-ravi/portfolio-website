import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">RISHAV DEV </span>
            from <span className="purple"> Gaya, Bihar, India.</span>
            <br />I am a student pursuing BTECH in ELECTRONICS AND COMMUNICATION in BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Debate
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Volleyball
            </li>
            <li className="about-activity">
              <ImPointRight /> attend spritual sessions
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rishav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
