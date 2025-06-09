import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { ChatDotsFill } from 'react-bootstrap-icons';
import './LanguagesKnown.css';  // we'll add styles here

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Kannada', level: 'Native' },
  { name: 'Tamil', level: 'Fluent' },
  { name: 'Hindi', level: 'Intermediate' },
];

const LanguagesKnown = () => (
  <section id="languages" className="languages-section">
    <Container>
      <h2 className="text-center mb-4 heading">
        <ChatDotsFill className="me-2 icon" />
        Languages Known
      </h2>
      <p className="text-center description">
        As a student aiming to thrive in diverse and global environments, I have developed proficiency in multiple languages. This helps me communicate effectively and collaborate across cultures.
      </p>
      <Row className="justify-content-center">
        {languages.map(({ name, level }, idx) => (
          <Col xs="auto" key={idx} className="mb-3">
            <Badge className="language-badge" pill>
              {name} <span className="level">({level})</span>
            </Badge>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default LanguagesKnown;
