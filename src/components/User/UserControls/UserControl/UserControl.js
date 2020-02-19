import React from 'react';

import Button from '../../../UI/Button/Button';

import styles from './UserControl.module.css';

/** Layout
 * <--------->
 * Favorites
 * Movie[#ofmovies]
 * Shows[#ofshows]
 * <--------->
 */

const userControl = ({ category, showHandler }) => {
    return (
        <Button
                addClass={[styles.UpdatedButton]}
                type="Success"
                action={`Show ${category}`}
                clicked={() => showHandler(`${category}`)}>{category}</Button>
    );
};

export default userControl;