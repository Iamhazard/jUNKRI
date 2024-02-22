/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface SubHeadingProps {
    title: string
}


const SubHeading = ({ title }: SubHeadingProps) => (
    <div style={{ marginBottom: '1rem' }}>
        <p className="p__cormorant">{title}</p>
        <img src='/Assets/spoon.png' alt="spoon_image" className="spoon__img" />
    </div>
);

export default SubHeading;