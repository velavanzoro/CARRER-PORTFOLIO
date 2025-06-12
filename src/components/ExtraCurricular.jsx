import React from 'react';
import { Container } from 'react-bootstrap';
import { TrophyFill } from 'react-bootstrap-icons';
import './ExtraCurricular.css';

const ExtraCurricular = () => (
  <section id="extracurricular" className="extracurricular-section">
    <Container>
      <h2 className="section-title">
        <TrophyFill className="icon" /> Extra Curricular Activities
      </h2>
      <p className="activity-text">
        🚀 Solved over <strong>250+ problems</strong> on <span className="highlight">LeetCode</span>, 
        maintaining a contest rating of <strong>1800+</strong>. <br />
        💻 Active CodeChef programmer, progressing towards a rating of <strong>2⭐</strong>.
      </p>
    </Container>
  </section>
);

export default ExtraCurricular;
