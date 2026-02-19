import "../styles/Contact.css";
export default function Contact() {
return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

