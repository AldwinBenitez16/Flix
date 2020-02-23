// Dependencies
import React, { Fragment } from 'react';

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
    let loginOverlay = null;
    if(props.isGuest) {
        loginOverlay = (
            <Fragment>
                <div className={styles.LoginOverlay}></div> 
                <div className={styles.SignupOverlay}>
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">Sign Up</a>
                    <p>Store, View &amp; Access Movies from personal Favorites, Rated, WatchList, and Lists Pages</p>
                </div>
            </Fragment>
        );
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
            <ListControl
                addList={props.addList}
                showItems={props.showItems}
                closeControls={props.toggleShowControls}
                showHandler={props.showHandler}
                isGuest={props.isGuest} />
            {loginOverlay}
        </div>
    );
};

export default userControls;