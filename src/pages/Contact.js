import React from 'react';
import { GrFacebookOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className='section contact-section'>
      <div className='section-contents-wrapper container'>
        <div className='section-title'>
          <h1>Contact Me</h1>
        </div>
        <div className='content'>
          <form action='' className='contact-form' autoComplete='off'>
            <div className='form-group'>
              <input type='text' name='name' placeholder='name' />
              <input type='email' name='email' placeholder='email' />
              <textarea
                name='message'
                id=''
                placeholder='message'
                rows='10'
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
                <img src='' alt='' />
                <p>Ogun State, Nigeria.</p>
              </div>
              <div>
                <img src='' alt='' />
                <p>(+234)8168127242</p>
              </div>
              <div>
                <img src='' alt='' />
                <p>Adefesoq@gmail.com</p>
              </div>
            </div>
            <div className='social-info'>
              <div className=''>
                <span>
                  <GrFacebookOption />
                </span>
                <span>
                  <FiInstagram />
                </span>
                <span>
                  <AiOutlineTwitter />
                </span>
                <span>
                  <AiFillLinkedin />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
