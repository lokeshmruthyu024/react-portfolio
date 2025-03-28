import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css'


const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lokesh N</h1>
        <p className={styles.description}>I'm a full stack developer skilled with React and Node js. Reach out if you would like to learn more!</p>
        <a href="mailto:lokeshnagaraj082@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.jpg")} alt="hero image of me" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  )
}

export default Hero
