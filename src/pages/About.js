import React from 'react';

const About = () => {
  return (
    <section className='section about-section'>
      <div className='section-wrapper container'>
        <div className='section-title'>
          <h1>Me, Myself & I</h1>
        </div>
        <div className='section-content-area'>
          <div className='section-content'>
            <p>
              Hi, my name is{' '}
              <span style={{ textTransform: 'uppercase' }}>
                Adefeso Qudus(Q.Dus)
              </span>
              , i'm a graduate of Electrical/Electronics Engineering. I
              transitioned into web development to explore the create and
              analytical sides of my mind. My love for web development didn't
              start right there, it started in my freshman year in school.
            </p>
            <p>
              I remembered the first time i discovered wordpress, a whole new
              world of possibilities appeared before my eyes. I played around it
              for days to see what i could create, and Voila!! my{' '}
              <a href='#'>first ever website</a> was created. It was an
              entertainment blog website. I was excited and really wants to
              create more magical things with it .
            </p>
            <p>
              Even though i became really passionate and i want to create more
              magical things to satisy my need for creativity, i just could'nt
              continue due to academics workload.
            </p>
            <p>
              I reginited the flames and passion for web development after i
              graduated and i have been learning and creating ever since then.
              Some of the languages & frameworks have worked with includes;
            </p>
            <ul className='language-list'></ul>
            <li>Html%</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Firebase</li>
            <li>NextJs</li>
            <li>Gsap</li>
            <li>Bootstrap</li>
            <li>Wordpress</li>
            <p>
              Finally, web development has its own ups and down but the outcome
              are far more rewarding! I love web development! I love the chill &
              thrill that comews with it!!!
            </p>
            <p>I am current looing for my first role as a web developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
