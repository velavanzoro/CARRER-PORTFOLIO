import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Award, CheckCircle, Trophy } from 'react-bootstrap-icons';

const achievements = [
  {
    icon: <Award size={40} className="text-warning" />,
    title: 'SDG Hackathon – Round 2 Shortlist',
    description: 'Shortlisted for Round 2 in the SDG Hackathon for innovative problem-solving skills.',
  },
  {
    icon: <CheckCircle size={40} className="text-success" />,
    title: 'AI Solution for Sustainable Development',
    description: 'Recognized for developing an AI-driven solution aligned with Sustainable Development Goals.',
  },
  {
    icon: <Trophy size={40} className="text-info" />,
    title: 'Hackathon Participation',
    description: 'Actively participated in major hackathons: IEEE IES Generative AI Hackathon, FOSS Hackathon, and Smart India Hackathon (SIH).',
  }
];

const Achievements = () => (
  <section
    id="achievements"
    className="py-5"
    style={{
      backgroundColor: 'transparent',
      color: 'white',
    }}
  >
    <Container>
      <h2 className="text-center mb-5">Awards & Achievements</h2>
      <Row>
        {achievements.map((achieve, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card
              className="h-100 text-center p-4 hover-zoom"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
              }}
            >
              <div className="mb-3">{achieve.icon}</div>
              <Card.Title>{achieve.title}</Card.Title>
              <Card.Text>{achieve.description}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Achievements;
