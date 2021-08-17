import React, {useState} from 'react';
import emailjs, { init } from "emailjs-com";
import cx from 'classnames';
import * as styles from './Contact.module.css';

export const Contact = () => {
    const [formData, setFormData] = useState({
        username:'',email:'',message:''
    })
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');
    const { username, email, message } = formData;

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const sendEmail = e => {
        const service_id = process.env.GATSBY_EMAILJS_SERVICE_ID;
        const template_id = process.env.GATSBY_EMAILJS_TEMPLATE_ID;
        const user_id = 'user_M23qURHUeUhH8KoE6X7Nf'
        e.preventDefault();
        init(user_id);
        emailjs.sendForm(
            service_id,
            template_id,
            e.target,
            user_id
          )
          .then(
            () => {
              setSuccess("Message sent successfully")
            })
            .catch(() => setError("Sending failed. Please try again"))
            .finally(() => {
                setFormData({
                    name:'',email:'',message:''
                })
              setTimeout(() => {
                setSuccess('')
                setError('');
              }, 5000);
            })
      }
    
    return (
        <section className={styles.contactPage}>
        <article className={styles.contactForm}>
          <h3>Get in touch</h3>
            <form onSubmit={sendEmail}>
            <div className={styles.formGroup}>
            {error && <div className={styles.Error}>{error}</div>}
          {success && <div className={styles.Success}>{success}</div>}
              <input
                type="text"
                placeholder="name"
                name="username"
                value={username}
                onChange={handleChange}
                aria-label="Name"
                className={styles.formControl}
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="email"
                aria-label="Email"
                className={styles.formControl}
              />
              <textarea
                name="message"
                value={message}
                onChange={handleChange}
                id=""
                cols="30"
                rows="5"
                placeholder="please enter a message"
                aria-label="Please Enter a Message"
                className={styles.formControl}
              ></textarea>
              <button
                type="submit"
                value="Send"
                className={cx(styles.submitBtn, 'btn')}
              >
                Submit
              </button>
            </div>
          </form>
        </article>
      </section>
  
    )
}


