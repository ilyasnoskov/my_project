import React from 'react';
import Item from './Item'
import {connect} from 'react-redux';
import {followAC,setUsersAC,  unfollowAC} from "./users-reducer";
import axios from 'axios';


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/ilyasnoskov/json/posts')
            .then((response) => {
                this.props.setUsers(response.data);
            })
    }

    render() {
        return (
            <Item posts={this.props.posts}/>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        posts: state.usersPage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);