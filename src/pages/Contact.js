import React, { useState, useEffect, useRef } from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import PHONE_ICON from '../assets/phone.png';
import MSG_ICON from '../assets/new-post.png';
import LOCATION_ICON from '../assets/map-marker.png';
// import emailjs from '@emailjs/browser';

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
    } else if (!email && !validateEmail(email)) {
    } else if (!message) {
    } else {
      // emailjs.sendForm(
      //   process.env.REACT_APP_EMAILJS_SERVICE_ID,
      //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      //   form.current,
      //   process.env.REACT_APP_EMAILJS_KEY
      // );
      setName('');
      setEmail('');
      setMessage('');
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSubmit(false);
    }, 5000);
  }, [isSubmit]);

  return (
    <section className='section contact-section'>
      <div className='section-contents-wrapper container'>
        <div className='section-title'>
          <h1>Contact Me</h1>
          <p>I'm vailable for freelance/job opportunities</p>
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
                  boxShadow: isSubmit && name === '' ? '0 0 0 2px red' : '',
                }}
              />
              <input
                type='email'
                name='email'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  boxShadow: isSubmit && email === '' ? '0 0 0 2px red' : '',
                }}
              />
              <textarea
                name='message'
                id=''
                onChange={(e) => setMessage(e.target.value)}
                placeholder='message'
                rows='10'
                style={{
                  boxShadow: isSubmit && message === '' ? '0 0 0 2px red' : '',
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
                <img src={LOCATION_ICON} alt='location' />
                <p>Ogun State, Nigeria.</p>
              </div>
              <div>
                <img src={PHONE_ICON} alt='tel' />
                <p>(+234)8168127242</p>
              </div>
              <div>
                <img src={MSG_ICON} alt='email' />
                <p>Adefesoq@gmail.com</p>
              </div>
            </div>
            <div className='social-info'>
              <div className=''>
                <a href='#'>
                  <GrFacebookOption />
                </a>
                <a href='#'>
                  <FiInstagram />
                </a>
                <a href='#'>
                  <AiOutlineTwitter />
                </a>
                <a href='#'>
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
