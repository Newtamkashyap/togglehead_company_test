import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">LOGO</div>
        <div className="nav-links">
          <span>Qualifications </span>
          <span>Organizations </span>
          <span>Research & Analysis </span>
          <span>Lorem ipsum </span>
          <span>Lorem ipsum</span>
        </div>
        <div className="actions">
          <button className="search-icon"></button>
          <button className="enrol-button">Enrolment</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...
          </p>
          <button className="know-more">Know More </button>
        </div>
        <div className="hero-image">
      
        </div>
      </section>

      <section className="exams">
        <h2>Upcoming Examinations</h2>
        <p>Enquire about the examination & register for the exams</p>
        <div className="exam-cards">
          <div className="exam-card">
            <div className="icon"></div>
            <div>
              <h3>02th October 2014</h3>
              <p>Level 1 exam</p>
            </div>
          </div>
          <div className="exam-card">
            <div className="icon"></div>
            <div>
              <h3>Nov-Dec 2016</h3>
              <p>Level 2<br/>Lorem Ipsum</p>
            </div>
          </div>
          <div className="exam-card">
            <div className="icon"></div>
            <div>
              <h3>Ongoing this year</h3>
              <p>Level 3 (Grad)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-grid">
        {[1, 2, 3, 4].map((_, i) => (
          <div className="info-card" key={i}>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr...
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;

