import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import MOBILE from '../assets/mobile.gif';
import ILLUSTRATOR from '../assets/illustrator.gif';
import HTML_ICON from '../assets/html.svg';
import CSS3_ICON from '../assets/css.svg';
import JAVASCRIPT_ICON from '../assets/javascript.svg';
import REACT_ICON from '../assets/react.svg';
import NEXT_ICON from '../assets/nextjs.svg';
import BOOTSTRAP_ICON from '../assets/bootstrap.svg';
import FIREBASE_ICON from '../assets/firebase.svg';
import GSAP_ICON from '../assets/gsap.svg';

const Skills = () => {
  const circle = useRef();

  const [option, setOption] = useState('skills');

  const setActiveClass = (arg) => {
    switch (arg) {
      case 'skills':
        setOption('skills');
        break;
      case 'services':
        setOption('services');
        break;

      default:
        break;
    }
  };

  const aaa = (e) => {
    // console.log(e.target.style.transform);
  };
  useEffect(() => {
    const degreeElement = circle.current.children[0].children;
    const degArr = Array.from(degreeElement);

    degArr.forEach((element, index) => {
      element.style.left = '130px';
      element.style.transformOrigin = '50% 145px';
      element.style.transform = `rotate(${index * 45}deg)`;
      console.log(element.style.transform);
    });

    // gsap.to(circle.current, {
    //   rotation: 1440,
    //   ease: 'power1.in',
    //   duration: 50,
    //   repeat: -1,
    //   yoyo: true,
    // });
  }, []);

  return (
    <section className='section skills-section'>
      <div className='section-contents-wrapper container'>
        <div className='section-title'>
          <h1>Skills & Services</h1>
        </div>
        <div className='section-content-area'>
          <div className='content'>{/*  */}</div>
        </div>
      </div>
      <div className='container tab-btn-wrapper'>
        <button
          onClick={() => setActiveClass('skills')}
          className={`tab-btn ${
            option === 'skills' ? 'active-tab-btn' : 'null'
          }`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveClass('services')}
          className={`tab-btn ${
            option === 'services' ? 'active-tab-btn' : 'null'
          }`}
        >
          Services
        </button>
      </div>
      <div className='section-content-area container'>
        <div className='section-content'>
          {/* skills */}
          <div
            className={
              option === 'skills'
                ? 'skills-content active-content'
                : 'skills-content'
            }
          >
            {/* technial */}
            <div className='technical-skills'>
              <h3>My tech stacks are:</h3>
              <div id='main-circle' ref={circle}>
                <div className='degree-wrapper'>
                  <div className='degree degree-1'>
                    <img src={HTML_ICON} alt='html5' />
                  </div>
                  <div className='degree degree-2' onClick={(e) => aaa(e)}>
                    <img src={CSS3_ICON} alt='css3' />
                  </div>
                  <div className='degree degree-3'>
                    <img src={JAVASCRIPT_ICON} alt='javascript' />
                  </div>
                  <div className='degree degree-4'>
                    <img src={REACT_ICON} alt='react' />
                  </div>
                  <div className='degree '>
                    <img src={FIREBASE_ICON} alt='firebase' />
                  </div>
                  <div className='degree'>
                    <img src={NEXT_ICON} alt='nextjs' />
                  </div>
                  <div className='degree'>
                    <img src={GSAP_ICON} alt='bootstrap' />
                  </div>
                  <div className='degree'>
                    <img src={BOOTSTRAP_ICON} alt='gsap' />
                  </div>
                </div>
                <div id='center-label'>
                  <p>skills</p>
                </div>
              </div>
            </div>
            {/* non technical */}
            <div className='non-technical-skills'>
              <h3>My soft skills are:</h3>
            </div>
          </div>
          {/* services */}
          <div
            className={
              option === 'services'
                ? 'services-content active-content'
                : 'services-content'
            }
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              dolore. Accusantium eius sint, quasi odio ullam debitis
              perspiciatis nisi ex perferendis minus non ad veritatis? Fugiat
              iste voluptas molestiae sint repellat veritatis dolorum esse
              quidem. Facere dolor pariatur autem voluptatibus tempore
              recusandae aliquid dolores enim, temporibus numquam? Animi ut quae
              alias facere deleniti odio laboriosam inventore, est sit quisquam
              in rem magnam ex error quidem veritatis obcaecati quod doloribus
              commodi vitae consequatur, hic architecto? Dolores saepe illo
              officia dolorum laboriosam.
            </p>
          </div>
        </div>
      </div>
      {/* <div>
        <img src={MOBILE} alt='' />
        <img src={ILLUSTRATOR} alt='' />
      </div> */}
    </section>
  );
};

export default Skills;
