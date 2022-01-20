import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from '../styles/Home.module.css'
import Project from '../components/Project'
import projects from '../components/data'
import Contact from '../components/Contact'


const Home: NextPage = () => {
  const [modal, setModal] = useState(null);
  const [cont, setCont] = useState(null);
  const [proj, setProj] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const contact = (<Contact/>);
  const transition = function() {
    setOpacity(0);
    setTimeout(setOpacity.bind(null,1), 500);
  }
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
           Chris Schillinger
        </h1>
        <div
          onClick={()=> {
            if (!cont) {
              setCont(contact);
            } else{
              setCont(null);
            }

          }}
          className={styles.contact}>
            Contact Me</div>


        <div className={styles.grid}>
            <LeftOutlined  disabled = {!proj} className={styles.arrows} onClick = {()=>{
            transition();
            proj > 0 ? setTimeout(setProj.bind(null, proj - 1), 400) : setTimeout(setProj.bind(null, projects.length - 1), 400);

          }}/>
          {/* <motion.div
            initial = 'out'
            animate = 'in'
            exit = 'out'
            variants = {projTrans}
            transition={transition}
            > */}
              <Project
                  title = {projects[proj].title}
                  description = {projects[proj].description}
                  link = {projects[proj].link}
                  image = {projects[proj].image}
                  stack = {projects[proj].stack}
                  modal = {setModal}
                  opacity={opacity}
              />
          {/* </motion.div> */}
          <RightOutlined className={styles.arrows} onClick = {()=>{
            transition();
            proj < projects.length - 1 ? setTimeout(setProj.bind(null, proj + 1), 400) : setTimeout(setProj.bind(null, 0), 400) ;

          }}/>
        </div>
        {modal}
        {cont}
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
