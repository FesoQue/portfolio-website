import React, { useState } from 'react';

const About = () => {
  const [bioLength, setBioLength] = useState('longest');

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
            <div className='bio-text active-text'>
              <p>
                Hi, my name is{' '}
                <span style={{ textTransform: 'uppercase' }}>
                  Adefeso Qudus
                </span>
                , I studied Electrical Electronics Engineering.
              </p>
            </div>
            <div className='bio-text'>
              <p>
                <span style={{ textTransform: 'uppercase' }}>
                  Adefeso Qudus (Q.Dus)
                </span>{' '}
                transitioned into web development to explore the creative and
                analytical sides of his mind. He was simply fascinated with it.
              </p>
            </div>

            <div className='bio-text'>
              <p>
                <span style={{ textTransform: 'uppercase' }}>
                  Adefeso Qudus(Q.Dus)
                </span>{' '}
                {' s'}
                is an Electrical Engineer now turned to frontend developer. He
                remembered the first time he discovered HTML, CSS, Wordpress a
                whole new world of possibilities happened before his eyes.
              </p>
            </div>

            <div className='bio-text'>
              <p>
                ADEFESO QUDUS (Q.DUS) is an Electrical Engineer now turned to
                frontend developer. He remembered the first time he discovered
                HTML, CSS, Wordpress a whole new world of possibilities happened
                before his eyes. He fiddled with wordpress(because he finds it
                easier then) for days to see what he could do with it. In the
                process, his <a href=''>first ever website</a>was created. It
                was an entertainment blog website.
              </p>
            </div>

            <div className='bio-text'>
              <p>
                ADEFESO QUDUS(Q.DUS) is an Electrical Engineer now turned to
                frontend developer. He remembered the first time he discovered
                HTML, CSS, Wordpress a whole new world of possibilities happened
                before his eyes. He fiddled with wordpress(because he finds it
                easier then) for days to see what he could do with it. In the
                process, his <a href=''>first ever website</a>was created. It
                was an entertainment blog website. He was excited and really
                wants to create more magical things with it . Even though he
                became really passionate and i want to create more interesting
                things on the web to satify his need for creativity, he just
                couldn't due to academics workload.
              </p>

              <p>
                As a person, he's an ambitious, goal driven & detail oriented
                frontend developer looking to leverage my working knowledge of
                frontend technologies for a role in an established IT company.
              </p>
            </div>

            <div className='bio-text'>
              <p>
                ADEFESO QUDUS(Q.DUS) is an Electrical Engineer now turned to
                frontend developer. He remembered the first time he discovered
                HTML, CSS, Wordpress a whole new world of possibilities happened
                before his eyes. He fiddled with wordpress(because he finds it
                easier then) for days to see what he could do with it. In the
                process, his <a href=''>first ever website</a>was created. It
                was an entertainment blog website. He was excited and really
                wants to create more magical things with it . Even though he
                became really passionate and i want to create more interesting
                things on the web to satify his need for creativity, he just
                couldn't due to academics workload.
              </p>

              <p>
                As a person, he's an ambitious, goal driven & detail oriented
                frontend developer looking to leverage my working knowledge of
                frontend technologies for a role in an established IT company
                with the opportunity to work on challenging and diverse projects
                and equally trying to help maximize productivity. He's also
                naturally curious, confident and always eager to broaden his
                horizon by learning new technology one at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
