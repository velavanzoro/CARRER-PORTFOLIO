import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => (
  <section
    id="home"
    style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      zIndex: 1,
    }}
  >
    {/* Semi-transparent overlay */}
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // adjust transparency here
        zIndex: -1,
      }}
    />

    <Container className="text-center">
      <h1>
        Hello, I'm <span style={{ color: '#90caf9' }}>VELAVAN R</span>
      </h1>
      <p className="lead">
        Artificial Intelligence & Machine Learning Student | Python & Java Developer | Tech Enthusiast
      </p>
    </Container>
  </section>
);

export default Home;
