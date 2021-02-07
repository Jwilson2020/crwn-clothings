import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <div>
        <button 
            className={`${inverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-Sign-in' : ''
        } custom-button` }
        {...otherProps}
        >
            {children}
        </button>
    </div>
);


export default CustomButton;