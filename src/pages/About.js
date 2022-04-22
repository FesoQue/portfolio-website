import React, { useState } from 'react';

const About = () => {
  const [bioLength, setBioLength] = useState('short');

  const setActiveClass = (arg) => {
    switch (arg) {
      case 'shortest':
        setActiveClass('shortest');
        break;
      case 'shorter':
        setActiveClass('shorter');
        break;
      case 'short':
        setActiveClass('short');
        break;
      case 'long':
        setActiveClass('long');
        break;
      case 'longer':
        setActiveClass('longer');
        break;
      case 'longest':
        setActiveClass('longest');
        break;

      default:
        break;
    }
  };
  return (
    <section className='section about-section'>
      <div className='section-wrapper container'>
        <div className='section-title'>
          <h1>Me, Myself & I</h1>
        </div>
        <div className='bio-length'>
          <p>Adjust Bio Length:</p>
          <div className='dots-wrapper'>
            <div
              className={`${
                bioLength === 'shortest' ? 'dot dot-active' : 'dot'
              }`}
              onClick={() => setBioLength('shortest')}
            ></div>
            <div
              className={`${
                bioLength === 'shorter' ? 'dot dot-active' : 'dot'
              }`}
              onClick={() => setBioLength('shorter')}
            ></div>
            <div
              className={`${bioLength === 'short' ? 'dot dot-active' : 'dot'}`}
              onClick={() => setBioLength('short')}
            ></div>
            <div
              className={`${bioLength === 'long' ? 'dot dot-active' : 'dot'}`}
              onClick={() => setBioLength('long')}
            ></div>
            <div
              className={`${bioLength === 'longer' ? 'dot dot-active' : 'dot'}`}
              onClick={() => setBioLength('longer')}
            ></div>
            <div
              className={`${
                bioLength === 'longest' ? 'dot dot-active' : 'dot'
              }`}
              onClick={() => setBioLength('longest')}
            ></div>
          </div>
        </div>
        <div className='section-content-area'>
          <div className='section-content'>
            <p>
              Hi, my name is{' '}
              <span style={{ textTransform: 'uppercase' }}>
                Adefeso Qudus(Q.Dus)
              </span>
              , i'm a graduate of Electrical/Electronics Engineering. I
              transitioned into web development to explore the creative and
              analytical sides of my mind. I was simply fascinated with it.
            </p>
            <p>
              I remembered the first time i discovered wordpress, a whole new
              world of possibilities appeared before my eyes. I played around it
              for days to see what i could create, and Voila!! my first ever
              website was created. It was an entertainment blog website. I was
              excited and really wants to create more magical things with it .
              Even though i became really passionate and i want to create more
              magical things to satisy my need for creativity, i just could'nt
              continue due to academics workload. I reginited the flames and
              passion for web development after i graduated and i have been
              learning and creating ever since then.
            </p>
            <p>
              As a person, I'm an ambitious, goal driven & detail oriented
              frontend developer looking to leverage my working knowledge of
              frontend technologies for a role in an established IT company with
              the opportunity to work on challenging and diverse projects and
              equally trying to help maximize productivity.
            </p>

            <p>
              Also, I'm naturally curious, confident and always eager to broaden
              my horizon by learning new technology one at a time{' '}
            </p>

            <ul className='language-list'>
              <li>Html%</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Firebase</li>
              <li>NextJs</li>
              <li>Gsap</li>
              <li>Bootstrap</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
