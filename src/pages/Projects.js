import { motion } from 'framer-motion';
import React from 'react';
// import { AiFillGithub } from 'react-icons/ai';
// import { FiExternalLink } from 'react-icons/fi';
import { animatePages, transition } from '../animation/animate';

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
            <div className='p-card p-card-1'>
              <div className='p-card-content'>
                <h4>Wishopa Ecommerce</h4>

                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                  <button className='lang-tag context-tag chartjs-tag'>
                    Context
                  </button>
                  <button className='lang-tag firebase-tag'>firebase</button>
                  <button className='lang-tag mui-tag'>MUI</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Wishopa-React-Ecommerce-Website'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
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
                    href='https://wishopa.netlify.app'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* <FiExternalLink /> */}
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
                  <a
                    href='https://github.com/FesoQue/gradeo-gradient-generator'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
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
                    href='https://coloree.netlify.app'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* <FiExternalLink /> */}
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-3'>
              <div className='p-card-content'>
                <h4>Crypto Prices Tracker</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                  <button className='lang-tag context-tag chartjs-tag'>
                    Context
                  </button>
                  <button className='lang-tag firebase-tag'>firebase</button>
                  <button className='lang-tag chartjs-tag'>Chartjs</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Live-CryptoCurrency-Tracker-Project'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
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
                    href='https://coinsverse.netlify.app'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* <FiExternalLink /> */}
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-4'>
              <div className='p-card-content'>
                <h4>Sneakers paystack checkout</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                  <button className='lang-tag context-tag'>context</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Sneakers-Ecommerce-Product-Page-With-Paystack-Checkout-and-Dark-Mode-With-localStorage'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
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
                    href='https://sneakerz.netlify.app'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* <FiExternalLink /> */}
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-5'>
              <div className='p-card-content'>
                <h4>Bookmark Landing Page</h4>
                <div className='lang-tags'>
                  <button className='lang-tag html-tag'>html</button>
                  <button className='lang-tag css-tag'>css</button>
                  <button className='lang-tag js-tag'>javascript</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Bookmark-Landing-Page-With-Tabs-And-Email-Validation'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
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
                    href='https://bookmarknow.netlify.app/'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* <FiExternalLink /> */}
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
                  <a
                    href='https://github.com/FesoQue/'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
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
                    href='https://eazibank.netlify.app'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* <FiExternalLink /> */}
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-7'>
              <div className='p-card-content'>
                <h4> Pricing Component</h4>
                <div className='lang-tags'>
                  <button className='lang-tag bootstrap-tag'> bootstrap</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Interactive-pricing-component'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
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
                    href='https://price-component.netlify.app/'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* <FiExternalLink /> */}
                  </a>
                </div>
              </div>
            </div>
            <div className='p-card p-card-8'>
              <div className='p-card-content'>
                <h4>Github User Finder</h4>
                <div className='lang-tags'>
                  <button className='lang-tag react-tag'>react</button>
                </div>

                <div className='project-links'>
                  <a
                    href='https://github.com/FesoQue/Github-Dev-Finder'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
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
                    href='https://devpadi.netlify.app/'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* <FiExternalLink /> */}
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
                  <a
                    href='https://github.com/FesoQue/Room-Homepage-Master'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
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
                    href='https://roomhomepage-master.netlify.app/'
                    className='ext-link'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* <FiExternalLink /> */}
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
                  <a
                    href='https://github.com/FesoQue/Social-media-dashboard-with-theme-switcher'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
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
                    href='https://social-md.netlify.app/'
                    className='github'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {/* <FiExternalLink /> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
