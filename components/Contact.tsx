import React, { useState } from 'react';
import styles from '../styles/Contact.module.css'
interface Props {
  close: Function
}
const Contact: React.FC<Props> = function({
  close
}) {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  return (
    <form className= {styles.contactCard}>
      <h3>Contact Me</h3>
     <input
      placeholder='Your Email...'
      onChange={(e)=>{setEmail(e.target.value)}}
      className={styles.input}
      type='text'
     />
     <input
      placeholder='Subject'
      onChange={(e)=>{setSubject(e.target.value)}}
      className={styles.input}
      type='text'
     />
     <textarea
      placeholder='Enter your message...'
      onChange={(e)=>{setMessage(e.target.value)}}
      className={styles.textarea}
     />
     <div className={styles.buttons}>
     <input
      className={styles.submit}
      type='submit'
      value='Close'
      onClick={(e)=> {
        e.preventDefault();
        close(null);
      }}
     />
     <input
      className={styles.submit}
      type='submit'
      value='Send'
      onClick={(e)=> {
        e.preventDefault();
        const data = {
          email,
          subject,
          message
        }
        console.log(data);
        close(null)
      }}
     />
     </div>
    </form>
  )
}
export default Contact;