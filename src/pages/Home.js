import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { GrFacebookOption } from 'react-icons/gr';
// import { AiFillGithub } from 'react-icons/ai';
// import { AiOutlineTwitter } from 'react-icons/ai';
// import { AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { animatePages, transition } from '../animation/animate';

const Home = () => {
  const textsRef = useRef();

  // gsap
  const tl = useRef();
  const charEl = useRef();
  const q = gsap.utils.selector(charEl);
  gsap.set(q('div'), { yPercent: -170 });
  gsap.set(charEl.current, { autoAlpha: 1 });

  useEffect(() => {
    // slide up multitext effect
    let index = 0;
    const textsElement = textsRef.current.children;
    const textsLength = textsElement.length;

    const animateText = () => {
      for (let i = 0; i < textsLength; i++) {
        textsElement[i].classList.remove('text-in');
      }
      textsElement[index].classList.add('text-in');
      if (index === textsLength - 1) {
        index = 0;
      } else {
        index++;
      }
      setTimeout(animateText, 3000);
    };

    animateText();
  }, []);

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q('div'), {
        duration: 0.3,
        yPercent: 0,
        stagger: 0.05,
        ease: 'expo.inOut',
      })
      .to(q("div:not([data-char='.']"), {
        duration: 1,
        yPercent: 170,
        stagger: 0.11,
        ease: 'expo.inOut',
      });
  }, []);

  return (
    <motion.section
      initial='out'
      animate='in'
      exit='out'
      variants={animatePages}
      transition={transition}
      className='homepage'
    >
      <div className='intro container'>
        <div className='intro-text'>
          <h1>Hi,</h1>
          <div className='d-flex'>
            <h1>I'm</h1>
            <h1 className='char' ref={charEl}>
              <div data-char='Q'>O</div>
              <div data-char='.'>.</div>
              <div data-char='D'>O</div>
              <div data-char='u'>n</div>
              <div data-char='s'>c</div>,
            </h1>
          </div>
          <h1> Web Developer</h1>
        </div>
        <div className='job-desc'>
          <p>
            Have you wondered who is responsible for the design of the websites
            you use everyday? Yes, that's what a <span>web developer</span>{' '}
            does. I help build stable, elegant, secure and reliable websites
            with;
          </p>
        </div>
        {/* services */}
        <div className='multitext-wrapper'>
          <h2 className='multitext' ref={textsRef}>
            <span>- beautiful user Interface</span>
            <span>- functional user experience</span>
            <span>- mobile/responsive design</span>
            <span>- good browser compatibility</span>
            <span>- great web accessibility</span>
          </h2>
        </div>
        {/* socials */}
        <div className='social-wrapper'>
          <p className='connect-text'>Let's connect</p>
          <div className='social'>
            <a
              href='https://m.facebook.com/adefesoqudus.dmics'
              className='fb'
              target='_blank'
              rel='noreferrer'
              aria-label='facebook'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
              >
                <path
                  d='M23.446 18l0.889-5.791h-5.557v-3.758c0-1.584 0.776-3.129 3.265-3.129h2.526v-4.93c0 0-2.292-0.391-4.484-0.391-4.576 0-7.567 2.774-7.567 7.795v4.414h-5.087v5.791h5.087v14h6.26v-14z'
                  className='social-icon'
                />
              </svg>
            </a>
            <a
              href='https://twitter.com/pengpixel'
              className='twitter'
              target='_blank'
              rel='noreferrer'
              aria-label='twitter'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
              >
                <path
                  d='M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z'
                  className='social-icon'
                />
              </svg>
            </a>

            <a
              href='https://github.com/FesoQue'
              className='github'
              target='_blank'
              rel='noreferrer'
              aria-label='github'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
              >
                <path
                  d='M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z'
                  className='social-icon'
                />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/adefeso-qudus-a-ba8ba310a'
              className='linkedin'
              target='_blank'
              rel='noreferrer'
              aria-label='linkedin'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='32'
                height='32'
                viewBox='0 0 32 32'
              >
                <path
                  d='M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z'
                  className='social-icon'
                />
              </svg>
            </a>
          </div>
        </div>
        {/* themes */}
        <div className='themes'>
          <button
            type='button'
            aria-label='dark mode2'
            className='theme-btn theme-btn1'
          ></button>
          <button
            type='button'
            aria-label='light-mode'
            className='theme-btn aria-labe theme-btn2'
          ></button>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
