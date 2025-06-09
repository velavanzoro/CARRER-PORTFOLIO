import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => (
  <section
    id="about"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
      backdropFilter: 'blur(4px)', // subtle blur for readability
      color: 'white',
      padding: '60px 0',
    }}
  >
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="mb-4 text-center">About Me</h2>
          <p className="text-justify fs-5">
            I am a passionate and driven <strong>Computer Science Engineering</strong> student at
            <strong> Chennai Institute of Technology</strong>, specializing in
            <strong> Artificial Intelligence and Machine Learning</strong>. With a strong foundation in core programming
            languages such as <strong>Python, Java</strong>, and <strong>C/C++</strong>, I have developed a keen interest
            in building intelligent systems that solve real-world problems. My academic journey has nurtured my curiosity
            in <strong>machine learning algorithms, data analysis</strong>, and <strong>predictive modeling</strong>.
            I am also expanding my skillset in <strong>full-stack web development</strong> using the
            <strong> MERN stack</strong> and possess hands-on experience with <strong>HTML, CSS</strong>, and
            <strong> JavaScript</strong>.
          </p>
          <p className="text-justify fs-5">
            Beyond the classroom, I actively participate in <strong>competitive programming</strong> to strengthen my
            logical thinking and problem-solving abilities through platforms like
            <strong> LeetCode</strong>, <strong>CodeChef</strong>, and <strong>HackerRank</strong>. I aspire to contribute
            to impactful AI-driven innovations and constantly seek opportunities to grow as a developer, collaborate on
            meaningful projects, and explore emerging technologies that shape the future.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
