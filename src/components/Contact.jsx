import React, { useRef, useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'srivelavan11@gmail.com',     // Replace with your EmailJS service ID
      'template_krsobya',    // Replace with your EmailJS template ID
      form.current,
      'uHBdk2qV7LG0NsOTY'      // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        form.current.reset(); // Clear form
      },
      (error) => {
        console.log(error.text);
        setStatus('Failed to send message.');
      }
    );
  };

  return (
    <Container id="contact" className="my-5" style={{ color: 'white' }}>
      <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Contact Me</h2>
      {status && <Alert variant={status.includes('successfully') ? 'success' : 'danger'}>{status}</Alert>}
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label style={{ color: 'white' }}>Name</Form.Label>
          <Form.Control
            type="text"
            name="user_name"
            placeholder="Enter your name"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid #ccc' }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: 'white' }}>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter email"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid #ccc' }}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ color: 'white' }}>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={3}
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid #ccc' }}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Send</Button>
      </Form>

    </Container>
  );
};

export default Contact;
