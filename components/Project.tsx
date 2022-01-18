import { title } from 'process';
import React, { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Tech from './Tech';
import { motion } from 'framer-motion';
import { projTrans, transition } from '../animations'
type techStack = {
  name: string,
  icon: string
}
interface Props {
  title: string,
  image: string,
  link: string,
  description: string,
  stack: techStack[],
  modal: Function | null,
  opacity: number
}

const Project: React.FC<Props> = function({
  title,
  image,
  link,
  description,
  stack,
  modal,
  opacity
}) {

  const techStack = (
    <div className = {styles.modal}>
      <div className={styles.techsModal}>
        {stack.map((tech, i) => (<Tech key = {`Tech-${i}`} name = {tech.name} icon = {tech.icon}/>))}
      </div>
    </div>
  );
  return (
    <motion.div
            initial = 'out'
            exit = 'out'
            variants = {projTrans}
            transition={transition}
            animate ={{opacity: opacity, scale: opacity}}
            >
    <div className={styles.card}>

            <h3 className = {styles.ptitle}>{title}</h3>
            <a
       href={link}
       target="_blank"
       rel="noopener noreferrer"
       >
            <img  className = {styles.image} src = {image}/>
            </a>
            <div onClick={()=> {modal ? modal(techStack): null}}className={styles.techstack}>Tech Stack</div>
            <div className={styles.tech}>

              {stack.map((tech, i) => (<Tech key = {`Tech-${i}`} name = {tech.name} icon = {tech.icon}/>))}
            </div>
            <p>{description}</p>

    </div>
    </motion.div>
  )
}
export default Project;