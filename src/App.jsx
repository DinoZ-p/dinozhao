import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <img
          src={`${import.meta.env.BASE_URL}dinoFace.jpeg`}
          alt="Dino Zhao"
          className={styles.avatar}
        />
        <h1 className={styles.name}>Dino Zhao</h1>
        <p className={styles.tagline}>Developer</p>
        <div className={styles.links}>
          <a
            href="https://github.com/DinoZ-p"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dinozhao/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaFileAlt />
            <span>Resume</span>
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
