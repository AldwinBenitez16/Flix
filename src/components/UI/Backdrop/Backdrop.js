// Dependencies
import React from 'react';

// CSS
import styles from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        props.show ? <div 
            className={[styles.Backdrop, props.styling].join(' ')} 
            onClick={props.clicked}></div> : null
    );
};

export default backdrop;