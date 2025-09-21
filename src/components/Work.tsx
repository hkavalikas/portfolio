const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div className="work-header">
          <h2>Selected Work</h2>
          <span className="work-duration">2018 — 2025</span>
        </div>
        <div className="work-timeline">
          <div className="work-item">
            <div className="work-year">2023</div>
            <div className="work-details">
              <h3>Founding Software Engineer</h3>
              <p className="company">Hyper SQ</p>
              <p className="description">
                Responsible for backend solution of flagship product and infrastructure.
              </p>
              <div className="tech-tags">
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>AWS</span>
                <span>Terraform</span>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="work-year">2023</div>
            <div className="work-details">
              <h3>Senior Software Engineer</h3>
              <p className="company">Mirada Medical</p>
              <p className="description">
                Development of Interventional Radiology Solution and SaaS platform.
              </p>
              <div className="tech-tags">
                <span>Java 11</span>
                <span>Spring Boot</span>
                <span>AWS</span>
                <span>AppStream</span>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="work-year">2022</div>
            <div className="work-details">
              <h3>Software Engineer</h3>
              <p className="company">Babylon</p>
              <p className="description">
                Full-stack development and quality engineering for healthcare technology platform.
              </p>
              <div className="tech-tags">
                <span>Node.js</span>
                <span>TypeScript</span>
                <span>AWS</span>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="work-year">2021</div>
            <div className="work-details">
              <h3>Software Engineer In Test</h3>
              <p className="company">R3</p>
              <p className="description">
                Quality assurance and test automation for blockchain and distributed ledger technology.
              </p>
              <div className="tech-tags">
                <span>Java</span>
                <span>Kotlin</span>
                <span>Corda</span>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="work-year">2020</div>
            <div className="work-details">
              <h3>Quality Assurance Engineer</h3>
              <p className="company">Amazon</p>
              <p className="description">
                Quality assurance and testing for Amazon's e-commerce platform and services.
              </p>
              <div className="tech-tags">
                <span>Java</span>
                <span>Selenium</span>
                <span>AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work