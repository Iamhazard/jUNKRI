/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';
import SubHeading from '../Navbars/SubHeading';
import images from '../config/images';

const Gallery = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
        const { current } = scrollRef;

        if (current !== null) {
            if (direction === 'left') {
                current.scrollLeft -= 300;
            } else {
                current.scrollLeft += 300;
            }
        }
    };

    return (
        <div className="app__gallery flex__center">
            <div className="app__gallery-content">
                <SubHeading title="Instagram" />
                <h1 className="headtext__cormorant">Photo Gallery</h1>

                <div className='mt-10'>
                    <h1 className="text-white font-medium pb-5">OPENING HOURS</h1>
                    <div className="flex flex-col gap-3 text-white">
                        <div className="flex items-center gap-x-5">
                            <h1 className="text-white text-sm">Sunday</h1>:
                            <h1 className="text-white text-sm">10 Am to 10 Pm</h1>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <h1 className="text-white text-sm">Monday</h1>:
                            <h1 className="text-white text-sm">10 Am to 10 Pm</h1>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <h1 className="text-white text-sm">Tuesday</h1>:
                            <h1 className="text-white text-sm">10 Am to 10 Pm</h1>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <h1 className="text-white text-sm">Wednesday</h1>:
                            <h1 className="text-white text-sm">10 Am to 10 Pm</h1>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <h1 className="text-white text-sm">Thursday</h1>:
                            <h1 className="text-white text-sm">10 Am to 10 Pm</h1>
                        </div>
                        <div className="flex items-center gap-x-5">
                            <h1 className="text-white text-sm">Friday</h1>:
                            <h1 className="text-white text-sm">10 Am to 10 Pm</h1>
                        </div>
                    </div>
                </div>


            </div>
            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {[images.gallery01.src, images.gallery02.src, images.gallery03.src, images.gallery04.src].map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                            <img src={image} alt="gallery_image" />
                            <BsInstagram className="gallery__image-icon" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;