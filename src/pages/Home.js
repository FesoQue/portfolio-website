import React, { useEffect, useRef } from 'react';
import Header from '../component/Header';
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const textsRef = useRef();

  // gsap
  // const charEl = useRef();
  // const q = gsap.utils.selector(charEl);
  // const tl = gsap.timeline();
  // gsap.set(q('div'), { yPercent: -155 });
  // gsap.set(charEl.current, { autoAlpha: 1 });

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
      setTimeout(animateText, 2500);
    };

    animateText();
  }, []);

  return (
    <section className='homepage'>
      <Header />
      <div className='intro container'>
        <div className='intro-text'>
          <h1>Hi,</h1>
          <div className='d-flex'>
            <h1>I'm</h1>
            <h1 className='char'>
              <div data-char='Q'>O</div>
              <div data-char='.'>.</div>
              <div data-char='D'>O</div>
              <div data-char='u'>n</div>
              <div data-char='s'>c</div>
            </h1>
          </div>
          <h1> Web Developer</h1>
        </div>
        <div className='job-desc'>
          <p>
            Have you wondered who is responsible for the design of the websites
            you use everyday? Yes, that's what <span>web developer</span> does.
            I help create fast, scalable and reliable websites with;
          </p>
        </div>
        {/* services */}
        <div className='multitext-wrapper'>
          <h2 className='multitext' ref={textsRef}>
            <span>- beautiful user Interface</span>
            <span>- functional user experience</span>
            <span>- mobile/responsive design</span>
            <span>- great browser compatibility</span>
            <span>- good web accessibility</span>
          </h2>
        </div>
        {/* socials */}
        <div className='social-wrapper'>
          <p>Let's get Social:</p>
          <div className='socials'>
            <a href='#'>
              <FontAwesomeIcon icon={faTwitter} color='#ebecf0' />
            </a>
            <a href=''>
              <FontAwesomeIcon icon={faFacebook} color='#ebecf0' />
            </a>
            <a href=''>
              <FontAwesomeIcon icon={faGithub} color='#ebecf0' />
            </a>
            <a href=''>
              <FontAwesomeIcon icon={faLinkedin} color='#ebecf0' />
            </a>
            <a href=''>
              <FontAwesomeIcon icon={faYoutube} color='#ebecf0' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
