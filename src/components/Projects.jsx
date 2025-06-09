import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

const Projects = () => {
  const projectList = [
    { title: "Project A", desc: "Age Detection System using OpenCV", link: "https://github.com/velavanzoro/Age-Detection-Using-OpenCV/tree/main" },
    { title: "Project B", desc: "License Plate Recognition System", link: "https://github.com/velavanzoro/License-Plate-Recognition-System" },
    { title: "Project C", desc: "My Professional Portfolio", link: "#" },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: '80px 0',
        backgroundColor: 'transparent',
      }}
    >
      <Container>
        <h2 className="text-center mb-5" style={{ color: 'white' }}>My Projects</h2>
        <Row>
          {projectList.map((project, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Card
                className="mb-4 shadow-lg border-0"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Card.Body className="text-center">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <Button
                    variant="outline-info"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 d-inline-flex align-items-center"
                    style={{ borderRadius: '30px' }}
                  >
                    View <BoxArrowUpRight className="ms-2" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
