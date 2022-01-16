import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Project from '../components/Project'
import projects from '../components/data'
const Home: NextPage = () => {
  const [modal, setModal] = useState(null);

  return (
    <div
      onClick = {(e)=> {
        modal ? setModal(null) : null;
      }}
      className={styles.container}>
      <Head>
        <title>Portfolio Chris Schillinger</title>
        <meta name="description"/>
        <link rel="icon" href="/assets/initials.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
           Schillinger Portfolio
        </h1>
        <div className={styles.contact}>Contact Me</div>


        <div className={styles.grid}>
         {projects.map((project, i) => (
           <Project
              key = {`Project-${i}`}
              title = {project.title}
              description = {project.description}
              link = {project.link}
              image = {project.image}
              stack = {project.stack}
              modal = {setModal}
           />
         ))}

        </div>
        {modal}
      </main>

      <footer className={styles.footer}>
          <span>
            Phone: (316)-730-5487<br/>
            Email: cschillinger1994@gmail.com
          </span>


      </footer>
    </div>
  )
}

export default Home
