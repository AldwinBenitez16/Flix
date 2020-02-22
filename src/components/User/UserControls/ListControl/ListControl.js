import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';

import ListDropdown from '../../Lists/ListsControls/ListsDropdown/ListsDropdown';
import ListsForm from '../../Lists/ListsControls/ListsForm/ListsForm';

import { ReactComponent as AddListIcon } from '../../../../assets/images/svgs/add.svg';
import { ReactComponent as ShowListsIcon } from '../../../../assets/images/svgs/list-icon.svg';

import styles from './ListControl.module.css';

class ListControl extends Component {

    state = {
        Form: {
            show: false,
            title: '',
            desc: '',
        },
        Lists: {
            show: true
        } 
    }

    showFormHandler = (type) => {
        this.setState(prevState => {
            return {
                Form: {
                    ...prevState.Form,
                    show: false
                },
                Lists: {
                    ...prevState.Lists,
                    show: false
                },
                [type]: {
                    ...prevState[type],
                    show: true
                }
            };
        });
    };

    createNewListHandler = () => {
        const { sessionID, onCreateNewList } = this.props;
        onCreateNewList(sessionID, this.state.Form.title, this.state.Form.desc);
    }

    changeFormKeyHandler = (data) => {
        this.setState(prevState => {
            return {
                Form: {
                    ...prevState.Form,
                    ...data
                }
            };
        });
    };

    render() {
        const {
            addList,
            showItems,
            closeControls,
            showHandler
        } = this.props;

        let formButton = <AddListIcon onClick={() => this.showFormHandler('Form')} />;
        if(this.state.Form.show) {
            formButton = <ShowListsIcon onClick={() => this.showFormHandler('Lists')} />
        }

        return (
            <div className={styles.ListControl}>
                <div className={styles.ListContainer}>
                    <header>Lists</header>
                    <button>
                        {formButton}
                    </button>
                </div>
                <hr />
                <ListDropdown 
                    show={this.state.Lists.show} 
                    listType="user"
                    addList={addList}
                    showHandler={showHandler}
                    showItems={showItems}
                    toggleLists={closeControls}
                    toggleShowForm={() => this.showFormHandler('Form')}/>
                <ListsForm 
                    title={this.state.Form.title}
                    desc={this.state.Form.desc}
                    show={this.state.Form.show} 
                    changeFormKey={this.changeFormKeyHandler}
                    createNewList={this.createNewListHandler}/>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        accountLists: state.info.accountLists,
        sessionID: state.auth.sessionIdData.session_id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreateNewList: (sessionID, name, description) => dispatch(actions.createNewList(sessionID, name, description))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListControl);