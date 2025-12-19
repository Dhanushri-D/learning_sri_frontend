import { useNavigate } from "react-router-dom";
import "./../Styles/about.css";
const AboutUs = () => {
    const navigate = useNavigate();
  return (
    <div className="aboutPage">
      <div className="aboutHero">
        <h1>About HelpHub</h1>
        <p>
          A platform built to connect students and campus authorities through
          transparent complaint management.
        </p>
      </div>
      <section className="aboutSection">
        <h2>Our Story</h2>
        <p>
          HelpHub was created with a simple idea — to make campus issue reporting
          easier, faster, and more transparent. Students often face challenges
          in hostels, academics, transport, and facilities, but lack a clear way
          to track resolutions.
        </p>
        <p>
          This project was built to bridge that gap by giving students a single
          platform to raise issues and follow their progress.
        </p>
      </section>
      <section className="aboutSection lightBg">
        <h2>Our Purpose</h2>
        <p>
          Our goal is to solve real student pain points by providing a structured
          complaint tracking system that ensures accountability and visibility.
        </p>
        <p>
          HelpHub focuses on clarity, usability, and trust between students and
          campus support teams.
        </p>
      </section>
      <section className="aboutSection">
        <h2>What Makes Us Different</h2>
        <ul className="aboutList">
          <li>✔ Human-centered design focused on student needs</li>
          <li>✔ Simple, clean, and easy-to-use interface</li>
          <li>✔ Transparent complaint status tracking</li>
          <li>✔ Mobile-friendly and accessible experience</li>
        </ul>
      </section>
      <section className="aboutSection lightBg">
        <h2>Building Trust & Credibility</h2>
        <p>
          HelpHub is designed with this mindset — keeping
          information clear, accessible, and meaningful.
        </p>
        <p>
          We believe transparency leads to better communication and a stronger
          campus environment.
        </p>
      </section>
      <div className="aboutCta">
        <h3>Have questions or need support?</h3>
        <button className="contactBtn" onClick={() => navigate("/contactUs")}>
          Contact Us
        </button>
      </div>
    </div>
  );
};
export default AboutUs;