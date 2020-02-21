import React from 'react';

import styles from './ControlsButton.module.css';

import { ReactComponent as GearsIcon } from '../../../assets/images/svgs/gears.svg'

const controlsButton = ({ clicked }) => {
    return <button title="Show User Controls" className={styles.ControlsButton}><GearsIcon onClick={clicked} /></button>;
};

export default controlsButton;