import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:lokeshnagaraj@email.com">lokeshnagaraj082@gmail.com</a></li>
        <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
          <a href="https://www.linkedin.com/in/lokesh-n-118595141">www.linkedin.com/in/lokesh-n-118595141</a></li>
        <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a href="https://github.com/lokeshmruthyu024">github.com/lokeshmruthyu024</a></li>
      </ul>
    </footer>
  )
}

export default Contact
