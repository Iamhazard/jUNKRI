/* eslint-disable @next/next/no-img-element */
import React from 'react';


import './AboutUs.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding " id="about">
        <div className="app__aboutus-overlay flex__center">
            <img src='/Assets/j.png' alt="G_overlay" />
        </div>

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img src='/Assets/spoon.png' alt="about_spoon" className="spoon__img" />
                <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>

            </div>

            <div className="px-8 py-12 my-8 mx-20">
            </div>

            <div className="app__aboutus-content_history ">
                <h1 className="headtext__cormorant">Our History</h1>
                <img src='/Assets/spoon.png' alt="about_spoon" className="spoon__img" />
                <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volu.</p>

            </div>
        </div>
    </div>
);

export default AboutUs;