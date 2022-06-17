import React from 'react';
import { AddDishesForm } from './AddDishesForm';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
}
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
        dispatch(followAC(userID));
    },
    unFollow: (userID) => {
        dispatch(unFollowAC(userID));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users));
    },
    setTotalUsersCount: (count) => {
        dispatch(setTotalUsersCountAC(count));
    },
    setCurrentPage: (page) => {
        dispatch(setCurrentPageAC(page));
    },
}
}

export default const AddDishesFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddDishesForm);