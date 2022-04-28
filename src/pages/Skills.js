import React, { useState, useRef, useEffect } from 'react';
import Services from '../component/Services';
import { gsap } from 'gsap';
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

  const [option, setOption] = useState('skills');
  const [stack, setStack] = useState('html');

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

  const setActiveLine = (arg) => {
    switch (arg) {
      case 'html':
        setStack('html');
        break;
      case 'css':
        setStack('css');
        break;
      case 'js':
        setStack('javascript');
        break;
      case 'react':
        setStack('react');
        break;
      case 'firebase':
        setStack('firebase');
        break;
      case 'git':
        setStack('git');
        break;
      case 'next':
        setStack('next');
        break;
      case 'gsap':
        setStack('gsap');
        break;
      case 'bootstrap':
        setStack('bootstrap');
        break;

      default:
        break;
    }
  };

  const handleRotation = (e) => {
    // const line = e.currentTarget.children[0];
    // line.style.height = '130px';
    // line.style.transform = 'rotate(0deg)';
    // skillEle.current.innerText = e.currentTarget.dataset.name;
    console.log(e.currentTarget.style.transform);
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

        <div className='tab-btn-wrapper'>
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
        <div className='section-content'>
          {/* ========== skills ========== */}
          <div
            className={
              option === 'skills'
                ? 'skills-content active-content'
                : 'skills-content'
            }
          >
            {/* technical */}
            <div className='technical-skills'>
              <h3>Tech stacks:</h3>
              <div id='main-circle' ref={circle}>
                <div className='degree-wrapper'>
                  <div className='degree' onClick={() => setActiveLine('html')}>
                    <span
                      className={`line ${
                        stack === 'html' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={HTML_ICON} alt='html5' />
                  </div>

                  <div className='degree' onClick={() => setActiveLine('css')}>
                    <span
                      className={`line ${stack === 'css' ? 'active-line' : ''}`}
                    ></span>
                    <img src={CSS3_ICON} alt='css3' />
                  </div>

                  <div className='degree' onClick={() => setActiveLine('js')}>
                    <span
                      className={`line ${
                        stack === 'javascript' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={JAVASCRIPT_ICON} alt='javascript' />
                  </div>
                  <div
                    className='degree'
                    onClick={() => setActiveLine('react')}
                  >
                    <span
                      className={`line ${
                        stack === 'react' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={REACT_ICON} alt='react' />
                  </div>
                  <div
                    className='degree'
                    onClick={() => setActiveLine('firebase')}
                  >
                    <span
                      className={`line ${
                        stack === 'firebase' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={FIREBASE_ICON} alt='firebase' />
                  </div>

                  <div className='degree' onClick={() => setActiveLine('git')}>
                    <span
                      className={`line ${stack === 'git' ? 'active-line' : ''}`}
                    ></span>
                    <img src={GIT_ICON} alt='git' />
                  </div>

                  <div className='degree' onClick={() => setActiveLine('next')}>
                    <span
                      className={`line ${
                        stack === 'next' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={NEXT_ICON} alt='nextjs' />
                  </div>

                  <div className='degree' onClick={() => setActiveLine('gsap')}>
                    <span
                      className={`line ${
                        stack === 'gsap' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={GSAP_ICON} alt='bootstrap' />
                  </div>

                  <div
                    className='degree'
                    onClick={() => setActiveLine('bootstrap')}
                  >
                    <span
                      className={`line ${
                        stack === 'bootstrap' ? 'active-line' : ''
                      }`}
                    ></span>
                    <img src={BOOTSTRAP_ICON} alt='gsap' />
                  </div>
                </div>

                <div id='center-label'>
                  <p>{stack}</p>
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

                {/* <div className='tool'>
                  <img src={NPM_ICON} alt='npm' />
                </div> */}
              </div>
            </div>
            {/* non technical */}
            <div className='non-technical-skills'>
              <h3>Soft skills:</h3>
              <div className='soft-skills-wrapper'>
                <div className='soft-skill'>
                  <p>Good Communication Skills</p>
                </div>

                <div className='soft-skill'>
                  <p>Critical Thinking & Problem Solving</p>
                </div>

                <div className='soft-skill'>
                  <p>Team Work & Collaboration</p>
                </div>

                <div className='soft-skill'>
                  <p>Professionalism & Strong Work Ethics</p>
                </div>

                <div className='soft-skill'>
                  <p>Flexibility & Adaptability</p>
                </div>

                <div className='soft-skill'>
                  <p>Time Maanagement</p>
                </div>
              </div>
            </div>
          </div>

          {/* =========== services ========== */}
          <div
            className={
              option === 'services'
                ? 'services-content active-content'
                : 'services-content'
            }
          >
            <Services />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
