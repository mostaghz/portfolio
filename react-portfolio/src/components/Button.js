// MAYBE USE THESE FOR THE PORTFOLIO, RESUME, GITHUB, LINKEDIN BUTTONS INSTEAD OF ICONS? 27:30ish in video
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn--mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {/* whatever is inside teh button is going to render instead of creating a new button component each time */}
                {children}
            </button>
        </Link>
    )
};