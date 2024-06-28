import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}><img src={getImageUrl("hero/heroImage.jpg")} alt="Me sitting with Laptop" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}><img src={getImageUrl('about/uiIcon.png')} alt="cursor icon" />
            <div className={styles.aboutItemtext}><h3>MCA ~ 7.71 CGPA ~ Feb 2024 </h3>
              <p>Completed MCA in St. Francis College affliated to Bengaluru City University</p>
            </div></li>
          <li className={styles.aboutItem}><img src={getImageUrl('about/uiIcon.png')} alt="cursor icon" />
            <div className={styles.aboutItemtext}><h3>Bsc ~ 66.12% ~ Nov 2021 </h3>
              <p>Graduated Bsc in Manasa correspondance college affliated to kuvempu University</p>
            </div></li>


          <li className={styles.aboutItem}><img src={getImageUrl('about/cursorIcon.png')} alt="cursor icon" />
            <div className={styles.aboutItemtext}><h3>Frontend Developer</h3>
              <p>I'm a Frontend developer with knowledge of building responsive and optimized sites skilled with React js framework</p>
            </div></li>
          <li className={styles.aboutItem}><img src={getImageUrl('about/serverIcon.png')} alt="Server icon" />
            <div className={styles.aboutItemtext}><h3>Backend Developer</h3>
              <p>I'm also a backend developer skilled with developing fast and optimized and APIs adopting nodejs and Express js</p>
            </div></li>

        </ul>
      </div>
    </section>
  )
}

export default About
