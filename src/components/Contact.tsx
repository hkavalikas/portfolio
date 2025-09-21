const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-main">
            <h2>Let's Connect</h2>
            <p>
              Always interested in new opportunities, collaborations, and conversations about
              backend systems and cloud architecture.
            </p>
            <a href="mailto:harry.kavalikas@hotmail.com" className="email-link">
              harry.kavalikas@hotmail.com →
            </a>
          </div>
          <div className="contact-sidebar">
            <h3>ELSEWHERE</h3>
            <div className="contact-links">
              <a href="https://github.com/hkavalikas" className="contact-link">
                <span className="link-title">GitHub</span>
                <span className="link-handle">@hkavalikas</span>
              </a>
              <a href="https://www.linkedin.com/in/charalampos-kavalikas/" className="contact-link">
                <span className="link-title">LinkedIn</span>
                <span className="link-handle">charalampos-kavalikas</span>
              </a>
            </div>
          </div>
        </div>
        <footer className="footer">
          <span>© 2025 Harry Kavalikas. All rights reserved.</span>
        </footer>
      </div>
    </section>
  )
}

export default Contact