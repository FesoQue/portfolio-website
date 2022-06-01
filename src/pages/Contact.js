import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { animatePages, transition } from '../animation/animate';
import { motion } from 'framer-motion';
import {
  Github,
  Facebook,
  Twitter,
  Linkedin,
  Location,
  Phone,
  Mail,
} from '../component/Icons';

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setIsSubmit(true);
    }
    if (!email && !validateEmail(email)) {
      setIsSubmit(true);
    }
    if (!message) {
      setIsSubmit(true);
    }
    if (name && email && validateEmail(email) && message) {
      emailjs.sendForm(
        'service_d76zupb',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
      );
      setIsSubmit(false);
      e.target.reset();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSubmit(false);
    }, 5000);
  }, [isSubmit]);

  return (
    <motion.section
      initial='out'
      animate='in'
      exit='out'
      variants={animatePages}
      transition={transition}
      className='section contact-section'
    >
      <div className='section-contents-wrapper container'>
        <div className='section-title'>
          <h1>Contact Me</h1>
          <p>I'm available for freelance/job opportunities</p>
        </div>
        <div className='contact-content'>
          <form
            ref={form}
            action=''
            className='contact-form'
            autoComplete='off'
            onSubmit={handleFormSubmit}
          >
            <div className='form-group'>
              <input
                type='text'
                name='name'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
                style={{
                  boxShadow: isSubmit && name === '' ? '0 0 0 2px red' : 'none',
                }}
              />
              <input
                type='email'
                name='email'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  boxShadow:
                    isSubmit && email === '' ? '0 0 0 2px red' : 'none',
                }}
              />
              <textarea
                name='message'
                id=''
                onChange={(e) => setMessage(e.target.value)}
                placeholder='message'
                rows='10'
                style={{
                  boxShadow:
                    isSubmit && message === '' ? '0 0 0 2px red' : 'none',
                }}
              ></textarea>
              <button type='submit' className='form-btn'>
                submit
              </button>
            </div>
          </form>

          {/* contact info */}
          <div className='contact-info-container'>
            <div className='contact-info'>
              <div>
                <span>
                  <Location />
                </span>
                <p>Ogun State, Nigeria.</p>
              </div>
              <div>
                <span>
                  <Phone />
                </span>
                <p>(+234)8168127242</p>
              </div>
              <div>
                <span>
                  <Mail />
                </span>
                <p>Adefesoq@gmail.com</p>
              </div>
            </div>
            <div className='social-info'>
              <div className=''>
                <a
                  href='https://m.facebook.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Facebook />
                </a>

                <a
                  href='https://twitter.com/pengpixel'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Twitter />
                </a>
                <a
                  href='https://github.com/FesoQue'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Github />
                </a>
                <a
                  href='https://www.linkedin.com/in/adefeso-qudus-a-ba8ba310a'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
