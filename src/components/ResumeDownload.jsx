import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Download } from 'react-bootstrap-icons';
import './ResumeDownload.css';

const ResumeDownload = () => {
  return (
    <section id="resume" className="resume-section">
      <Container className="text-center">
        <h2 className="section-title">Download My Resume</h2>
        <p className="section-description">
          Interested in knowing more? Download my latest resume to explore my skills, projects, and experience.
        </p>
        <Button
          href="/your-resume.pdf"
          download
          variant="outline-light"
          size="lg"
          className="download-btn"
        >
          <Download className="btn-icon" /> Download Resume
        </Button>
      </Container>
    </section>
  );
};

export default ResumeDownload;
