import React, { useRef, useState } from 'react';
import { Container, Form, Button, Alert, Spinner, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    emailjs.sendForm(
      'srivelavan11@gmail.com',      // Replace with your EmailJS service ID
      'template_krsobya',            // Replace with your EmailJS template ID
      form.current,
      'uHBdk2qV7LG0NsOTY'            // Replace with your EmailJS public key
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        setStatus({ type: 'danger', message: 'Failed to send message. Please try again later.' });
      }
    )
    .finally(() => setSending(false));
  };

  // Auto-dismiss the status message after 3 seconds
  React.useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <Container id="contact" className="my-5">
      <h2 className="text-white mb-4 text-center">Contact Me</h2>
      {status && <Alert variant={status.type}>{status.message}</Alert>}
      <Form ref={form} onSubmit={sendEmail}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Enter your name"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="text-white">Email</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Enter your email"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label className="text-white">Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            placeholder="Write your message here..."
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" disabled={sending}>
            {sending ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" /> Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
