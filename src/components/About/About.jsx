import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

export const About = () => {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.aboutContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.textButtonWrapper}>
              <p className={styles.desc}>
                    Passionate third-year informatics student in Institut Teknologi Nasional Bandung (ITENAS) with interest in mobile development and all things tech related. I have a solid foundation in Kotlin, Java, OOP, and UI/UX. I'm dedicated to enhance my skills and staying up-to-date with the latest advancements in the field. Eager to collaborate on exciting projects and contribute fresh perspectives to the world of technology.
              </p>
              <div className={styles.socialWrapper}>
                    <a href='#contact' className={styles.contactBtn}>Contact Me!</a>
                    <div className={styles.buttonSocialWrapper}>
                        <a className={styles.cvBtn} href='https://drive.google.com/file/d/1Dp5rAvV8KaUQqxHhbDXT7vNo03vs_pjX/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFileArrowDown} />
                            <span className={styles.cvText}>Resume</span>
                        </a>
                        <a href="https://www.linkedin.com/in/taffan-muhammad-rizqi/" className={styles.buttonSocial} target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                        </a>
                        <a href="https://github.com/TaffanM" className={styles.buttonSocial} target="_blank" rel="noopener noreferrer">
                            <div className={styles.icon}>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                        </a>
                    </div>
              </div>
            </div>
            
              <img src={getImageUrl("about/profile_pic.jpg")} alt="profile" className={styles.profileImg} />
          </div>
          
        </div>
    </section>
  )
}
