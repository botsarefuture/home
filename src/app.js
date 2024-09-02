import React from 'react';
import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="home">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I’m [Your Name]. This is my personal website showcasing my work and skills.</p>
      </section>
      <section id="about">
        <h2>About Me</h2>
        <p>I'm a passionate developer with experience in [mention some technologies or skills]. Check out my projects below.</p>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      <footer>
        <p>&copy; 2024 [Your Name]</p>
      </footer>
    </div>
  );
}

export default App;
