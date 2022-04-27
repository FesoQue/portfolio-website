import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import MOBILE from '../assets/mobile.gif';
import ILLUSTRATOR from '../assets/illustrator.gif';
import HTML_ICON from '../assets/html.svg';
import CSS3_ICON from '../assets/css.svg';
import JAVASCRIPT_ICON from '../assets/javascript.svg';
import GIT_ICON from '../assets/git.svg';
import REACT_ICON from '../assets/react.svg';
import NEXT_ICON from '../assets/nextjs.svg';
import BOOTSTRAP_ICON from '../assets/bootstrap.svg';
import FIREBASE_ICON from '../assets/firebase.svg';
import GSAP_ICON from '../assets/gsap.svg';
import VSCODE_ICON from '../assets/vscode.svg';
import CHROME_ICON from '../assets/chrome.svg';
import CODEPEN_ICON from '../assets/codepen.svg';
import CODESANDBOX_ICON from '../assets/code-sandbox.svg';
import ADOBE_ICON from '../assets/adobe-xd.svg';
import NPM_ICON from '../assets/npm.svg';

const Skills = () => {
  const circle = useRef();
  // const line = useRef();
  const skillEle = useRef();

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

  const handleRotation = (e) => {
    const line = e.currentTarget.children[0];
    line.style.height = '130px';
    line.style.transform = e.currentTarget.style.transform;
    skillEle.current.innerText = e.currentTarget.dataset.name;
  };

  useEffect(() => {
    const degreeElement = circle.current.children[0].children;
    const degArr = Array.from(degreeElement);

    degArr.forEach((element, index) => {
      element.style.left = '130px';
      element.style.transformOrigin = '50% 145px';
      element.style.transform = `rotate(${index * 40}deg)`;
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
              <h3>Tech stacks:</h3>
              <div id='main-circle' ref={circle}>
                <div className='degree-wrapper'>
                  <div
                    className='degree degree-1'
                    onClick={(e) => handleRotation(e)}
                    data-name='HTML'
                  >
                    <span className='line'></span>
                    <img src={HTML_ICON} alt='html5' />
                  </div>
                  <div
                    className='degree degree-2'
                    onClick={(e) => handleRotation(e)}
                    data-name='CSS3'
                  >
                    <span className='line'></span>
                    <img src={CSS3_ICON} alt='css3' />
                  </div>
                  <div
                    className='degree degree-3'
                    onClick={(e) => handleRotation(e)}
                    data-name='JS'
                  >
                    <span className='line'></span>
                    <img src={JAVASCRIPT_ICON} alt='javascript' />
                  </div>
                  <div
                    className='degree degree-4'
                    onClick={(e) => handleRotation(e)}
                    data-name='React'
                  >
                    <span className='line'></span>
                    <img src={REACT_ICON} alt='react' />
                  </div>
                  <div
                    className='degree'
                    onClick={(e) => handleRotation(e)}
                    data-name='Firebase'
                  >
                    <span className='line'></span>
                    <img src={FIREBASE_ICON} alt='firebase' />
                  </div>

                  <div
                    className='degree'
                    onClick={(e) => handleRotation(e)}
                    data-name='Git'
                  >
                    <span className='line'></span>
                    <img src={GIT_ICON} alt='git' />
                  </div>

                  <div
                    className='degree'
                    onClick={(e) => handleRotation(e)}
                    data-name='NextJS'
                  >
                    <span className='line'></span>
                    <img src={NEXT_ICON} alt='nextjs' />
                  </div>

                  <div
                    className='degree'
                    onClick={(e) => handleRotation(e)}
                    data-name='GSAP'
                  >
                    <span className='line'></span>
                    <img src={GSAP_ICON} alt='bootstrap' />
                  </div>

                  <div
                    className='degree'
                    onClick={(e) => handleRotation(e)}
                    data-name='Bootstrap'
                  >
                    <span className='line'></span>
                    <img src={BOOTSTRAP_ICON} alt='gsap' />
                  </div>
                </div>

                <div id='center-label'>
                  <p ref={skillEle}>skills</p>
                </div>
              </div>
            </div>
            {/* tools */}
            <div className='tools'>
              <h3>Tools: </h3>
              <div className='tools-wrapper'>
                <div className='tool'>
                  <img src={VSCODE_ICON} alt='vscode' />
                </div>

                <div className='tool'>
                  <img src={CHROME_ICON} alt='chrome' />
                </div>

                <div className='tool'>
                  <img src={GIT_ICON} alt='git' />
                </div>

                <div className='tool'>
                  <img src={CODEPEN_ICON} alt='codepen' />
                </div>

                <div className='tool'>
                  <img src={ADOBE_ICON} alt='adobe-xd' />
                </div>

                <div className='tool'>
                  <img src={CODESANDBOX_ICON} alt='codesandbox' />
                </div>

                <div className='tool'>
                  <img src={NPM_ICON} alt='npm' />
                </div>
              </div>
            </div>
            {/* non technical */}
            <div className='non-technical-skills'>
              <h3>Soft skills:</h3>
              <div className='soft-skills-wrapper'>
                <div className='soft-skill ss-1'>
                  <div className='square-shape'></div>
                  <p>Good Communication Skills</p>
                </div>

                <div className='soft-skill ss-1'>
                  <div className='square-shape'></div>
                  <p>Critical Thinking & Problem Solving</p>
                </div>

                <div className='soft-skill ss-1'>
                  <div className='square-shape'></div>
                  <p>Team Work & Collaboration</p>
                </div>

                <div className='soft-skill ss-1'>
                  <div className='square-shape'></div>
                  <p>Professionalism & Strong Work Ethics</p>
                </div>

                <div className='soft-skill ss-1'>
                  <div className='square-shape'></div>
                  <p>Flexibility & Adaptability</p>
                </div>

                <div className='soft-skill ss-1'>
                  <div className='square-shape'></div>
                  <p>Time Maanagement</p>
                </div>
              </div>
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
