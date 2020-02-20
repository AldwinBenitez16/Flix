import React from 'react';

import ListDropdown from '../../Lists/ListsControls/ListsDropdown/ListsDropdown';

import { ReactComponent as AddListIcon } from '../../../../assets/images/svgs/add.svg';

import styles from './ListControl.module.css';

const listControl = () => {
    return (
        <div className={styles.ListControl}>
            <div style={{
                display: 'flex'
            }}>
                {/* <AddListIcon style={{
                    marginLeft: 'auto',
                    cursor: 'pointer'
                }} /> */}
            </div>
            <ListDropdown 
                show={true} 
                listType="user"
                addList={() => {}}
                showItems={() => {}}
                toggleLists={() => {}}
                toggleShowForm={() => {}}/>
        </div>
    );
};

export default listControl;