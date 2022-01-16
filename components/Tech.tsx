import React from 'react';
import styles from '../styles/Tech.module.css'
interface Props {
  name: string,
  icon: string
}
const Tech: React.FC<Props> = function({
 name,
 icon
}) {
  return (
    <div className= {styles.techt}>
      <img  className = {styles.icon} src  = {icon}/>
    </div>
  )
}
export default Tech;