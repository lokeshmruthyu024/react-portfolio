import styles from './App.module.css'
import About from './Components/About/About'
import Contact from './Components/Contacts/Contact'
import Experience from './Components/Experience/Experience'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Projects/Project'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default App
