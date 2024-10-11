import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='mb-16 group'>
            <div className='text-surface-600'>
                <div className='mb-6 text-primary-300'>Hi, I'm Edward!</div>
                <div className='mb-6'>I'm a 4th year PhD student studying computer systems and security at Carnegie Mellon University,
                    co-advised by <a href="https://wzheng.github.io/" target="_blank" className="text-on-background transition-all hover:text-primary-500">Wenting Zheng</a> and <a href="https://mlfbrown.com/" target="_blank" className="text-on-background transition-all hover:text-primary-500">Fraser Brown</a> and supported by the <a href="https://nsfgrfp.org/" target="_blank" className="text-on-background transition-all hover:text-primary-500">NSF Graduate Research Fellowship</a>.
                    My primary research is on building secure and optimized systems for various cryptographic protocols.
                </div>
            </div>
        </div>
    )
}

export default About