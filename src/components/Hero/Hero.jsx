import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.name}>
        Hi, I'm <span className={styles.highlight}>Dino Zhao</span>
      </h1>
      <p className={styles.tagline}>
        Developer
      </p>
    </section>
  )
}

export default Hero
