import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Profile.module.css'

export const Profile = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>I'm Taffan</h1>
            <p className={styles.desc}>
            Passionate third-year informatics student in Institut Teknologi Nasional Bandung (ITENAS) with interest in mobile development and all things tech related. I have a solid foundation in Kotlin, Java, OOP, and UI/UX. I'm dedicated to enhance my skills and staying up-to-date with the latest advancements in the field. Eager to collaborate on exciting projects and contribute fresh perspectives to the world of technology.
            </p>
            <a href='#contact' className={styles.contactBtn}>Contact Me!</a>
        </div>
        <img src={getImageUrl("profile/profile_pic.jpg")} alt="profile" className={styles.profileImg} />
    </section>
  )
}
