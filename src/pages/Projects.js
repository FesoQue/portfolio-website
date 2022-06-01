import { motion } from 'framer-motion';
import React from 'react';
import { animatePages, transition } from '../animation/animate';
import { Github, ExternalLink } from '../component/Icons';
import { data } from '../projectsData';

const Projects = () => {
  return (
    <motion.section
      initial='out'
      animate='in'
      exit='out'
      variants={animatePages}
      transition={transition}
      className='section project-section'
    >
      <div className='section-contents-wrapper container'>
        <div className='section-title'>
          <h1>My Works</h1>
        </div>
        <div className='content'>
          <div className='project-cards'>
            {data.map((project, idx) => {
              return (
                <div className={`p-card p-card-${idx + 1}`} key={idx + 1}>
                  <div className='p-card-content'>
                    <h4>{project.name}</h4>
                    <div className='lang-tags'>
                      {project.stacks.map((item, idx) => {
                        return (
                          <button key={idx} className={`lang-tag ${item.name}`}>
                            {item.name}
                          </button>
                        );
                      })}
                    </div>
                    <div className='project-links'>
                      {project.links.map((link, idx) => {
                        return (
                          <div className='project-links' key={link.name}>
                            <a
                              key={idx}
                              href={link.href}
                              target='_blank'
                              className={link.name}
                              rel='noreferrer'
                            >
                              {link.icon}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
