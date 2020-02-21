import React from 'react';

import ListDropdown from '../../Lists/ListsControls/ListsDropdown/ListsDropdown';

import { ReactComponent as AddListIcon } from '../../../../assets/images/svgs/add.svg';

import styles from './ListControl.module.css';

const listControl = (props) => {
    return (
        <div className={styles.ListControl}>
            <div className={styles.ListContainer}>
                <header>Lists</header>
                <button>
                <AddListIcon />
                </button>
            </div>
            <hr />
            <ListDropdown 
                show={true} 
                listType="user"
                addList={props.addList}
                showItems={props.showItems}
                toggleLists={props.closeControls}
                toggleShowForm={() => {}}/>
        </div>
    );
};

export default listControl;