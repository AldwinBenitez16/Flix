// Dependencies
import React from 'react';

// Components
import Button from '../../UI/Button/Button';
import UserControl from './UserControl/UserControl';
import ListControl from './ListControl/ListControl';

// CSS
import styles from './UserControls.module.css';

// Layout

/**
 * <-------->
 * Favorites [movies[#ofmovies], tv[#ofshows]]
 * Rated [movies[#ofmovies], tv[#ofshows]]
 * Watchlist [movies[#ofmovies], tv[#ofshows]]
 * Lists [List of lists[#of movies/shows]]
 * <-------->
 */

const userControls = (props) => {

    let visible = null;
    if(props.show) {
        visible = styles.Show;
    }
    return (
        <div className={[styles.UserControls, visible].join(' ')}>
            <div className={styles.ControlsContainer}>
                <UserControl showHandler={props.showHandler} category="Favorites" />
                <UserControl showHandler={props.showHandler} category="Rated" />
                <UserControl showHandler={props.showHandler} category="WatchList" />
                <Button
                action="Exit"
                type="Mini"
                clicked={props.toggleShowControls}>X</Button>
            </div>
            <hr />
            <ListControl />
        </div>
    );
};

export default userControls;