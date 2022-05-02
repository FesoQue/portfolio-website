import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section className='section project-section'>
      <div className='section-contents-wrapper container'>
        <div className='section-title'>
          <h1>My Work</h1>
        </div>
        <div className='content'>
          <div className='project-cards'>
            <div className='p-card p-card-1'>
              <div className='p-card-content'>
                <h4>Wishopa Ecommerce Website</h4>

                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                  <button className='lang-tag context-tag chartjs-tag'>
                    Context
                  </button>
                  <button className='lang-tag firebase-tag'>firebase</button>
                  <button className='lang-tag mui-tag'>MUI</button>
                </div>

                <div className='project-links'>
                  <a href='' className='github'>
                    <AiFillGithub />
                  </a>
                  <a href='' className='github'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-2'>
              <div className='p-card-content'>
                <h4>Gradient Color Generator</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                </div>

                <div className='project-links'>
                  <a href='' className='github'>
                    <AiFillGithub />
                  </a>
                  <a href='' className='github'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-3'>
              <div className='p-card-content'>
                <h4>Coinverse Crypto Tracking website</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                  <button className='lang-tag context-tag chartjs-tag'>
                    Context
                  </button>
                  <button className='lang-tag firebase-tag'>firebase</button>
                  <button className='lang-tag mui-tag'>MUI</button>
                  <button className='lang-tag chartjs-tag'>Chartjs</button>
                </div>

                <div className='project-links'>
                  <a href='' className='github'>
                    <AiFillGithub />
                  </a>
                  <a href='' className='github'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-4'>
              <div className='p-card-content'>
                <h4>Sneakers Storefront Landing Page</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                  <button className='lang-tag context-tag'>context</button>
                </div>

                <div className='project-links'>
                  <a href='' className='github'>
                    <AiFillGithub />
                  </a>
                  <a href='' className='github'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-5'>
              <div className='p-card-content'>
                <h4>Bookmark Manager Landing Page</h4>
                <div className='lang-tags'>
                  <button className='lang-tag html-tag'>html</button>
                  <button className='lang-tag css-tag'>css</button>
                  <button className='lang-tag js-tag'>javascript</button>
                </div>

                <div className='project-links'>
                  <a href='' className='github'>
                    <AiFillGithub />
                  </a>
                  <a href='' className='github'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-6'>
              <div className='p-card-content'>
                <h4>Digital Banking Landing Page</h4>
                <div className='lang-tags'>
                  <button className='lang-tag html-tag'>html</button>
                  <button className='lang-tag css-tag'>css</button>
                  <button className='lang-tag js-tag'>javascript</button>
                </div>

                <div className='project-links'>
                  <a href='' className='github'>
                    <AiFillGithub />
                  </a>
                  <a href='' className='github'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-7'>
              <div className='p-card-content'>
                <h4>Interactive Pricing Component</h4>
                <div className='lang-tags'>
                  <button className='lang-tag bootstrap-tag'> bootstrap</button>
                </div>

                <div className='project-links'>
                  <a href='' className='github'>
                    <AiFillGithub />
                  </a>
                  <a href='' className='github'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-8'>
              <div className='p-card-content'>
                <h4>(Devpadi) Github User Finder</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                </div>

                <div className='project-links'>
                  <a href='' className='github'>
                    <AiFillGithub />
                  </a>
                  <a href='' className='github'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-9'>
              <div className='p-card-content'>
                <h4>Room Homepage Master</h4>
                <div className='lang-tags'>
                  <button className='lang-tag html-tag'>html</button>
                  <button className='lang-tag css-tag'>css</button>
                  <button className='lang-tag js-tag'>javascript</button>
                </div>

                <div className='project-links'>
                  <a href='' className='github'>
                    <AiFillGithub />
                  </a>
                  <a href='' className='github'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-10'>
              <div className='p-card-content'>
                <h4>Social Media Dashboard</h4>
                <div className='lang-tags'>
                  <button className='lang-tag html-tag'>html</button>
                  <button className='lang-tag css-tag'>css</button>
                  <button className='lang-tag js-tag'>javascript</button>
                </div>

                <div className='project-links'>
                  <a href='' className='github'>
                    <AiFillGithub />
                  </a>
                  <a href='' className='github'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
