import React, {useState, useEffect} from 'react';
import classes from './contactForm.module.css';
import Notification from '../../ui/notification';

const sendContactData = async (body) => {
  const response = await fetch(`/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
}

const ContactForm = () => {
  const initialInput = {
    email: '',
    name: '',
    message: ''
  }
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [input, setInput] = useState(initialInput);

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus(null);
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    const body = {
      email: event.target.email.value,
      name: event.target.name.value,
      message: event.target.message.value
    }

    setStatus('pending');
    try {
      await sendContactData(body);
      setStatus('success');
      setInput(initialInput);
    } catch (error) {
      setStatus('error');
      setError(error.message);
    }
  }

  let notification;
  if (status === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!'
    }
  }

  if (status === 'success') {
    notification = {
      status: 'success',
      title: 'Message sent',
      message: 'Your message was sent successfully!'
    }
  }

  if (status === 'error') {
    notification = {
      status: 'error',
      title: 'Error sending message',
      message: error
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you?</h1>
      <form className={classes.form} onSubmit={handleSendMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={input.email}
              onChange={(e) => setInput(prev => ({...prev, email: e.target.value}))}
           />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={input.name}
              onChange={(e) => setInput(prev => ({...prev, name: e.target.value}))}
           />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            row={5}
            id="message"
            value={input.message}
            onChange={(e) => setInput(prev => ({...prev, message: e.target.value}))}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
}

export default ContactForm;
