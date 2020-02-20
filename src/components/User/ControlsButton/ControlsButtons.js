import React from 'react';

import styles from './ControlsButton.module.css';

const controlsButton = ({ clicked }) => {
    return <button className={styles.ControlsButton} onClick={clicked} >SHOWICON</button>;
};

export default controlsButton;