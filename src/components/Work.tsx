const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div className="work-header">
          <h2>Selected Work</h2>
          <span className="work-duration">2017 — 2025</span>
        </div>
        <div className="work-timeline">
          <div className="work-item">
            <div className="work-year">2023</div>
            <div className="work-details">
              <h3>Founding Software Engineer</h3>
              <p className="company">Hyper SQ</p>
              <p className="description">
                Responsible for building the backend solutions of the flagship product and its infrastructure from the ground up and providing technical direction.
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
                Development and maintenance of the Interventional Radiology Solution (Simplicit90Y™) and SaaS (DaaS) solutions.
              </p>
              <div className="tech-tags">
                <span>Java 11</span>
                <span>Spring Boot</span>
                <span>AWS</span>
                <span>CloudFormation</span>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="work-year">2022</div>
            <div className="work-details">
              <h3>Software Engineer</h3>
              <p className="company">Babylon</p>
              <p className="description">
                Microservices and process automation solutions platform development, and support of internal clients.
              </p>
              <div className="tech-tags">
                <span>Java 11</span>
                <span>Spring Boot</span>
                <span>AWS</span>
                <span>Kafka</span>
                <span>Docker</span>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="work-year">2021</div>
            <div className="work-details">
              <h3>Software Engineer In Test</h3>
              <p className="company">R3</p>
              <p className="description">
                Maintain and evolve the in-house regression automation framework (CRAFT → CRAFT5), while developing functional test cases.
              </p>
              <div className="tech-tags">
                <span>Java</span>
                <span>Kotlin</span>
                <span>Azure</span>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="work-year">2020</div>
            <div className="work-details">
              <h3>Quality Assurance Engineer</h3>
              <p className="company">Amazon</p>
              <p className="description">
                Test planning, documentation, execution, and automation, cooperating with different teams and platforms, onboarding and extending testing frameworks.
              </p>
              <div className="tech-tags">
                <span>TypeScript</span>
                <span>Scala</span>
                <span>AWS</span>
                <span>Webdriver.io</span>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="work-year">2019</div>
            <div className="work-details">
              <h3>Associate QA Engineer</h3>
              <p className="company">ASOS.com</p>
              <p className="description">
                Test automation (E2E), regression testing, analytics and accessibility testing.
              </p>
              <div className="tech-tags">
                <span>Swift</span>
                <span>XCUITest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
