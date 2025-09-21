const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-header">
            <span className="portfolio-label">PORTFOLIO / 2025</span>
          </div>
          <h1 className="hero-name">
            <span className="first-name">Harry</span>
            <span className="last-name">Kavalikas</span>
          </h1>
          <div className="hero-description">
            <p>
              Founding Software Engineer specializing in <strong>backend systems</strong>,{' '}
              <strong>Node.js</strong>, and <strong>AWS architecture</strong>. Building scalable
              solutions with a foundation in Computer Science (BSc, King’s College London).
            </p>
            <div className="status">
              <span className="location">London, UK</span>
            </div>
          </div>
        </div>
        <div className="hero-sidebar">
          <div className="currently">
            <h3>CURRENTLY</h3>
            <p>Founding Software Engineer</p>
            <p>@ Hyper SQ</p>
            <span className="duration">June 2023 — Present</span>
          </div>
          <div className="focus">
            <h3>FOCUS</h3>
            <div className="tech-tags">
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>AWS</span>
              <span>Terraform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
