import profileImage from '../assets/profile.png'
import { siGithub } from 'simple-icons/icons'

const LandingPage = () => {
  const linkedinPath =
    'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

  return (
    <div className="landing-container">
      <div className="background-overlay"></div>

      <div className="profile-card">
        <img src={profileImage} alt="Profile" className="profile-image" />

        <h1 className="profile-name">Harry Kavalikas</h1>
        <p className="profile-title">Software Engineer</p>

        <div className="social-icons">
          <a href="https://github.com/hkavalikas" className="social-icon" aria-label="GitHub">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d={siGithub.path} />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/charalampos-kavalikas/"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d={linkedinPath} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
