import React, { useEffect, useRef, useState } from 'react'
import baffle from 'baffle'
import { getImageUrl } from '../../utils'
import styles from './Profile.module.css'



export const Profile = () => {
	const titleRef = useRef(null)

	useEffect(() => {
		const text = baffle(titleRef.current);
		text.set({
			characters: '▓<░ █░>▒░ /░▒▓▓ ▒▒▒ ▒░/▒▒ >>░█ ▒▓/ <█▒░ ░▓▓█',
			speed: 100
		})
		text.start();
		text.reveal(2000);
	}, [])

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={`${styles.title} data`} ref={titleRef}>Taffan Muhammad Rizqi</h1>
                <div className={styles.roleText}>
                    <span className={styles.role}>Mobile Developer</span>
					<span className={styles.divider}>⦿</span>
					<span className={styles.role}>UI/UX Enthusiast</span>
					<span className={styles.divider}>⦿</span>
					<span className={styles.role}>Web Developer</span>
                </div>
            </div>
        </section>
    );
};
