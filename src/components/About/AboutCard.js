import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Subham Gupta </span>
            from <span className="purple"> West Bengal, India.</span>
            <br />
            I have done internship in Brain Mentor pvt.ltd.
            <br />
            I have completed B.Tech in Information Technology.
            <br />
            <br />
            Highly motivated and dedicated Engineering Fresher with a strong
            educational background and a passion for innovation. Equipped with
            theoretical knowledge gained through academic coursework and
            practical experience gained from internships and projects. Excellent
            problem-solving skills and a proactive approach to learning and
            adapting to new technologies. Strong communication and teamwork
            abilities, with a proven track record of collaborating effectively
            in multidisciplinary environments. Seeking an opportunity to
            contribute to the growth and success of a dynamic engineering team.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Subham Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
